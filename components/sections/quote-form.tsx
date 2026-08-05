'use client'

import { useForm, ValidationError } from '@formspree/react'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionBackdrop } from '@/components/section-backdrop'

const inputClasses =
  'w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40'

export function QuoteForm() {
  const [state, handleSubmit] = useForm('xaewwgol')
  const submitted = state.succeeded

  return (
    <section
      id="quote"
      className="relative scroll-mt-28 overflow-hidden bg-background"
    >
      <SectionBackdrop variant="ember" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Free Estimate
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Your Free <span className="text-accent">Quote</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Fill out the form below and we&apos;ll provide you with a custom
            quote for your property.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-10 rounded-lg border border-border bg-card p-6 sm:p-8"
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
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1.5 text-sm text-destructive"
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
                  Number of Windows{' '}
                  <span className="text-muted-foreground">
                    (if applicable)
                  </span>
                </label>
                <select
                  id="windows"
                  name="windows"
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="">Not applicable</option>
                  <option value="up-to-10">Up to 10</option>
                  <option value="11-20">11–20</option>
                  <option value="21-30">21–30</option>
                  <option value="30-plus">30+</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <optgroup label="Window Cleaning">
                    <option value="window-exterior">
                      Exterior Window Cleaning
                    </option>
                    <option value="window-commercial">
                      Commercial Window Cleaning
                    </option>
                  </optgroup>
                  <optgroup label="Pressure & Soft Washing">
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="soft-washing">Soft Washing</option>
                  </optgroup>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <ValidationError
                  errors={state.errors}
                  className="mb-3 text-sm text-destructive"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.submitting ? 'Sending…' : 'Submit for Free Quote'}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
