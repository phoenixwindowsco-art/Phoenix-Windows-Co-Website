'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const inputClasses =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40'

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="scroll-mt-28 bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Free Estimate
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Your Free Window Cleaning{' '}
            <span className="text-accent">Quote</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Fill out the form below and we&apos;ll provide you with a custom
            quote for your property.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground">
                Thank you!
              </h3>
              <p className="max-w-sm text-muted-foreground">
                Your request has been received. We&apos;ll be in touch shortly
                with your free, transparent quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="address"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="123 Main St, Altadena"
                  className={inputClasses}
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="windows"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Number of Windows
                </label>
                <select
                  id="windows"
                  name="windows"
                  required
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="up-to-10">Up to 10</option>
                  <option value="11-20">11–20</option>
                  <option value="21-30">21–30</option>
                  <option value="30-plus">30+</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="stories"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Number of Stories
                </label>
                <select
                  id="stories"
                  name="stories"
                  required
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select stories
                  </option>
                  <option value="1">1 Story</option>
                  <option value="2">2 Stories</option>
                  <option value="3-plus">3+ Stories</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:col-span-2"
              >
                Submit for Free Quote
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
