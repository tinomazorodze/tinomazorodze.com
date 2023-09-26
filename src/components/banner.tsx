import Link from "next/link";

export default function Banner() {
  return (
    <aside className="h-fit w-full">
      <Link href="/the-fastest-way-to-make-$10-in-zimbabwe" target="_blank" rel="nofollow">
        <div className="w-full bg-gradient-to-tr hover:bg-gradient-to-tl from-primaryColor via-secondaryColor to-primaryColor py-1 flex items-center justify-center">
          <span className="text-center text-sm text-white">Earn US$10 from Tino 🤑 </span>
        </div>
      </Link>
    </aside>
  )
}
