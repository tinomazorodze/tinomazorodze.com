import BaseLayout from '@/components/layout'
import Helmet from '@/components/helmet';

export default function Home() {
  return (
    <>
      <Helmet
        metaTitle='The Safest and Fastest Way to make $10 in Zimbabwe'
        metaDescription='Tino will pay you to complete microtasks such as answering simple questions , doing research and more.'
        pageUrl='https://tinomazorodze.com/surveys'
      />
      <BaseLayout>
        <section id="hero" className='container mx-auto w-full px-4 text-center py-16'>
          <h1 className='text-4xl mb-4'>For Every Task you complete I will pay you US$1, Deal?</h1>
          <p className='text-lg'>Explore avialable tasks below</p>
        </section>
        <section className='flex space-x-4 container mx-auto w-full px-4 justify-center'>
          <div className='w-full max-w-[350px] p-4 border rounded-md border-accent-3'>
            <h2 className='mb-4 text-primaryColor'>Instructions</h2>
            <ul className='flex flex-col space-y-3 text-sm'>
              <li>1. Scroll through to find open Tasks</li>
              <li>2. Click desired task then you will be redirected to chat with a ChatBot</li>
              <li>3. Once task is completed you will be compensated instantly</li>
            </ul>
          </div>
          <div className='w-full max-w-[350px] p-4 border rounded-md border-accent-3'>
            <h2 className='mb-4 text-primaryColor'>Rules</h2>
            <ul className='flex flex-col space-y-3 text-sm'>
              <li>1. Only provide information that is yours or to which you have authorization</li>
              <li>2. Money is paid only through Ecocash or Bank Transfer</li>
              <li>3. Conversation can only start from the Task Message</li>
            </ul>
          </div>
        </section>
        <section id="surveys">
          <h2>Surveys</h2>
          <ul>
            <li>
              Task 1
            </li>
          </ul>
        </section>
      </BaseLayout>
    </>

  )
}
