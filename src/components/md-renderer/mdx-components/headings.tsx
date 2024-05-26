import { Linkify } from '@/lib/renderer'
import styled from 'styled-components'

const H1 = ({ children }: any) => {
  const id = Linkify(children)

  return (
    <h1 className="mb-5 text-[1.875rem] font-[600] md:text-3xl" id={id}>
      {children}
    </h1>
  )
}

const H2 = ({ children }: any) => {
  const id = Linkify(children)

  return (
    <h2
      className="-mt-20 mb-5 pt-28 text-[1.875rem] font-[600] md:text-3xl"
      id={id}
    >
      {children}
    </h2>
  )
}

const H3 = ({ children }: any) => {
  const id = Linkify(children)

  return (
    <h3
      className="-mt-20 mb-5 pt-28 text-[1.6rem] font-[500] md:text-3xl"
      id={id}
    >
      {children}
    </h3>
  )
}

const H4 = styled.h4`
  font-size: 1.375rem;
  margin-bottom: 1.25rem;
  color: teal;
`

const Headings = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
}

export default Headings
