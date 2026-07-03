import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, Home, ClipboardList, HandHeart } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Our Mission — Phoenix Pane Co.',
  description:
    'Born from the Eaton Fires. Phoenix Pane Co. donates 20% of every job to sustained Eaton Fire relief and recovery.',
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </div>
  )
}

const pledgeStats = [
  { icon: Flame, text: '20% of every job donated' },
  { icon: Home, text: 'Supporting families still displaced' },
  { icon: ClipboardList, text: 'Full transparency — every donation posted publicly' },
]

const charities = [
  {
    name: 'Pasadena Community Foundation',
    description:
      'Directly supporting Eaton Fire victims with housing, rebuilding, and recovery funds.',
  },
  {
    name: 'Direct Relief',
    description:
      'Nationally recognized disaster relief organization with deep roots in LA County fire recovery.',
  },
  {
    name: '211 LA',
    description:
      'Connecting displaced families with local resources, housing assistance, and recovery support.',
  },
]

export default function OurMissionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'url(/images/ember-texture.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
          <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
            <Reveal>
              <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
                Our Story
                <Flame className="size-4" aria-hidden="true" />
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Born From the <span className="text-accent">Ashes</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                A business built on loss, resilience, and a commitment to bring
                others home.
              </p>
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* The Story */}
        <section className="bg-surface-2">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                We Know What It Feels Like
              </h2>
              <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  In January 2025, the Eaton Fire tore through our community and
                  took our home with it. Like so many families across Altadena
                  and Pasadena, we lost nearly everything — the walls we grew up
                  in, the neighborhood we loved, the sense of safety that comes
                  with having a place to call home.
                </p>
                <p>
                  But we were one of the lucky ones. We were able to move back.
                </p>
                <p className="font-semibold text-foreground">
                  And that&apos;s exactly why we couldn&apos;t just move on.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/altadena-dusk.png"
                  alt="A warm-lit window in an Altadena neighborhood at dusk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* Why Phoenix Pane Co. */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Why We Started This
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A Passion Meets a Purpose
              </h2>
              <div className="mt-6 space-y-4 text-pretty text-left leading-relaxed text-muted-foreground">
                <p>
                  Starting a business had always been a dream. Running something
                  of my own, building something from scratch, being my own boss
                  — that drive was always there.
                </p>
                <p>
                  After the fires, that dream took on a deeper meaning. I looked
                  around at my neighbors — some who lost far more than I did,
                  families still displaced, still waiting, still rebuilding —
                  and I knew that if I was going to build something, it had to
                  give back to them.
                </p>
                <p>
                  Phoenix Pane Co. is that business. Every window we clean, every
                  job we take, 20% of the profits go directly to organizations
                  supporting sustained Eaton Fire victim aid. Not a one-time
                  donation.{' '}
                  <span className="font-semibold text-foreground">
                    Every. Single. Job.
                  </span>
                </p>
                <p>
                  We chose the name Phoenix because that&apos;s what this
                  community is doing — rising.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* The 20% Pledge */}
        <section className="relative overflow-hidden bg-surface-2">
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'url(/images/ember-texture.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The 20% Pledge
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                We publicly commit to donating a minimum of 20% of every
                job&apos;s profits to Eaton Fire relief and sustained recovery
                charities. You&apos;ll see it on every invoice. We&apos;ll post
                proof of every donation on our social media. No fine print. No
                exceptions.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pledgeStats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <Reveal
                    key={stat.text}
                    delay={i * 80}
                    className="flex flex-col items-center gap-3 rounded-xl border border-accent/30 bg-background p-6"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-accent/15">
                      <Icon className="size-6 text-accent" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      {stat.text}
                    </p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <Divider />

        {/* Who We Support */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Where Your Money Goes
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                We partner with organizations providing sustained, long-term aid
                to Eaton Fire victims — not just emergency relief, but ongoing
                support for families still finding their footing.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {charities.map((charity, i) => (
                <Reveal
                  key={charity.name}
                  as="article"
                  delay={i * 80}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                    <HandHeart
                      className="size-6 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {charity.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {charity.description}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8 text-center">
              <p className="mx-auto max-w-2xl text-sm italic text-muted-foreground">
                As Phoenix Pane Co. grows, so will our giving. We are actively
                seeking formal charity partnerships and will update this page as
                relationships are established.
              </p>
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* CTA */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to Make Your Windows Shine?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Every clean counts. Book today and be part of the rebuild.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#quote"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
                >
                  Back to Home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
