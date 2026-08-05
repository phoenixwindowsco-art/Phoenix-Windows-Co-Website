import Link from 'next/link'
import { ShieldCheck, HandCoins, ClipboardList } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionBackdrop } from '@/components/section-backdrop'

const promises = [
  {
    icon: ClipboardList,
    title: 'Custom Quotes',
    description:
      'Every property is different. We assess your specific needs and provide a tailored quote — no guesswork, no generic rates.',
  },
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    description:
      'The price we quote is the price you pay. Transparent and honest, with every detail explained before we begin.',
  },
  {
    icon: HandCoins,
    title: 'Always Free to Ask',
    description:
      'Every estimate is completely free and comes with no obligation. Reach out and we will take care of the rest.',
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 overflow-hidden bg-surface-2"
    >
      <SectionBackdrop variant="scenery" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Simple & Transparent
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fair, Custom Quotes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pricing depends on the size and scope of your project. Tell us what
            you need and we&apos;ll put together a free, no-obligation quote.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {promises.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal
                key={item.title}
                as="article"
                delay={i * 80}
                className="flex flex-col rounded-md border border-border bg-background p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-md bg-accent/10">
                  <Icon className="size-6 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Request a Free Quote
          </Link>
          <p className="text-sm text-muted-foreground">
            Every quote is free, transparent, and provided before any work
            begins.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
