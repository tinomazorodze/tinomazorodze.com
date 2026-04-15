import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Current Laptop">
          <Tool title="16” ASUS Vivo Book AMD Edition">
            I was using NVIDIA gaming laptops prior to this and the difference
            now is I can use my laptop in bed without burning my feet.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            I’ve been using VSCode for years now and it’s still my go-to code
            editor. I’ve tried switching to other editors a few times but I
            always end up coming back to VSCode because of the extensions and
            the overall experience.
          </Tool>
          <Tool title="Windows OS">
            As much as most developers prefer using Linux as evidence of being
            hardcore I have tried the switch but I find myself missing some of
            the conveniences of Windows.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            I first used AdobeXD but after it was discontinued I switched to
            Figma and I’ve been loving it ever since.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI Tools">
          <Tool title="V0">
            As a NextJS lover, I’ve been using V0 for a while now and it’s been
            a great tool for turning my insane design ideas into actual designs
            that I can then implement in code.
          </Tool>
          <Tool title="Gemini">
            To be honest for me it's just a habit otherwise I really don't find
            it any different from using ChatGPT. I use Gemini for general
            questions and fixing code errors that I don't want to waste credits
            on in V0.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Tick Tick">
            For many years now I have been using Tick Tick as my go-to task
            manager and I love it. It has a great interface and it’s very easy
            to use.
          </Tool>
          <Tool title="Google Keep">
            I previously used Evernote but ever since they became extra money
            hungry I switched to Google Keep and it is now my default note
            taking app.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
