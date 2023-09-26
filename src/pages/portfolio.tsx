import Helmet from "@/components/helmet";
import BaseLayout from "@/components/layout";
import { getAllProjects } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { UserIcon } from "@sanity/icons";
import Image from "next/image";
import Link from "next/link";

type ProjectType = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  gallery: {
    asset: {
      url: string;
    }
  }[];
  link: {
    url: string;
    dofollow: boolean;
  };
  testimonial: {
    authorName: string;
    authorTitle: string;
    companyName: string;
    quote: string;
    authorImage: {
      asset: {
        url: string;
      }
    }
  }

}
type PortfolioProps = {
  projects: ProjectType[];
}

export default function Portfolio(props: PortfolioProps) {
  const { projects } = props;

  return (
    <>
      <Helmet
        metaTitle='Tino Mazorodze Portfolio | Client Work'
        metaDescription='An overview of testimonials, case studies and client work by Tino Mazorodze'
        pageUrl='https://tinomazorodze.com/portfolio'
      />
      <BaseLayout>
        <main className="py-16 bg-accent-2">
          <h1 className="text-center text-4xl mb-10">My Work Experience & Testimonials</h1>
          <ul className="flex flex-col space-y-5 items-center">
            {projects.map((project, i) => (
              <li key={i} className="w-full max-w-[800px] mx-auto bg-primary p-4 rounded-lg flex flex-col md:flex-row space-x-4 relative">
                <div className="w-full max-w-[300px]">
                  <div className="h-[169px] w-full mb-4">
                    <Image src={urlForImage(project.gallery[0]).url()} alt={project.name} height={169} width={300} className="w-full h-full object-cover rounded-md" />
                  </div>
                  <div className="flex justify-between">
                    {project.gallery
                      .slice(1, 4)
                      .map((image, i) => (
                        <div key={i} className="h-[50px] w-[90px]">
                          <Image src={urlForImage(image).url()} alt={project.name} height={50} width={90} className="w-full h-full object-cover rounded-md" />
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl">{project.name}</h2>
                  <span className="text-sm text-accent-7 mb-4 block">{
                    new Date(project.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  } to {project.endDate && (new Date(project.startDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })) || "Date (Maintainance & Management)"}</span>
                  <div className="border border-accent-2 rounded-lg p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      {project.testimonial.authorImage ? (
                        <Image src={urlForImage(project.testimonial.authorImage).url()} alt={project.testimonial.authorName} height={40} width={40} className="rounded-full" />
                      ) : (
                        <div className="h-[40px] w-[40px] grid place-content-center rounded-full bg-accent-2"><UserIcon className="h-6 w-6" /></div>
                      )}

                      <div className="flex flex-col">
                        <span>{project.testimonial.authorName}</span>
                        <span className="text-sm text-accent-7">{project.testimonial.authorTitle} @ {project.testimonial.companyName}</span>
                      </div>
                    </div>
                    <blockquote className="text-sm">{project.testimonial.quote}</blockquote>
                  </div>
                </div>
                <Link href={project.link.url} target="_blank" rel={project.link.dofollow ? "" : "nofollow"} className="absolute top-4 right-4 text-sm py-1 px-2 bg-gradient-to-tr hover:bg-gradient-to-tl from-secondaryColor via-primaryColor to-secondaryColor text-white rounded-full">
                  See Project
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </BaseLayout>
    </>
  )
}

export async function getStaticProps() {
  const [projects]: [ProjectType[]] = await Promise.all([
    getAllProjects(),
  ])

  return {
    props: {
      projects,
    }
  }
}
