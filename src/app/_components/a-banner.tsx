'use client'

export default function Banner() {
  return (
    <div
      className="flex w-full cursor-pointer justify-center bg-gradient-to-tr from-teal-400 via-teal-700 to-teal-400 py-1"
      onClick={(e) => {
        e.preventDefault()
        window.open(
          `https://wa.me/+263780105064?text=${encodeURI('Hi, I got referred from your website')}`,
          '_blank',
        )
      }}
    >
      <span className="text-xs text-white">
        <span>New Features Coming ⚙️.</span>&nbsp;
        <span className="underline">Learn more 💁‍♂️</span>
      </span>
    </div>
  )
}
