// schemas/blog.js
import { Rule } from "sanity";

export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          title: "Video File",
          name: "videoFile",
          type: "object",
          fields: [
            {
              title: "Video",
              name: "video",
              type: "file",
              options: {
                accept: "video/*",
              },
            },
            {
              title: "Poster Image",
              name: "poster",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          type: "object",
          name: "videoEmbed",
          title: "Video Embed",
          fields: [
            {
              name: "url",
              title: "Video URL",
              type: "url",
              validation: (Rule: Rule) =>
                Rule.required().uri({ scheme: ["http", "https"] }),
            },
            {
              name: "provider",
              title: "Provider",
              type: "string",
              options: {
                list: [
                  { title: "YouTube", value: "youtube" },
                  { title: "Vimeo", value: "vimeo" },
                  { title: "Other", value: "other" },
                ],
              },
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Author",
      name: "author",
      type: "object",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          title: "Avatar",
          name: "avatar",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: "Featured",
      name: "isFeatured",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Optional tags for categorizing the blog post.",
    },
    // --- NEW SECTION FIELD ---
    {
      title: "Section",
      name: "section",
      type: "reference",
      to: [{ type: "section" }],
      description: "The primary section this blog post belongs to.",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export type BlogType = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  thumbnail: {
    asset: {
      _id: string;
      url: string;
    };
  };
  content: (
    | {
        _type: "image";
        asset: {
          _id: string;
          url: string;
        };
      }
    | {
        _type: "videoFile";
        video: {
          url: string;
        };
        poster?: {
          url: string;
        };
      }
    | {
        _type: "videoEmbed";
        url: string;
        provider?: "youtube" | "vimeo" | "other";
      }
    | any // any block content
  )[];
  author: {
    name: string;
    avatar?: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  _createdAt: string;
  _updatedAt: string;
  isFeatured: boolean;
  tags?: string[];
  section?: {
    _type: "reference";
    _ref: string;
  };
};
