import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function HeroImage(props: any) {
  const { alt, image, imageCredits } = props;

  return (
    <div className="mb-4">
      <div className="mb-1 block rounded-xl">
        <Image
          src={urlForImage(image).width(1280).height(720).url()}
          alt={alt}
          className="rounded-xl h-auto w-full"
          loading="eager"
          title={alt}
          height={1280}
          width={720}
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
