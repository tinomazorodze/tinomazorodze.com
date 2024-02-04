export function Linkify(titleText: string) {
  const linkified =
    titleText?.toLowerCase &&
    titleText
      .toLowerCase()
      .replace(/[^\x00-\x7F]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[?!.]/g, '');

  return linkified;
}

export function Textify(linkifiedText: string) {
  const textified = linkifiedText
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return textified;
}
