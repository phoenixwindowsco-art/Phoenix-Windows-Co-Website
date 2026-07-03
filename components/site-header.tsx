'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flame, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Our Mission', href: '/our-mission' },
  { label: 'Free Quote', href: '/#quote' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Donation banner strip */}
      <div className="flex items-center justify-center gap-2 bg-accent px-4 py-2 text-center text-xs font-semibold text-accent-foreground sm:text-sm">
        <Flame className="size-4 shrink-0" aria-hidden="true" />
        <span>20% of every job donated to California fire relief</span>
      </div>

      <div className="border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/#quote"
              className="inline-flex items-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#quote"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
