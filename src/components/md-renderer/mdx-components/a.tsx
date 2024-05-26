import Link from 'next/link';

export const EnrichedLink = ({ href, children }: any) => {
  // Is external URL or is a media URL
  const isExternalUrl = /(^http(s)?:\/\/)|(\.(png|svg|jpeg|jpg)$)/.test(href);

  const linkProps: Record<string, string> = {
    target: '_self',
    ...(isExternalUrl ? { rel: 'nofollow', target: '_blank' } : {}),
  };

  return (
    <Link href={href} className="text-mainColor border-b-mainColor hover:text-opacity-90 border-b-2 font-semibold"
      {...linkProps}>
      {children}
    </Link>
  );
};

export function DoFollow({ href, children }: any) {
  return (
    <Link href={href} target="_blank"
      className="text-mainColor border-b-mainColor hover:text-opacity-90 border-b-2 font-semibold">
      {children}
    </Link>
  );
}
