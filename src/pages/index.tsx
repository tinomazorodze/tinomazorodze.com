import BaseLayout from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { CodeBracketIcon, PaperAirplaneIcon, MegaphoneIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Helmet from '@/components/helmet';

export default function Home() {
  return (
    <>
      <Helmet
        metaTitle='Tino Mazorodze | Software Architect'
        metaDescription='Tino Mazorodze is a Software Architect and Business Consultant based in Harare, Zimbabwe. He helps businesses grow by leveraging technology.'
        pageUrl='https://www.tinomazorodze.com'
      />
      <BaseLayout>
        <section id='hero'>
          <div className='h-screen md:h-[450px] relative'>
            <div className='h-full w-full'>
              <Image src="/content/skills.webp" height={720} width={1280} alt="Tino Mazorodze Desk Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,.6)]"></div>
              <div className="absolute top-0 left-0 right-0 w-full h-full grid place-content-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl mb-4">Need Professional Business IT Services?</h1>
                  <p className="mb-6 text-lg">Tino helps transform old school Zimbabwean businesses into next generation organisations.</p>
                  <div className='flex space-x-4 mx-auto w-fit'>
                    <Link href="/portfolio" className="px-4 py-3 border border-white hover:border-primaryColor hover:text-primaryColor rounded-md">View Portfolio</Link>
                    <Link href="https://www.tinomazorodze.youcanbook.me/" rel="nofollow" target="_blank" className="px-4 py-3 bg-gradient-to-tr hover:bg-gradient-to-tl from-secondaryColor via-primaryColor to-secondaryColor rounded-md">Book a Meeting</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container w-full mx-auto py-16 flex flex-col items-center px-4 md:px-0">
            <span className="text-center text-lg text-primaryColor custom-leaf">Expertise</span>
            <h2 className="text-center text-3xl mb-8">What Tino Can Help With</h2>
            <div className="flex flex-col-reverse items-center md:items-start md:flex-row justify-between w-full max-w-[900px] mx-auto">
              <div>
                <ul className="flex flex-col gap-8 mb-8">
                  <li className="md:bg-transparent bg-accent-2 p-4 md:p-0 rounded-lg">
                    <h3 className="text-xl text-center md:text-left text-primaryColor mb-4">Website Management & Development</h3>
                    <div className="flex space-x-4 flex-col md:flex-row items-center">
                      <div className="w-10 h-10 grid place-content-center border border-primaryColor rounded-md mb-4 md:mb-0"><CodeBracketIcon className="h-6 w-6 text-primaryColor" /></div>
                      <p className="w-full max-w-[400px] text-center md:text-left">You can have Tino update an existing website for you or start a new web presence for your business</p>
                    </div>
                  </li>
                  <li className="md:bg-transparent bg-accent-2 p-4 md:p-0 rounded-lg">
                    <h3 className="text-xl text-center md:text-left text-primaryColor mb-4">Business IT Infrustructure Development</h3>
                    <div className="flex space-x-4 flex-col md:flex-row items-center">
                      <div className="w-10 h-10 grid place-content-center border border-primaryColor rounded-md mb-4 md:mb-0"><WrenchScrewdriverIcon className="h-6 w-6 text-primaryColor" /></div>
                      <p className="w-full max-w-[400px] text-center md:text-left">Infrastructure is a key contributer to business growth and Tino can help you do it the right way</p>
                    </div>
                  </li>
                  <li className="md:bg-transparent bg-accent-2 p-4 md:p-0 rounded-lg">
                    <h3 className="text-xl text-center md:text-left text-primaryColor mb-4">Clean SEO, SEM & Digital Marketing</h3>
                    <div className="flex space-x-4 flex-col md:flex-row items-center">
                      <div className="w-10 h-10 grid place-content-center border border-primaryColor rounded-md mb-4 md:mb-0"><MegaphoneIcon className="h-6 w-6 text-primaryColor" /></div>
                      <p className="w-full max-w-[400px] text-center md:text-left">Among other Marketing Methods Tino can help you with Search Engine Marketing and Optimization</p>
                    </div>
                  </li>
                </ul>
                <Link href="mailto:tino@tinomazorodze.com" rel="nofollow" className="bg-gradient-to-tr hover:bg-gradient-to-tl from-secondaryColor via-primaryColor to-secondaryColor text-white px-6 py-3 rounded-md flex items-center gap-4 w-fit mx-auto">Contact Tino <PaperAirplaneIcon className="h-4" /></Link>
              </div>
              <div className="h-[250px] md:h-[450px] w-full max-w-[350px] relative mb-6 md:mb-0">
                <Image src="/content/main.webp" height={720} width={1280} alt="Wealth Hub Business Guides"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-t from-primaryColor to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    </>

  )
}
