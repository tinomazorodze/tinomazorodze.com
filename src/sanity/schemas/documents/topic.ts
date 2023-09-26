import { BookIcon, TagIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  icon: TagIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ]
})
