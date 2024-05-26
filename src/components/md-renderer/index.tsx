// @ts-ignore
import { MDXProvider } from '@mdx-js/react'
import { DoFollow, EnrichedLink } from './mdx-components/a'
import { Code } from './mdx-components/code'
import Headings from './mdx-components/headings'
import { Li, Ol, Ul } from './mdx-components/list'
import { P } from './mdx-components/p'
import { Table } from './mdx-components/table'

const MdxComponents = {
  a: EnrichedLink,
  Link: DoFollow,
  code: Code,
  ...Headings,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
}

type MdRendererType = {
  children: React.ReactNode
}

export default function MdRenderer(props: MdRendererType) {
  return <MDXProvider components={MdxComponents}>{props.children}</MDXProvider>
}
