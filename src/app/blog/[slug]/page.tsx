import Content from "@/components/Content";
import { fetchSingleBlog } from "@/sanity/utils/fetchBlogs";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack, IoBook } from "react-icons/io5";
import AboutImage from "../../../../public/about_image.webp";
import Navbar from "@/components/Navbar";
export const revalidate = 0;

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const [blog] = await Promise.all([fetchSingleBlog(slug)]);

  return (
    <main className="relative flex h-dvh w-full flex-col overflow-hidden">
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

      <Navbar />

      {blog && (
        <section className="relative flex h-full w-full flex-1 flex-col overflow-hidden px-20 pt-5">
          <div className="relative mx-auto w-full flex-1 overflow-y-auto rounded-xl bg-black/90 p-5 text-white">
            <div className="group relative mt-5 flex w-max items-center justify-center">
              <div className="absolute -inset-1 bg-white/50 blur-lg group-hover:bg-white/10"></div>
              <Link
                href={"/blog"}
                className="relative flex w-full items-center justify-center gap-2 border border-white bg-radial from-white/60 from-10% to-white/60 px-5 py-2 text-sm font-bold text-white uppercase hover:from-transparent"
              >
                <IoArrowBack className="size-5" /> Go back
              </Link>
            </div>

            <div className="mx-auto w-full max-w-3xl">
              {blog?.thumbnail && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 z-10 animate-pulse bg-white/5"></div>
                  <Image
                    fill
                    src={blog?.thumbnail?.asset?.url}
                    className="relative z-20 aspect-video size-full object-cover"
                    alt="Blog thumbnail"
                  />
                </div>
              )}

              <h1 className="mt-3 text-center text-4xl font-medium md:text-6xl">
                {blog?.title}
              </h1>

              <div className="prose prose-2xl prose-h1:p-0 font-game w-full text-white">
                <Content blogContent={blog.content} />
              </div>
            </div>
          </div>
        </section>
      )}

      {!blog && (
        <section className="flex h-dvh w-full flex-1 flex-col items-center justify-center text-gray-800">
          <div className="flex w-full flex-1 flex-col items-center justify-center">
            <div className="bg-primary text-skin-secondary flex w-min items-center justify-center rounded-full p-5">
              <IoBook className="size-7" />
            </div>
            <p className="mt-2 text-base font-semibold text-gray-800">
              Blog not found
            </p>
            <p className="text-center text-xs text-balance text-gray-800/50">
              The blog you are looking for does not exist.
            </p>

            <Link
              className="text-skin-secondary mt-2 text-xs hover:underline"
              href="/blogs"
            >
              Browse other blogs
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default page;
