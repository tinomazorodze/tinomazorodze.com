import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import PtRenderer from '..'
import { ArticleType } from '@/lib/article'

export default function blockGreenCard(props: any, articles: ArticleType[]) {
  const { title, body } = props
  return (
    <aside className="width-full  relative my-8 rounded-xl border-2 border-teal-500 p-4">
      <div className="absolute left-1/2 top-0 grid h-10 w-10 -translate-x-[50%] -translate-y-4 place-content-center rounded-full border-2 border-teal-500 bg-white dark:bg-slate-900">
        <ShieldCheckIcon className="h-8 w-8 text-teal-500" />
      </div>
      <span className="mb-2 block font-bold text-teal-500">{title}</span>
      <div className="text-accent-6 text-sm">
        <PtRenderer body={body} articles={articles} />
      </div>
    </aside>
  )
}
