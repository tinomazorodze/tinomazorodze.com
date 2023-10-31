import Image from "next/image"
import { useEffect, useRef } from "react";
import JSConfetti from 'js-confetti'

export default function Nicole() {
  const audioRef: any = useRef();

  useEffect(() => {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    audioRef.current.play();
  })

  return (
    <main className="h-screen w-screen bg-[#333] text-white">
      <div className="w-full h-[400px] p-4">
        <Image src="/assets/nicole.webp" height={900} width={600} className="w-full h-full object-cover rounded-lg" alt="Nicole" />
      </div>
      <div className="p-4 text-4xl text-center">Happy Birthday <span className="bg-gradient-to-tr from-[var(--purple)] via-secondaryColor to-[var(--purple)] bg-clip-text text-transparent font-bold">Nae Nae</span></div>
      <audio ref={audioRef} id="player" autoPlay>
        <source src="media/hbd.mp3" />
      </audio>
      <div className="h-[50px] w-[200px] grid place-content-center bg-gradient-to-tr from-primaryColor via-secondaryColor to-primaryColor rounded-full mx-auto font-bold">Mabesty manyama</div>
    </main>
  )
}
