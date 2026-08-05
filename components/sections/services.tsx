import {
  Droplets,
  Layers,
  Sparkles,
  Building2,
  Waves,
  Home,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionBackdrop } from '@/components/section-backdrop'

const serviceGroups = [
  {
    label: 'Window Cleaning',
    services: [
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
    ],
  },
  {
    label: 'Pressure & Soft Washing',
    services: [
      {
        icon: Waves,
        title: 'Pressure Washing',
        description:
          'High-pressure cleaning for driveways, sidewalks, entryways, patios, and other hard exterior surfaces.',
      },
      {
        icon: Home,
        title: 'Soft Washing',
        description:
          'Low-pressure, surface-safe washing for siding, stucco, and delicate exteriors — removing grime, algae, and ash without damage.',
      },
    ],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-surface-2"
    >
      <SectionBackdrop variant="ember" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Window Cleaning & Pressure Washing
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Two full service lines for your property — crystal-clear windows and
            deep-cleaned exterior surfaces.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-12">
          {serviceGroups.map((group) => (
            <div key={group.label}>
              <Reveal>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {group.label}
                </h3>
              </Reveal>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {group.services.map((service, i) => {
                  const Icon = service.icon
                  return (
                    <Reveal
                      key={service.title}
                      as="article"
                      delay={i * 80}
                      className="rounded-md border border-border bg-background p-6 transition-colors hover:border-primary/40"
                    >
                      <span className="flex size-12 items-center justify-center rounded-md bg-primary/10">
                        <Icon
                          className="size-6 text-primary"
                          aria-hidden="true"
                        />
                      </span>
                      <h4 className="mt-5 text-lg font-semibold text-foreground">
                        {service.title}
                      </h4>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
