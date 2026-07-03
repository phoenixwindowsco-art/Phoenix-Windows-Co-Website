import Link from 'next/link'
import { BadgeCheck, Heart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const badges = [
  {
    icon: BadgeCheck,
    title: 'Streak Free Guarantee',
    color: 'text-primary',
  },
  {
    icon: Heart,
    title: 'Community First',
    subtitle: '20% of every job donated',
    color: 'text-accent',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url(/images/ember-texture.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <Reveal>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Phoenix Pane Co.
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 text-balance text-xl font-semibold text-primary sm:text-2xl">
            Cleaning windows. Rebuilding communities.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Streak-free, professional window cleaning for homes and businesses
            across Southern California — and we give back to a team that gives
            back with every job.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/#services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
            >
              Our Services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.title}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center"
                >
                  <Icon className={`size-6 ${badge.color}`} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {badge.title}
                    </p>
                    {badge.subtitle && (
                      <p className="text-xs text-muted-foreground">
                        {badge.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
