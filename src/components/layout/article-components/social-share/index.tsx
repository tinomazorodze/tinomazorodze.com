import { Fragment } from 'react';
import Twitter from '@/components/icons/twitter';
import FacebookF from '@/components/icons/facebook-f';
import Reddit from '@/components/icons/reddit';
import PinterestP from '@/components/icons/pinterest-p';
import LinkedInIn from '@/components/icons/linkedin-in';
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import siteConfig from '@/content/site.json';

const handleClick = () => {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  navigator.clipboard.writeText(pageUrl);
};

const SocialShare = ({ title }: { title: string }) => {
  const router = useRouter();

  const pageUrl = router.asPath;
  const pageTitle = encodeURIComponent(title.toString());

  return (
    <div className="flex flex-col">
      <span className='text-xs text-accent-6 block'>SHARE ON:</span>
      <div className='flex justify-between items-center w-[120px] md:w-[130px]'>
        <button onClick={
          () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.url.web}${pageUrl}`, "_blank")
          }
        }
          aria-label='Share On Facebook'
          className="hover:text-primaryColor">
          <FacebookF />
        </button>
        <button
          aria-label='Share On Twitter'
          onClick={
            () => {
              window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${siteConfig.url.web}${pageUrl}`, "_blank")
            }
          }
          className="hover:text-primaryColor"
        >
          <Twitter className="w-4 h-4" />
        </button>
        <button
          aria-label='Share On Reddit'
          onClick={
            () => {
              window.open(`https://www.reddit.com/submit?url=${siteConfig.url.web}${pageUrl}&title=${pageTitle}`, "_blank")
            }
          }
          className="hover:text-primaryColor"
        >
          <Reddit />
        </button>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="grid place-content-center" aria-label='More Share Options'>
              <EllipsisHorizontalIcon
                className="h-6 w-6 hover:text-primaryColor"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-[150px] origin-top-right border border-accent-2 rounded-md bg-primary focus:outline-none shadow-md ">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={
                        () => {
                          window.open(`https://pinterest.com/pin/create/button/?url=${siteConfig.url.web}${pageUrl}&description=${pageTitle}`, "_blank")
                        }
                      }
                      className={`${active && 'text-primaryColor'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <PinterestP aria-hidden="true" className="mr-2 h-4 w-4" />
                      Pinterest
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={
                        () => {
                          window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${siteConfig.url.web}${pageUrl}&title=${pageTitle}`, "_blank")
                        }
                      }
                      className={`${active && 'text-primaryColor'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <LinkedInIn aria-hidden="true" className="mr-2 h-4 w-4" />
                      LinkedIn
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={
                        () => {
                          window.open(`mailto:?subject=${pageTitle}&body=${siteConfig.url.web}${pageUrl}`, "_blank")
                        }
                      }
                      className={`${active && 'text-primaryColor'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <EnvelopeIcon aria-hidden="true" className="mr-2 h-4 w-4" />
                      Mail
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={handleClick}
                      className={`${active && 'text-primaryColor'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                    >
                      <LinkIcon aria-hidden="true" className="mr-2 h-4 w-4" />
                      Copy Link
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default SocialShare;
