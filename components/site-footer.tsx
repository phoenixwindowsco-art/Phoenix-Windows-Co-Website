import Link from 'next/link'
import { Flame } from 'lucide-react'
import { Logo } from '@/components/logo'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Our Mission', href: '/our-mission' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Cleaning windows. Rebuilding communities.
            </p>
          </div>

          <nav
            className="flex flex-col gap-2 md:items-center"
            aria-label="Footer"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:justify-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-accent"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-accent"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 Phoenix Pane Co. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm font-medium text-accent">
            <Flame className="size-4" aria-hidden="true" />
            20% of every job donated to California fire relief
          </p>
        </div>
      </div>
    </footer>
  )
}
