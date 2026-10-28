import { useState } from 'react'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { Textarea } from '../../components/ui/textarea'

const interests = ['Nuvio', 'ERP', 'Custom software', 'Something else']

const inputClass = 'mt-1.5 h-10 w-full rounded-lg border border-border bg-white px-3 text-md text-nigma-ink placeholder:text-muted-foreground/70 outline-none transition focus:border-nigma-teal focus:ring-2 focus:ring-nigma-teal/20'
const labelClass = 'block text-[16px] font-semibold text-nigma-ink'

function Contact() {
  const [interest, setInterest] = useState('Nuvio')
  const [submitted, setSubmitted] = useState(false)
  const [demoEmail, setDemoEmail] = useState('ada@')
  const [demoCompany, setDemoCompany] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="-mt-20 overflow-hidden bg-muted text-nigma-ink">
      <section className="relative isolate overflow-hidden bg-nigma-ink bg-linear-to-br from-nigma-ink via-nigma-dark to-nigma-teal-dark pb-16 pt-36 text-white sm:pb-20 lg:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-20 z-0 size-[30rem] translate-x-1/4 rounded-full bg-nigma-teal/25 blur-3xl" />
        <div className="relative z-10 mx-auto grid w-[min(1220px,calc(100%-40px))] items-center gap-10 sm:w-[min(1220px,calc(100%-64px))] sm:grid-cols-2 sm:gap-8 xl:gap-16">
          <div className="pt-1 lg:pt-0">
            <Badge variant="outline" className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.06] px-4 py-2 text-md text-white/75">
              <span className="size-1.5 rounded-full bg-nigma-teal-light" />
              Book a demo
            </Badge>
            <h1 className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-5xl">
              Let&apos;s talk about your business
            </h1>
            <p className="mt-5 max-w-lg text-[16px] leading-6 text-white/60 sm:text-base sm:leading-7">
              Tell us a little about what you need. We&apos;ll get back to you within one business day to book a call.
            </p>

            <div className="mt-6">
              <p className="text-[22px] font-bold text-nigma-teal-light">What to expect</p>
              <ul className="mt-3 space-y-2.5 text-[16px] text-white/75">
                {[
                  'A 30-minute call with a product or ERP lead',
                  'A walkthrough using your menus or processes',
                  'A clear proposal, with no obligation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-nigma-teal-light">
                      <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <address className="mt-6 grid max-w-md gap-3 rounded-2xl border border-white/10 bg-white/[0.065] p-4 not-italic backdrop-blur-sm sm:p-5">
              <a href="mailto:info@nigmatech.net" className="group flex items-center gap-3 text-md text-white/85 hover:text-white">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nigma-teal-light/15 bg-nigma-teal/10 text-nigma-teal-light"><Mail aria-hidden="true" className="size-4" /></span>
                <span className="flex flex-col gap-1"><span className="block text-[14px] leading-4 text-white/50">Email</span><span className="block leading-5">info@nigmatech.net</span></span>
              </a>
              <div className="flex items-center gap-3 text-md text-white/85">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nigma-teal-light/15 bg-nigma-teal/10 text-nigma-teal-light"><Phone aria-hidden="true" className="size-4" /></span>
                <span className="flex flex-col gap-1"><span className="block text-[14px] leading-4 text-white/50">Phone / WhatsApp</span><span className="block leading-5">+234 [XXX XXX XXXX]</span></span>
              </div>
              <div className="flex items-center gap-3 text-md text-white/85">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nigma-teal-light/15 bg-nigma-teal/10 text-nigma-teal-light"><MapPin aria-hidden="true" className="size-4" /></span>
                <span className="flex flex-col gap-1"><span className="block text-[14px] leading-4 text-white/50">Office</span><span className="block leading-5">Lagos, Nigeria</span></span>
              </div>
            </address>
          </div>

          <Card className="w-full rounded-3xl border-0 bg-white p-0 text-nigma-ink ring-0 shadow-2xl shadow-black/20">
            <form onSubmit={handleSubmit} className="w-full p-5 sm:p-6 lg:p-7">
            <h2 className="font-heading text-xl font-semibold tracking-tight">Tell us about your project</h2>
            <div className="mt-5 grid gap-x-3.5 gap-y-3 sm:grid-cols-2">
              <label className={`${labelClass} space-y-1`}>Full name
                <Input autoComplete="name" name="name" required className={inputClass} placeholder="Ada Okafor" />
              </label>
              <label className={`${labelClass} space-y-1`}>Work email
                <Input autoComplete="email" name="email" required type="email" className={inputClass} placeholder="ada@company.com" />
              </label>
              <label className={`${labelClass} space-y-1`}>Phone / WhatsApp
                <Input autoComplete="tel" name="phone" type="tel" className={inputClass} placeholder="+234 801 234 5678" />
              </label>
              <label className={`${labelClass} space-y-1`}>Company
                <Input autoComplete="organization" name="company" className={inputClass} placeholder="Company name" />
              </label>
            </div>

            <fieldset className="mt-4">
              <legend className={labelClass}>I&apos;m interested in</legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {interests.map((item) => (
                  <Button key={item} variant="outline" className={`h-auto min-h-8 rounded-full px-3 text-md font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal ${interest === item ? 'border-nigma-teal bg-nigma-teal-pale text-nigma-teal-dark' : 'border-transparent bg-muted text-muted-foreground hover:border-border hover:bg-muted hover:text-nigma-ink'}`} type="button" aria-pressed={interest === item} onClick={() => setInterest(item)}>
                    {item}
                  </Button>
                ))}
              </div>
            </fieldset>

            <label className={`${labelClass} mt-4 block`}>Business size
              <Select name="businessSize" defaultValue={null}>
                <SelectTrigger className={`${inputClass} mt-1.5 h-10 appearance-none`}>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1–10 people</SelectItem>
                  <SelectItem value="11-50">11–50 people</SelectItem>
                  <SelectItem value="51-200">51–200 people</SelectItem>
                  <SelectItem value="201+">201+ people</SelectItem>
                </SelectContent>
              </Select>
            </label>

            <label className={`${labelClass} mt-4 block`}>How can we help?
              <Textarea name="message" rows="3" className="mt-1.5 min-h-24 w-full resize-y rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-nigma-ink placeholder:text-muted-foreground/70 outline-none transition focus:border-nigma-teal focus:ring-2 focus:ring-nigma-teal/20" placeholder="Tell us about your current systems and what you'd like to improve..." />
            </label>
            <input type="hidden" name="interest" value={interest} />

            <Button type="submit" className="mt-4 h-auto min-h-11 w-full rounded-full bg-nigma-teal px-5 text-sm font-bold text-nigma-ink shadow-md shadow-nigma-ink/10 hover:bg-nigma-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nigma-teal-dark">
              Request a call<ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            {submitted ? (
              <p role="status" className="mt-3 rounded-lg bg-nigma-teal-pale px-3 py-2 text-xs leading-5 text-nigma-teal-dark">
                Your details are ready. This form is not connected to a booking service yet, so your request has not been sent. Please email info@nigmatech.net to reach us.
              </p>
            ) : (
              <p className="mt-3 text-[15px] leading-4 text-muted-foreground">We&apos;ll only use your details to reply to this enquiry.</p>
            )}
            </form>
          </Card>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_72%_28%,rgba(191,227,231,0.32),transparent_44%),#f3f6f5] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-[min(1220px,calc(100%-40px))] sm:w-[min(1220px,calc(100%-64px))]">
          <p className="text-3xl font-bold text-nigma-teal-dark">Form states</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-[38px]">Success and validation</h2>
          <p className="mt-2 text-md leading-6 text-muted-foreground sm:text-base">A clear confirmation and helpful feedback keep every enquiry easy to complete.</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <Card role="article" className="gap-0 rounded-2xl border border-white/90 bg-white/55 p-5 ring-0 shadow-[0_14px_38px_rgba(5,10,11,0.07)] sm:p-7">
              <span className="flex size-12 items-center justify-center rounded-full bg-nigma-teal-pale text-nigma-teal-dark"><CheckCircle2 aria-hidden="true" className="size-5" /></span>
              <h3 className="mt-4 font-heading text-[20px] font-semibold">Thanks, we&apos;ve got it</h3>
              <p className="mt-2 max-w-[458px] text-[15px] leading-5 text-muted-foreground">Example confirmation shown after a connected form submission. In the meantime, see how Wunmax uses Nuvio.</p>
              <Button render={<Link to="/case-study" />} className="mt-4 h-auto min-h-12 gap-2 rounded-full bg-white px-4 text-[15px] font-bold text-nigma-ink shadow-sm hover:bg-nigma-teal-pale">
                Read the case study<ArrowRight aria-hidden="true" className="size-3.5" />
              </Button>
            </Card>

            <Card role="article" className="gap-0 rounded-2xl border border-white/90 bg-white/55 p-5 ring-0 shadow-[0_14px_38px_rgba(5,10,11,0.07)] sm:p-7">
              <h3 className="font-heading text-sm font-semibold">Validation states</h3>
              <div className="mt-4">
                <Label htmlFor="example-work-email" className={labelClass}>Work email</Label>
                <Input id="example-work-email" aria-invalid="true" aria-describedby="email-error" value={demoEmail} onChange={(event) => setDemoEmail(event.target.value)} className="mt-2 h-10 w-full rounded-lg border-2 border-destructive bg-white px-3 text-sm text-nigma-ink outline-none" />
                <p id="email-error" className="mt-2 text-[11px] leading-4 font-medium text-destructive">Enter a valid email address</p>
              </div>
              <div className="mt-6">
                <Label htmlFor="example-company" className={labelClass}>Company</Label>
                <Input id="example-company" value={demoCompany} onChange={(event) => setDemoCompany(event.target.value)} className={`${inputClass} mt-2 bg-white`} placeholder="Company name" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
