import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Image as ImageIcon,
  MapPin,
  Quote,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'

const metrics = [
  ['[XX]%', 'of orders now placed online or on WhatsApp'],
  ['[XX] hrs', 'of manual reconciliation saved each week'],
  ['[XXX]', 'active meal-plan subscribers'],
  ['[X] days', 'from kick-off to the first live channel'],
]

const modules = ['Storefront', 'WhatsApp ordering', 'Paystack', 'Meal plans', 'Food stock', 'Dispatch', 'Catering bookings', 'Accounting']
const channels = ['Takeaway', 'Home orders', 'Buffet & catering', 'Meal plans', 'WhatsApp']
const capabilities = [
  'A mobile-first storefront with takeaway, home-order, catering and meal-plan pages, installable on customer phones.',
  'Paystack checkout with each channel settling to its own account, and automatic accounting entries.',
  'Meal-plan subscriptions with regular and week-long plans that customers can skip, pause or reschedule.',
  'Food stock controls with weekday and weekend closing times, helping avoid quantity limits and overselling.',
  'Delivery fees by area, shipment and dispatch details, and recorded delivery costs.',
  'A WhatsApp ordering assistant that drafts orders and asks the customer to confirm.',
]

function ImagePlaceholder({ label, className = '' }) {
  return (
    <figure aria-label={label} className={`relative flex aspect-[16/7] min-h-64 w-full min-w-0 items-center justify-center overflow-hidden rounded-2xl bg-nigma-ink bg-linear-to-br from-nigma-teal-dark via-nigma-dark to-nigma-ink text-center shadow-lg shadow-nigma-ink/10 ${className}`}>
      <div aria-hidden="true" className="absolute -right-12 -top-16 size-64 rounded-full bg-nigma-teal/40 blur-3xl" />
      <div className="absolute inset-2.5 rounded-[0.9rem] border border-white/10 sm:inset-4 sm:rounded-[1.1rem]" />
      <figcaption className="relative flex flex-col items-center gap-2 px-5 text-[11px] font-medium tracking-wide text-white/75 sm:text-xs">
        <ImageIcon aria-hidden="true" className="size-5 text-nigma-teal-light" strokeWidth={1.5} />
        {label}
      </figcaption>
    </figure>
  )
}

function CaseStudy() {
  return (
    <main className="-mt-20 overflow-hidden bg-muted text-nigma-ink">
      <section className="relative isolate overflow-hidden bg-nigma-ink bg-linear-to-br from-nigma-ink via-nigma-dark to-nigma-teal-dark pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-24 z-0 size-[30rem] translate-x-1/4 rounded-full bg-nigma-teal/25 blur-3xl" />
        <div className="relative z-10 mx-auto w-[min(1220px,calc(100%-40px))] sm:w-[min(1220px,calc(100%-64px))]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/55">
            <Link className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-nigma-teal-light" to="/case-study">Case studies</Link>
            <span aria-hidden="true">&gt;</span><span className="text-white/80">Wunmax</span>
          </nav>
          <Badge variant="outline" className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.06] px-4 py-2 text-md text-white/75 mt-6">
            <span className="size-1.5 rounded-full bg-nigma-teal-light" /> Case study - Nuvio
          </Badge>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            How Wunmax runs five food channels from one platform
          </h1>
          <p className="mt-5 max-w-3xl text-[16px] leading-6 text-white/65 sm:text-base sm:leading-7">
            Wunmax sells takeaway, home orders, buffet catering and meal plans across Lagos. With Nuvio, every channel shares one menu, one checkout and one set of accounts, and customers can now order on WhatsApp too.
          </p>
          <dl className="mt-8 grid gap-4 rounded-2xl border border-white/15 bg-nigma-dark/80 p-5 shadow-xl shadow-black/10 sm:grid-cols-2 sm:p-6 lg:grid-cols-4 ">
            {[
              ['Industry', 'Cloud kitchen & catering'],
              ['Location', 'Lagos, Nigeria'],
              ['Product', 'Nuvio'],
              ['Areas served', 'Ikeja, VI, Lekki Phase 1, Lagos Island'],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="text-[15px] font-bold uppercase tracking-[0.12em] text-nigma-teal-light">{term}</dt>
                <dd className="mt-1.5 text-[14px] leading-5 text-white/85">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="bg-muted">
        <section aria-label="Wunmax kitchen" className="mx-auto w-[min(1220px,calc(100%-56px))] pt-8 sm:w-[min(1220px,calc(100%-64px))] sm:pt-14">
          <ImagePlaceholder label="Image: Wunmax kitchen team at work (wide)" className="aspect-[16/7] min-h-64 sm:min-h-80" />
        </section>

        <section className="mx-auto w-[min(1220px,calc(100%-40px))] py-12 sm:w-[min(1220px,calc(100%-64px))] sm:py-16 lg:py-20">
          <p className="text-2xl font-bold text-nigma-teal-dark">Results</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">The impact so far</h2>
          <p className="mt-2 text-[16px] leading-6 text-muted-foreground">Figures to be confirmed with Wunmax before publishing.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([value, caption]) => (
              <Card key={value} className="rounded-2xl border border-white/80 bg-white/65 py-0 shadow-[0_14px_38px_rgba(5,10,11,0.06)]">
                <CardContent className="p-5 sm:p-6">
                <p className="font-heading text-3xl font-bold leading-none tracking-tight sm:text-4xl">{value}</p>
                <p className="mt-3 text-md leading-5 text-muted-foreground">{caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-[min(1220px,calc(100%-40px))] grid-cols-1 items-start gap-10 pb-16 sm:w-[min(1220px,calc(100%-64px))] sm:gap-14 sm:pb-24 lg:grid-cols-3">
          <div className="order-1 min-w-0 lg:order-2 lg:col-span-2">
            <section>
              <p className="text-2xl font-bold text-nigma-teal-dark">The challenge</p>
              <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">Five channels, five sets of rules</h2>
              <p className="mt-3 text-md leading-6 text-muted-foreground">Wunmax did not run one food business. It ran several. Takeaway meals, bulk home orders, buffet catering, meal plans and WhatsApp orders each had their own menus, prices and processes. Staff checked every order in one place, reconciled payments in another, then tracked stock and delivery separately. When every channel had its own rules, small changes were easy to miss and daily operations took more effort than they should.</p>
            </section>

            <section className="mt-12 sm:mt-16">
              <p className="text-2xl font-bold text-nigma-teal-dark">What we built</p>
              <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">One platform, one set of accounts</h2>
              <p className="mt-3 text-md leading-6 text-muted-foreground">We set Wunmax up on Nuvio, connecting its ordering channels, payments and accounting in one operating system. The team can manage what customers see and what happens behind each order from the same place.</p>
              <ul className="mt-4 space-y-3">
                {capabilities.map((item) => <li key={item} className="flex gap-2.5 text-[13px] leading-5 text-muted-foreground"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-nigma-teal" />{item}</li>)}
              </ul>
            </section>

            <blockquote className="mt-10 rounded-2xl bg-nigma-ink p-6 text-white sm:mt-14 sm:p-8">
              <Quote aria-hidden="true" className="size-7 text-nigma-teal-light" />
              <p className="mt-3 font-heading text-base font-medium leading-6 sm:text-lg">&quot;[Client quote - e.g. how Nuvio changed day-to-day operations. To be approved by Wunmax.]&quot;</p>
              <footer className="mt-3 text-[13px] text-white/50">[Name], [Title], Wunmax</footer>
            </blockquote>

            <section className="mt-12 sm:mt-16">
              <p className="text-2xl font-bold text-nigma-teal-dark">The results</p>
              <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">Less admin, more cooking</h2>
              <p className="mt-3 text-md leading-6 text-muted-foreground">We will write the outcomes summary once Wunmax confirms the figures. The measures above will show how the connected setup has affected order mix, reconciliation time, subscriptions and launch speed.</p>
              <div className="mt-6 grid w-full min-w-0 max-w-full gap-4 sm:grid-cols-2 sm:pr-5 lg:pr-6">
                <ImagePlaceholder label="Image: Storefront on mobile" className="aspect-[4/3] min-h-56" />
                <ImagePlaceholder label="Image: Dispatch rider with delivery" className="aspect-[4/3] min-h-56" />
              </div>
            </section>
          </div>

          <Card className="order-2 self-start rounded-2xl border border-white/80 bg-white/70 py-0 shadow-[0_14px_38px_rgba(5,10,11,0.06)] lg:order-1 lg:col-span-1">
            <CardContent className="p-5 sm:p-5">
            <div className="flex items-center gap-2.5">
              <span className="grid size-12 place-items-center rounded-lg bg-nigma-teal-pale text-nigma-teal-dark"><MapPin aria-hidden="true" className="size-7" /></span>
              <p className="font-heading text-[15px] font-bold">Nuvio <span className="font-normal text-muted-foreground text-[15px]">by Nigmatech</span></p>
            </div>
            <p className="mt-5 text-[14px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Modules in use</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {modules.map((item) => <li key={item} className="rounded-full border border-black/5 bg-white/75 px-2.5 py-1 text-[12px] text-muted-foreground">{item}</li>)}
            </ul>
            <p className="mt-5 text-[14px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Channels</p>
            <ul className="mt-2 space-y-2">
              {channels.map((item) => <li key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground"><span className="size-1.5 rounded-full bg-nigma-teal" />{item}</li>)}
            </ul>
            <Button render={<Link to="/contact" />} className="mt-5 inline-flex h-12 min-h-10 w-full items-center justify-center gap-2 rounded-full bg-nigma-teal px-4 text-md font-bold text-nigma-ink transition-colors hover:bg-nigma-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal-dark">
              Book a Nuvio demo <ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            </CardContent>
          </Card>

        </section>

        <section className="mx-auto w-[min(1220px,calc(100%-56px))] pb-14 sm:w-[min(1220px,calc(100%-64px))] sm:pb-20">
          <div className="relative isolate overflow-hidden rounded-[1.5rem] bg-nigma-ink bg-linear-to-br from-nigma-ink via-nigma-dark to-nigma-teal-dark px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 size-72 rounded-full bg-nigma-teal/25 blur-3xl" />
            <div className="relative z-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Want results like Wunmax?</h2>
            <p className="mx-auto mt-3 max-w-lg text-md leading-6 text-white/60">See how Nuvio could run your kitchen. 30 minutes, no obligation.</p>
            <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
              <Button render={<Link to="/contact" />} className="inline-flex h-10 min-h-12 items-center justify-center gap-2 rounded-full bg-nigma-teal px-7 text-md font-bold text-nigma-ink transition-colors hover:bg-nigma-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal-light">Book a demo <ArrowRight aria-hidden="true" className="size-3.5" /></Button>
              <Button render={<Link to="/solution/nuvio" />} variant="outline" className="inline-flex h-12 min-h-10 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-7 text-md font-semibold text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal-light">Explore Nuvio <ArrowUpRight aria-hidden="true" className="size-3.5" /></Button>
            </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default CaseStudy
