import { Phone, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionBackdrop } from '@/components/section-backdrop'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-surface-2"
    >
      <SectionBackdrop variant="scenery" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact Us
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          <Reveal className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Phone className="size-6 text-primary" aria-hidden="true" />
            </span>
            <h3 className="font-semibold text-foreground">Call or Text</h3>
            <a
              href="tel:+15551234567"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              (555) 123-4567
            </a>
          </Reveal>

          <Reveal
            delay={80}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="size-6 text-primary" aria-hidden="true" />
            </span>
            <h3 className="font-semibold text-foreground">Email Us</h3>
            <a
              href="mailto:hello@phoenixpane.co"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              hello@phoenixpane.co
            </a>
          </Reveal>

          <Reveal
            delay={160}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <InstagramIcon className="size-6 text-primary" />
            </span>
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <p className="font-semibold text-accent">
            Call or Text Us Anytime — We&apos;re here to help
          </p>
        </Reveal>
      </div>
    </section>
  )
}
