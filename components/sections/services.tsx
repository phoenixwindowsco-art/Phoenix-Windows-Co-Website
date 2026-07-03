import { Droplets, Layers, Sparkles, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Sparkles,
    title: 'Exterior Window Cleaning',
    description:
      'Professional exterior cleaning for streak-free results. Includes frame wipe-down and sill cleaning.',
  },
  {
    icon: Layers,
    title: 'Hard Water & Buildup Removal',
    description:
      'We tackle mineral deposits, ash residue, and stubborn buildup left behind by the California fires.',
  },
  {
    icon: Droplets,
    title: 'Screen Dusting',
    description:
      'Complimentary light screen dusting included with every job.',
  },
  {
    icon: Building2,
    title: 'Commercial Window Cleaning',
    description:
      'Reliable, scheduled window cleaning for storefronts, offices, and commercial properties.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Offer
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                as="article"
                delay={i * 80}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
