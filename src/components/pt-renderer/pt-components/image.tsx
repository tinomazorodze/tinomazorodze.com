import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function imageModule(props: any) {
  const { alt, image, imageCredits } = props;

  return (
    <div className="mb-4">
      <div className="mb-1 block rounded-xl">
        <Image
          src={urlForImage(image).width(1280).height(720).url()}
          alt={`${alt} - Wealth Hub`}
          className="rounded-xl h-auto w-full"
          loading="lazy"
          title={alt}
          height={720}
          width={1280}
        />
      </div>
      {imageCredits && (
        <small className="text-accent-5">
          {"("}Image Credit: {imageCredits}
          {")"}
        </small>
      )}
    </div>
  );
}
