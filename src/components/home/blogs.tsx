import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type BlogType = {
  name: string;
  link: string;
  imageUrl: string;
  description: string;
};

const blogs = [
  {
    name: "Coding Blog",
    link: "https://coding.tinomazorodze.com",
    imageUrl: "/coding.webp",
    description:
      "I write about my coding experience as well as tips and lessons on front-end development.",
  },
  {
    name: "Gaming Blog",
    link: "https://gaming.tinomazorodze.com",
    imageUrl: "/gaming.webp",
    description:
      "I write gaming guides/wikis. Learn how to play the games I play or watch me stream.",
  },
] satisfies BlogType[];

export default function BlogsListing() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl mb-8">Checkout my blogs</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.name} />
        ))}
      </ul>
    </section>
  );
}

function Blog({ blog }: { blog: BlogType }) {
  return (
    <li className="border border-gray-200 dark:border-gray-700 p-2 md:p-6 rounded-lg w-full">
      <div className="h-[120px] md:h-[150px] w-full mb-4">
        <Image
          src={`/assets${blog.imageUrl}`}
          height={500}
          width={1000}
          className="h-full w-full object-cover  rounded-md"
          alt={blog.name}
        />
      </div>
      <h3 className="text-xl mb-4">{blog.name}</h3>
      <p className="text-gray-600 dark:text-gray-200">{blog.description}</p>
      <Link
        href={blog.link}
        className="flex w-full items-center justify-center mt-8 bg-gray-100 dark:bg-gray-700 py-3 rounded-md gap-2 hover:text-primaryColor"
      >
        <span>{blog.name.split(" ")[0]} Articles</span>
        <ArrowTopRightOnSquareIcon className="size-4" />
      </Link>
    </li>
  );
}
