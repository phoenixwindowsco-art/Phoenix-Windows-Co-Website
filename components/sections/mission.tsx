import Link from 'next/link'
import { Flame } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/ember-texture.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Mission
              <Flame className="size-4" aria-hidden="true" />
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Born From the{' '}
              <span className="text-accent">California Fires</span>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Phoenix Pane Co. was born from the Eaton Fires. We lost our home —
              and turned that loss into a mission to serve our community.
              That&apos;s why 20% of every job is donated to California fire
              relief.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/our-mission"
                className="inline-flex w-full items-center justify-center rounded-xl border border-primary px-5 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
              >
                Every clean makes Altadena a little stronger
              </Link>
              <Link
                href="/#quote"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Book a Cleaning &amp; Give Back
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
