import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { FounderNote } from '@/components/sections/founder-note'
import { Services } from '@/components/sections/services'
import { Mission } from '@/components/sections/mission'
import { Pricing } from '@/components/sections/pricing'
import { QuoteForm } from '@/components/sections/quote-form'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FounderNote />
        <Services />
        <Mission />
        <Pricing />
        <QuoteForm />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
