import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Up to 10 Windows',
    price: '$60–$90',
    features: [
      'Up to 10 exterior windows',
      'Streak-free results',
      'Frame wipe-down',
      'Sill cleaning included',
    ],
    popular: false,
  },
  {
    name: '11–20 Windows',
    price: '$120–$170',
    features: [
      '11–20 exterior windows',
      'Streak-free results',
      'Frame wipe-down',
      'Sill cleaning included',
      'Priority scheduling',
    ],
    popular: true,
  },
  {
    name: '21–30 Windows',
    price: '$190–$240',
    features: [
      '21–30 exterior windows',
      'Streak-free results',
      'Frame wipe-down',
      'Priority scheduling',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Transparent Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Fair Pricing
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No hidden fees. Quality window cleaning at honest rates.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 80}
              className={cn(
                'relative flex h-full flex-col rounded-xl border bg-background p-6',
                tier.popular
                  ? 'border-accent shadow-[0_0_0_1px_var(--accent)] lg:-translate-y-2'
                  : 'border-border',
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  <Star className="size-3.5 fill-current" aria-hidden="true" />
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">
                {tier.name}
              </h3>
              <div className="mt-3">
                <span className="text-sm text-muted-foreground">
                  Starting from
                </span>
                <p className="text-3xl font-bold text-foreground">
                  {tier.price}
                </p>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#quote"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get Quote
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Every quote is free, transparent, and provided before any work
            begins.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
