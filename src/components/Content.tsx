import {
  PortableTextComponentProps,
  PortableTextReactComponents,
} from "@portabletext/react";
import {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from "@portabletext/types";
import { PortableText } from "next-sanity";
import React from "react";

// Define the type for blog content
interface BlogContentProps {
  blogContent: PortableTextBlock<
    PortableTextMarkDefinition,
    ArbitraryTypedObject | PortableTextSpan,
    string,
    string
  >[];
}

const Content: React.FC<BlogContentProps> = ({ blogContent }) => {
  // Define the custom components for PortableText
  const customComponents: Partial<PortableTextReactComponents> = {
    marks: {
      code: ({ children }) => (
        <div>
          <pre className="bg-primary/10 my-4 overflow-auto rounded-md p-4 text-white">
            <code className="font-mono text-sm">{children}</code>
          </pre>
        </div>
      ),
      strong: ({ children }) => (
        <strong className="font-bold text-white">{children}</strong>
      ),
      link: ({ value, children }: any) => (
        <a
          href={value.href}
          target="_blank"
          className="cursor-pointer text-lg font-medium text-blue-600 hover:underline"
        >
          {children}
        </a>
      ),
    },
    block: {
      normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <p className="mt-3 mb-6 text-lg leading-relaxed text-white/90">
          {children}
        </p>
      ),
      h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h1 className="my-3 text-3xl font-bold text-white">{children}</h1>
      ),
      h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
        <h2 className="mt-2 text-2xl font-semibold text-white">{children}</h2>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="ml-6 list-disc space-y-2 text-white/90">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="ml-6 list-decimal space-y-2 text-white/90">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="text-base leading-relaxed">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="text-base leading-relaxed">{children}</li>
      ),
    },
    types: {
      image: ({
        value,
      }: PortableTextComponentProps<{
        asset: { url: string };
        alt?: string;
      }>) => (
        <img
          src={value.asset.url}
          alt={value.alt || "Image"}
          className="my-6 max-w-full overflow-hidden rounded-2xl"
        />
      ),
      videoFile: ({
        value,
      }: PortableTextComponentProps<{
        video: { url: string };
        poster?: { url: string };
      }>) => (
        <video
          controls
          className="my-6 aspect-video max-w-full overflow-hidden rounded-2xl"
          poster={value?.poster?.url} // Use the poster image if available
        >
          <source src={value?.video?.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
      videoEmbed: ({
        value,
      }: PortableTextComponentProps<{
        url: string;
        provider?: "youtube" | "vimeo" | "other";
      }>) => (
        <div className="relative my-6 aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src={value.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ),
    },
  };

  return <PortableText value={blogContent} components={customComponents} />;
};

export default Content;
