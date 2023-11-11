export default function blockButtonCta(props: any) {
  const { type, text, linkUrl } = props;

  if (type != "twoButton") {
    return (
      <button
        className="w-full block bg-gradient-to-tr hover:bg-gradient-to-tl from-primaryColor via-secondaryColor to-primaryColor text-white text-center py-4 rounded-md"
        onClick={() => {
          window.open(`${linkUrl}`, "_blank")
        }}>{text}</button>
    )
  }

  return (
    <button onClick={() => {
      window.open(`${linkUrl}`, "_blank")
    }}>{text}</button>
  )
}
