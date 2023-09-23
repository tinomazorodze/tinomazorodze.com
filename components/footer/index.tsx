import siteConfig from '@/content/site.json';

export default function Footer() {
  const today = new Date();

  return (
    <footer className='w-full border-t pt-8 border-accent-2'>
      <ul className="flex items-center justify-center space-x-4">
        <li><a href={siteConfig.url.twitter} rel="nofollow noopener" target='_blank'>Twitter</a></li>
        <li><a href={siteConfig.url.linkedin} rel="nofollow noopener" target='_blank'>LinkedIn</a></li>
        <li><a href={siteConfig.url.instagram} rel="nofollow noopener" target='_blank'>Instagram</a></li>
        <li><a href={siteConfig.url.facebook} rel="nofollow noopener" target='_blank'>Facebook</a></li>
      </ul>
      <div className="p-[25px] text-center">
        &copy; {today.getFullYear()} TINO MAZORODZE. All rights reserved.
      </div>
    </footer>
  )
}
