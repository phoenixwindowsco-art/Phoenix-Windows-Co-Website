import Link from 'next/link'
import { Flame } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function FounderNote() {
  return (
    <section className="bg-surface-2">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent">
            Why We&apos;re Different 🔥
          </p>
        </Reveal>

        <Reveal delay={100} className="group mt-8">
          <div
            className="relative overflow-hidden rounded-2xl border border-border border-l-4 border-l-accent bg-[#141820] p-12 transition-shadow duration-300 sm:p-14"
            style={{ boxShadow: '0 0 20px rgba(232, 134, 10, 0.15)' }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: '0 0 45px rgba(232, 134, 10, 0.28)' }}
              aria-hidden="true"
            />

            {/* Faint flame watermark */}
            <Flame
              className="pointer-events-none absolute -bottom-10 -right-8 size-72 text-accent/[0.06]"
              aria-hidden="true"
            />

            {/* Decorative opening quotation mark */}
            <span
              className="pointer-events-none absolute left-6 top-2 font-serif leading-none text-accent/60 select-none"
              style={{ fontSize: '80px' }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <div className="relative">
              <h2 className="text-center text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                A Note From the Founder 🔥
              </h2>
              <div className="mt-8 space-y-5 text-pretty font-serif text-lg leading-relaxed text-[#EEE8DC]">
                <p>
                  I&apos;m not a big company. I&apos;m a one-person operation
                  with a squeegee, a mission, and a community I love.
                </p>
                <p>
                  When you book with Phoenix Pane Co., you&apos;re not just
                  getting clean windows. You&apos;re helping a neighbor give back
                  to neighbors. You&apos;re part of something that started in the
                  middle of one of the hardest moments of my life and turned
                  into something I&apos;m genuinely proud of.
                </p>
                <p>Thank you for supporting this. It means more than you know.</p>
              </div>

              {/* Amber divider above signature */}
              <div className="mt-8 h-px w-full bg-accent/40" aria-hidden="true" />
              <p className="mt-6 font-serif text-xl italic text-accent">
                — [Your first name], Founder, Phoenix Pane Co.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/our-mission"
              className="inline-flex w-full items-center justify-center rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
            >
              Read Our Full Story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
