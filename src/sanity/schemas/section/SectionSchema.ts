import { Rule } from "sanity";

export default {
  name: "section",
  title: "Section",
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
  ],
};

export type SectionType = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  _createdAt: string;
  _updatedAt: string;
};
