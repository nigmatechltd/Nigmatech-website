import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Camera,
  Image,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'

const principles = [
  {
    number: "01",
    title: 'Business-first thinking',
    copy: 'We start from your operations and margins, not from a feature list.',
  },
  {
    number: "02",
    title: 'Practical delivery',
    copy: 'Working software in weeks, with clear steps and useful milestones.',
  },
  {
    number: "03",
    title: 'Long-term ownership',
    copy: 'We support what we build, and we build it to last.',
  },
]

const products = [

  {
    Icon: Network,
    title: 'ERP solutions',
    copy: 'ERPNext implementation, customisation and support.',
    action: 'See ERP solutions',
    to: '/solution/erp-software',
  },
  {
    Icon: ArrowUpRight,
    title: 'Custom software',
    copy: 'Business applications, automation and integrations.',
    action: 'Discuss a project',
    to: '/contact',
  },
]

const team = ['Product & engineering', 'ERP consulting', 'Implementation', 'Customer success']

const questions = [
  ['What does Nigmatech build?', 'We build Nuvio for cloud kitchens, implement and customise ERPNext, and create custom business software, automation and integrations.'],
  ['Who do you work with?', 'We work with growing businesses and cloud kitchens that need practical software for their operations.'],
  ['Where is Nigmatech based?', 'Nigmatech is based in Lagos, Nigeria.'],
  ['Do you support clients after launch?', 'Yes. Ongoing support is part of how we work; we support the software we build and implement.'],
]

function About() {
  return (
    <div className="-mt-20 overflow-hidden bg-muted text-nigma-ink">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_78%_45%,rgba(22,115,128,0.48),transparent_58%),linear-gradient(116deg,#050A0B,#0C1415_58%,#0C3337)] pb-20 pt-36 text-white sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <div className="mx-auto w-[min(1220px,calc(100%-40px))] sm:w-[min(1220px,calc(100%-64px))]">
          <Badge variant="outline" className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.06] px-4 py-2 text-md text-white/75">
            <span className="size-1.5 rounded-full bg-nigma-teal-light" />
            About Nigmatech
          </Badge>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[60px]">
            We build software around how African businesses actually work.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Nigmatech is a Lagos-based software company. We impliment ERP and build custom software, and we stay on to support it all.
          </p>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_76%_18%,rgba(191,227,231,0.28),transparent_45%),#f3f6f5] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-[min(1220px,calc(100%-40px))] items-center gap-10 sm:w-[min(1220px,calc(100%-64px))] lg:grid-cols-[0.95fr_1fr] lg:gap-16">
          <div className="relative flex aspect-[1.15/1] min-h-64 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(ellipse_at_70%_25%,rgba(111,202,212,0.42),transparent_45%),linear-gradient(145deg,#167380,#0C2729_72%,#050A0B)] shadow-xl shadow-nigma-ink/10 sm:aspect-[1.25/1] lg:aspect-square">
            <div className="absolute inset-4 rounded-[1.1rem] border border-white/10" />
            
              <span className="grid size-12 place-items-center rounded-xl border border-[#0b4d59]/15 text-nigma-teal-dark shadow-sm backdrop-blur-sm">
                                      <Image size={22} className="nigma-teal-dark" />
                                    </span>
                                    <span className="absolute bottom-6 left-6 inline-flex max-w-[85%] items-center gap-1.5 truncate rounded-full border border-white/50 bg-[nigma-dark] px-2.5 py-2 text-[12px] font-medium text-[#1d2d31] shadow-sm sm:text-[12px]">
                                      <Camera size={11} className="shrink-0 text-nigma-teal-light" />
                                      <span className="truncate text-white/90">Photo. Team wroking session in the Lagos office</span>
                                    </span>
             
            
          </div>
          <div>
            <p className="text-3xl font-bold text-nigma-teal-dark">Our story</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-[40px]">
              ERP first, built for the long term.
            </h2>
            <p className="mt-5 text-[17px] leading-7 text-muted-foreground">
              We started by implementing ERP for businesses that needed systems their teams would actually use. not just a go-live date.
            </p>
            <p className="mt-4 text-[17px] leading-7 text-muted-foreground">
              Today we impliment ERP across manufacturing, construction, distribution, retail and HR, and build custom software when nothing off the shelf fits with the same practical, long-term approach.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 w-[min(1220px,calc(100%-40px))] sm:mt-28 sm:w-[min(1220px,calc(100%-64px))]">
          <p className="text-3xl font-bold text-nigma-teal-dark">Why Nigmatech</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-[40px]">How we work with clients</h2>
          <div className="mt-8 grid gap-4 p-0 md:grid-cols-3">
            {principles.map(({ number, title, copy }) => (
              <Card key={title} className=" ring-0 border-none p-0 bg-[(var-(muted))]">
                <CardContent className="md:py-6 py-7 px-0">
                <span className="font-bold text-5xl text-nigma-teal-dark">
                  {number}
                </span>
                
                <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-base leading-6 text-muted-foreground w-[340px]">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_85%_25%,rgba(22,115,128,0.38),transparent_48%),linear-gradient(116deg,#050A0B,#0C1415_60%,#0C3337)] md:py-8 text-white py-8">
        <div className="mx-auto w-[min(1220px,calc(100%-40px))] sm:w-[min(1220px,calc(100%-64px))]">
          <p className="text-2xl font-bold text-nigma-teal-light">What we do</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-[40px]">Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
            {products.map(({ Icon, title, copy, action, to }) => (
              <Card
                key={title}
                className="min-w-0 rounded-[20px] border border-white/10 bg-white/[0.055] p-0 text-white transition-colors hover:border-nigma-teal-light/30 hover:bg-white/[0.08]"
              >
                <CardContent className="flex h-full flex-col items-start p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center text-nigma-teal-light">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="mt-2 text-base leading-6 text-white/55">{copy}</p>
                  <Button
                    render={<Link to={to} />}
                    variant="outline"
                    className="mt-3 h-auto w-fit gap-2 rounded-full border-white/10 bg-white/[0.07] px-3.5 py-2 text-xs font-semibold text-white/80 hover:bg-nigma-teal hover:text-nigma-ink"
                  >
                    {action}<ArrowRight aria-hidden="true" className="size-3.5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      <section className="bg-[radial-gradient(ellipse_at_78%_20%,rgba(191,227,231,0.25),transparent_42%),#f3f6f5] py-16 sm:py-24">
        <div className="mx-auto w-[min(1220px,calc(100%-40px))] sm:w-[min(1220px,calc(100%-64px))]">
          <p className="text-3xl font-bold text-nigma-teal-dark">The team</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-[40px]">The people behind the software</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">Engineers, ERP consultants and product people based in Lagos.</p>
          <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-5">
            {team.map((role) => (
              <div key={role}>
                <Card className="relative aspect-[0.92/1] border-white/15 bg-[radial-gradient(ellipse_at_70%_20%,rgba(111,202,212,0.4),transparent_44%),linear-gradient(145deg,#167380,#0C2729_72%,#050A0B)] p-0 shadow-lg shadow-nigma-ink/10">
                  <CardContent className="absolute inset-0 flex items-center justify-center p-0">
                  <div className="absolute inset-2.5 rounded-xl border border-white/10" />
                  <div className="relative flex flex-col items-center gap-2 text-white/80">
                    <Image aria-hidden="true" className="size-6 text-nigma-teal-light" strokeWidth={1.5} />
                    
                  </div>
                  <span className="absolute bottom-6 left-6 inline-flex max-w-[85%] items-center gap-1.5 truncate rounded-full border border-white/40 bg-[nigma-dark] px-2.5 py-1 text-[12px] font-medium text-[#1d2d31] shadow-sm sm:text-[12px]">
                                      <Camera size={11} className="shrink-0 text-nigma-teal-light" />
                                      <span className="truncate text-white/90">
                                        Photo
                                      </span>
                                    </span>
                  </CardContent>
                </Card>
                
                <p className="mt-1 text-md text-muted-foreground">[Name]</p>
              </div>
            ))}
          </div>

          <Card className="mt-16 rounded-[1.5rem] border-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(22,115,128,0.48),transparent_58%),linear-gradient(116deg,#050A0B,#0C1415_58%,#0C3337)] px-6 py-12 text-center text-white sm:mt-20 sm:px-12 sm:py-16">
            <CardContent className="p-0">
            <h2 className="mx-auto max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-[40px]">Let&apos;s build something useful together</h2>
            <p className="mx-auto mt-4 max-w-lg text-md leading-6 text-white/60 sm:text-[17px]">Tell us what you&apos;re working on. We reply within one business day.</p>
            <Button render={<Link to="/contact" />} className="mt-7 h-auto min-h-13 gap-2 rounded-full bg-nigma-teal px-7 text-sm font-bold text-nigma-ink hover:bg-nigma-teal-light">
              Start a conversation<ArrowRight aria-hidden="true" className="size-4" />
            </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default About;
