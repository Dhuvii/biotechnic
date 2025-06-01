import Image from "next/image";
import React, { Fragment } from "react";
import AboutImage from "../../../public/about_image.webp";
import Navbar from "@/components/Navbar";
import {
  getBlogsGroupedBySection,
  getFeaturedBlogs,
} from "@/sanity/utils/fetchBlogs";
import Link from "next/link";

export const revalidate = 0;

const page = async () => {
  const blogsGroupedBySection = await getBlogsGroupedBySection();
  const featuredBlogs = await getFeaturedBlogs();

  return (
    <section className="relative flex h-dvh w-full flex-col">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={AboutImage}
            alt="about image"
            fill
            placeholder="blur"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex w-full flex-1 flex-col overflow-y-auto">
        <Navbar />
        <div className="mt-10 w-full flex-1 flex-col px-5 lg:px-20">
          <div className="flex w-full flex-col rounded-2xl border border-white/20 bg-black/90 p-5 lg:p-10">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="relative flex w-max items-center justify-center">
                <div className="absolute inset-2 inset-y-3 bg-[#00FF80]/70 blur-md"></div>
                <h1 className="text-shadow-sm relative text-center text-5xl font-bold tracking-wider text-white uppercase">
                  Blog
                </h1>
              </div>

              <div className="relative flex w-24 items-center justify-center">
                <div className="absolute -inset-1 w-24 bg-[#00FF80]/20 blur-md"></div>
                <div className="relative mt-2 h-2 w-24 rounded-full bg-white"></div>
              </div>
            </div>

            {/* featured blog */}
            {featuredBlogs && featuredBlogs.items.length > 0 && (
              <Link
                href={`/blog/${featuredBlogs.items[0].slug.current}`}
                className="group mt-10 grid w-full grid-cols-1 gap-10 rounded-2xl lg:grid-cols-5"
              >
                <div className="relative col-span-3 aspect-video w-full overflow-hidden rounded-2xl">
                  <Image
                    src={featuredBlogs.items[0].thumbnail.asset.url}
                    alt="about image"
                    fill
                    className="absolute inset-0 aspect-video size-full object-cover"
                  />
                </div>

                <div className="col-span-2 flex w-full flex-col text-white">
                  <h1 className="text-3xl group-hover:underline">
                    {featuredBlogs.items[0].title}
                  </h1>
                  <p className="font-game mt-5 flex-1">
                    {featuredBlogs.items[0].description}
                  </p>
                </div>
              </Link>
            )}
            {/* featured blog */}

            {/* non featured blog */}
            {blogsGroupedBySection &&
              blogsGroupedBySection.length > 0 &&
              blogsGroupedBySection.map((section, idx) => (
                <Fragment key={idx}>
                  {section.blogs.length > 0 && (
                    <div className="mt-10 w-full">
                      <div className="relative flex w-max items-center justify-center">
                        <div className="absolute inset-2 inset-y-3 bg-[#00FF80]/70 blur-md"></div>
                        <h1 className="text-shadow-sm relative text-center text-5xl font-bold tracking-wider text-white uppercase">
                          {section.title}
                        </h1>
                      </div>

                      {section.blogs.length > 0 && (
                        <div className="mt-5 flex w-full flex-1 items-start justify-start gap-5 overflow-x-auto">
                          {/* card */}
                          {section.blogs.map((blog, idx) => (
                            <Link
                              href={`/blog/${blog.slug.current}`}
                              key={idx}
                              className="group flex h-96 w-full max-w-xs shrink-0 flex-col rounded-xl bg-black/30"
                            >
                              <div className="relative aspect-video overflow-hidden rounded-xl">
                                <Image
                                  src={blog.thumbnail.asset.url}
                                  alt="about image"
                                  fill
                                  className="absolute inset-0 size-full object-cover"
                                />
                              </div>

                              <div className="p-5 text-white">
                                <h1 className="text-xl group-hover:underline">
                                  {blog.title}
                                </h1>
                                <p className="mt-2 line-clamp-3 text-xs">
                                  {blog.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                          {/* card */}
                        </div>
                      )}
                    </div>
                  )}
                </Fragment>
              ))}
            {/* non featured blog */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
