import { groq } from "next-sanity";
import { client } from "../schemas"; // Assuming client is correctly configured
import { BlogType as OriginalBlogType } from "../schemas/blogs/BlogSchema"; // Your original type

// Type from your existing code, representing a blog with its section info
export type BlogTypeWithSection = OriginalBlogType & {
  section?: {
    _id: string; // Added _id for completeness
    title: string;
    slug: {
      current: string;
    };
    description?: string; // If fetched, like in fetchSingleBlog
  };
  // isFeatured is already part of OriginalBlogType or implied by the query context
};

// Type for a blog when it's listed under a section (section info is redundant here)
// and isFeatured is implicitly false for this new function's context
export type BlogEntryInSection = Omit<
  OriginalBlogType,
  "isFeatured" | "section"
> & {
  // We can re-add fields if Omit removes too much or is not precise enough
  // For example, if OriginalBlogType itself was an Omit from a larger type.
  // For now, assuming OriginalBlogType has all necessary fields like _id, title, slug etc.
  // and we just want to signal that 'section' and 'isFeatured' are handled by the grouping.
};

// Type for a section that includes its non-featured blogs
export type SectionWithBlogs = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string; // Assuming your section schema has a description
  blogs: BlogEntryInSection[];
  totalBlogsInSection: number;
};

// --- Existing Functions (from your provided code, with minor type adjustments if needed) ---

export async function getFeaturedBlogs(): Promise<{
  items: BlogTypeWithSection[];
  total: number;
}> {
  const blogs = await client.fetch<BlogTypeWithSection[]>(
    groq`
        *[_type == "blog" && isFeatured == true] | order(_createdAt desc) {
          _id,
          title,
          slug,
          description,
          thumbnail {
            asset -> {
              _id,
              url
            }
          },
          author {
            name,
            avatar {
              asset -> {
                _id,
                url
              }
            }
          },
          tags,
          _createdAt,
          _updatedAt,
          isFeatured,
          section->{
            _id,
            title,
            slug
          }
        }
      `,
  );

  const total = await client.fetch<number>(
    groq`
      count(*[_type == "blog" && isFeatured == true])
    `,
  );

  return { items: blogs, total };
}

export async function getNonFeaturedBlogs(
  option: {
    page: number;
    perPage: number;
  } = {
    page: 1,
    perPage: 10,
  },
): Promise<{
  items: BlogTypeWithSection[];
  total: number;
  perPage: number;
}> {
  const skip = (option.page - 1) * option.perPage;
  const blogs = await client.fetch<BlogTypeWithSection[]>(
    groq`
        *[_type == "blog" && isFeatured == false] | order(_createdAt desc) [${skip}...${skip + option.perPage}] {
          _id,
          title,
          slug,
          description,
          thumbnail {
            asset -> {
              _id,
              url
            }
          },
          author {
            name,
            avatar {
              asset -> {
                _id,
                url
              }
            }
          },
          tags,
          _createdAt,
          _updatedAt,
          isFeatured,
          section->{
            _id,
            title,
            slug
          }
        }
      `,
  );

  const total = await client.fetch<number>(
    groq`
      count(*[_type == "blog" && isFeatured == false])
    `,
  );

  return { items: blogs, total, perPage: option.perPage };
}

export async function fetchSingleBlog(
  slug: string,
): Promise<BlogTypeWithSection | null> {
  try {
    const query = groq`
      *[_type == "blog" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        description,
        thumbnail {
          asset -> {
            _id,
            url
          }
        },
        content[] {
          ...,
          _type == "image" => {
            asset -> {
              _id,
              url,
              metadata {
                dimensions,
                lqip
              }
            }
          },
          _type == "videoFile" => {
           "video" : video.asset -> {
              _id,
              url,
              mimeType,
              size
            },
            "poster" : poster.asset -> {
              _id,
              url
            },
          },
          _type == "videoEmbed" => {
            url,
            provider
          }
        },
        author {
          name,
          avatar {
            asset -> {
              _id,
              url
            }
          }
        },
        tags,
        _createdAt,
        _updatedAt,
        isFeatured,
        section->{
          _id,
          title,
          slug,
          description
        }
      }
    `;
    const blog = await client.fetch<BlogTypeWithSection>(query, { slug });
    return blog || null;
  } catch (error) {
    console.error("Error fetching single blog:", error);
    return null;
  }
}

export async function getBlogsGroupedBySection(): Promise<SectionWithBlogs[]> {
  try {
    const query = groq`
      *[_type == "section"] | order(title asc) {
        _id,
        title,
        slug,
        description, // Assuming your section schema has a description field
        "blogs": *[_type == "blog" && references(^._id) && (isFeatured == false || !defined(isFeatured))] | order(_createdAt desc) {
          // Project the fields you need for blog cards/listings within a section
          _id,
          title,
          slug,
          description, // Or a shorter excerpt
          thumbnail {
            asset -> {
              _id,
              url
            }
          },
          author {
            name,
            avatar {
              asset -> {
                _id,
                url
              }
            }
          },
          tags,
          _createdAt,
          _updatedAt
          // No 'section' field here, as it's implied by the parent
          // No 'isFeatured' field here, as we're filtering for non-featured
        },
        "totalBlogsInSection": count(*[_type == "blog" && references(^._id) && (isFeatured == false || !defined(isFeatured))])
      }
    `;
    const sectionsWithBlogs = await client.fetch<SectionWithBlogs[]>(query);
    return sectionsWithBlogs || [];
  } catch (error) {
    console.error("Error fetching blogs grouped by section:", error);
    return [];
  }
}
