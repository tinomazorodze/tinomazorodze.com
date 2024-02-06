import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Helmet from '@/components/helmet'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Helmet
        metaTitle="Uses | Tino Mazorodze"
        metaDescription="Software I use, gadgets I love, and other things I recommend."
        pageUrl="https://www.tinomazorodze.com/uses"
      />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="OMEN 45L, NVIDIA® GeForce 4090, Core i9-13, 64GB DDR5 RAM">
              I was using a Dell G3 GeForce 1050 prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Samsung Odyssey 4K Ark Monitor">
              Featuring 4K resolution, 165Hz refresh, 1ms response this display
              puts you in the action like nothing else. Curved to match the
              human eye and minimize strain so you can get lost in whatever
              world you call home.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              The best all in one code editor on the internet. Add some
              extensions and it will become unstoppable. The best part is its
              100% free.
            </Tool>
            <Tool title="Notepad">
              For some reason I always find myself opening the notepad app to do
              simple text manipulations. It might be plain and not fancy but I
              love it
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I was an AdobeXD fan until Adobe decided to buy Figma and drop XD.
              I was mad for a while but I&#39;m coming to realize it was a good
              decision because Figma has improved my design experienc a lot
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Google Workspace">
              Google has everything I need from Google Calender to Google Docs I
              find myself in check with my tasks and goals
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
