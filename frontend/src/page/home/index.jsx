import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChartColumnIncreasing,
  Check,
  Image,
  Layers3,
  LockKeyhole,
  LocationEdit,
  MessageCircle,
  Package,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Store,
  UsersRound,
  Utensils,
  Workflow,
  Zap,
  Target,
  MapPin,
} from "lucide-react";
import "./home.css";

const sectors = [
  "client logo",
  "client logo",
  "client logo",
  "client logo",
  "client logo",
  "client logo",
];

const solutions = [
  {
    id: "nuvio",
    label: "ERP Software",
    title: "ERP implemented properly for your business",
    copy: "Finance, inventory, manufacturing, projects, HR, and CRM in one system—configured around how you actually work and supported after go-live.",
    to: "/solution/erp-software",
    action: "Explore ERP Software",
    Icon: Layers3,
  },
  {
    id: "erp",
    label: "Custom software",
    title: "Built around your process when nothing off the shelf fits",
    copy: "Business applications, workflow automation, and integrations that connect your ERP, payment gateways, and messaging—supported for the long term.",
    to: "/contact",
    action: "Discuss your project",
    Icon: Phone,
  },
];

const capabilities = [
  {
    Icon: Target,
    title: "Business-first",
    copy: "We start from your operations and margins, not from a feature list",
  },
  {
    Icon: Rocket,
    title: "Practical delivery",
    copy: "Working software delivered in weeks, with regular demonstrations.",
  },
  {
    Icon: MapPin,
    title: "Built for local operations.",
    copy: "Local payment gateways, WhatsApp, and local tax rules are built in.",
  },
];


const steps = [
  {
    number: "01",
    title: "Discover",
    copy: "We learn how your business really runs: the people, processes, data and limits.",
  },
  {
    number: "02",
    title: "Design",
    copy: "We agree the scope, workflows and success measures with you before building anything.",
  },
  {
    number: "03",
    title: "Implement",
    copy: "We build and configure in short cycles with regular demos so there are no surprises.",
  },
  {
    number: "04",
    title: "Improve",
    copy: "After go-live, we support your team, fine-tune the system, and help you plan what comes next.",
  },
];

const principles = [
  {
    title: "Taiwo Ade",
    copy: "Shared visibility into what is happening and what needs attention.",
    company: "CEO, Manufacturing Company",
  },
  {
    title: "Michael Evans",
    copy: "Work moves cleanly from one person, tool, or team to the next.",
    company: "HR, Food Processing Company",
  },
  {
    title: "Dorothy Ovai",
    copy: "The right information is close when a decision needs to be made.",
    company: "Managing Director, Bottling Company",
  },
];

const faqs = [
  {
    q: "What does Nigmatech do?",
    a: "We implement, customise, and support ERPNext for growing companies. When nothing off the shelf fits, we design and build custom software around your process.",
  },
  {
    q: "Do you only work with Nigerian businesses?",
    a: "No. We work with businesses in Nigeria and support projects in other markets too.",
  },
  {
    q: "How quickly can we get started?",
    a: "After an initial conversation, we’ll understand your needs, recommend a practical approach, and agree on a timeline to get started.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We provide ongoing support after launch to help your team use the system and address any issues that come up.",
  },
];



function DashboardPreview() {
  const income = [35, 52, 42, 68, 55, 88, 62, 74, 48, 93, 65, 78];
  const expenses = [24, 38, 31, 46, 34, 58, 43, 50, 32, 65, 46, 55];

  return (
    <div
      className="relative mx-auto aspect-[0.76] w-full max-w-[500px] overflow-hidden rounded-[22px] border border-white/20 bg-white text-[#050a0b] shadow-[0_28px_70px_rgba(0,0,0,0.35)] sm:aspect-square lg:translate-x-6"
      role="img"
      aria-label="Illustrative finance dashboard showing revenue, receivables, income versus expenses, and recent invoices"
    >
      <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-[inherit]">
        <div className="flex h-9 shrink-0 items-center gap-1.5 border-b border-black/5 bg-[#f2f1ee] px-3" aria-hidden="true">
          <i className="size-2 rounded-full bg-[#d8d6d1]" />
          <i className="size-2 rounded-full bg-[#d8d6d1]" />
          <i className="size-2 rounded-full bg-[#d8d6d1]" />
          <span className="ml-1 flex min-w-0 max-w-[78%] items-center gap-1.5 truncate rounded-full bg-white px-2.5 py-1 text-[10px] text-[#596667]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#d8d6d1]" />
            <span className="truncate">erp.yourcompany.app/app/accounting</span>
          </span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">
          <div className="grid gap-0.5">
            <b className="font-heading text-sm font-semibold sm:text-base">Finance overview</b>
            <small className="text-[10px] text-[#596667] sm:text-[11px]">FY 2026 · All branches</small>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="grid min-w-0 gap-1 rounded-xl bg-[#f3f2ef] p-2.5 sm:p-3">
              <small className="truncate text-[12px] text-[#596667] sm:text-[13px]">Revenue (YTD)</small>
              <b className="font-heading text-sm font-semibold sm:text-base">₦412m</b>
              <span className="text-[12px] font-medium text-[#167380] sm:text-[13px]">+18%</span>
            </div>
            <div className="grid min-w-0 gap-1 rounded-xl bg-[#f3f2ef] p-2.5 sm:p-3">
              <small className="truncate text-[12px] text-[#596667] sm:text-[13px]">Receivables</small>
              <b className="font-heading text-sm font-semibold sm:text-base">₦38.4m</b>
              <span className="truncate text-[12px] font-medium text-[#167380] sm:text-[13px]">−6% overdue</span>
            </div>
          </div>

          <div className="mt-2 rounded-xl bg-[#f3f2ef] p-2.5 sm:p-3">
            <div className="flex items-center justify-between gap-2 text-[12px]">
              <b className="font-semibold">Income vs expenses</b>
              <small className="text-[12px] text-[#596667]">Monthly</small>
            </div>
            <div className="mt-2 flex h-[58px] items-end gap-1.5 overflow-hidden sm:h-[76px]" aria-hidden="true">
              {income.map((height, index) => (
                <span className="flex h-full min-w-0 flex-1 items-end gap-0.5" key={index}>
                  <i className="min-w-0 flex-1 rounded-t-[3px] bg-[#25a1b0]" style={{ height: `${height}%` }} />
                  <i className="min-w-0 flex-1 rounded-t-[3px] bg-[#bfe3e7]" style={{ height: `${expenses[index]}%` }} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 flex-1" aria-label="Recent invoices">
            <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-1.5 border-b border-black/10 py-1.5 sm:gap-2">
              <span className="grid min-w-0 gap-0.5">
                <b className="truncate text-[11px] font-semibold">Lagos Retail Co.</b>
                <small className="truncate text-[10px] text-[#596667]">ACC-SINV-0918</small>
              </span>
              <em className="rounded-full bg-[#dceff1] px-2 py-1 text-[11px] not-italic text-[#167380]">Paid</em>
              <span className="whitespace-nowrap text-[11px] font-medium sm:text-[11px]">₦2,450,000</span>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-1.5 border-b border-black/10 py-1.5 sm:gap-2">
              <span className="grid min-w-0 gap-0.5">
                <b className="truncate text-[11px] font-semibold">Eko Foods Ltd</b>
                <small className="truncate text-[10px] text-[#596667]">ACC-SINV-0917</small>
              </span>
              <em className="rounded-full bg-[#e8e7e4] px-2 py-1 text-[11px] not-italic text-[#404849]">Pending</em>
              <span className="whitespace-nowrap text-[11px] font-medium sm:text-[11px]">₦880,000</span>
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-1.5 py-1.5 sm:gap-2">
              <span className="grid min-w-0 gap-0.5">
                <b className="truncate text-[11px] font-semibold">Prime Supplies</b>
                <small className="truncate text-[11px] text-[#596667]">ACC-PINV-0332</small>
              </span>
              <em className="rounded-full bg-[#dceff1] px-2 py-1 text-[11px] not-italic text-[#167380]">Paid</em>
              <span className="whitespace-nowrap text-[10px] font-medium sm:text-[11px]">₦1,120,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-container hero-layout">
          <div className="hero-copy">
            <Badge variant="outline" className="hero-badge h-auto">Nigmatech. Lagos, Nigeria</Badge>
            <h1>Software that keeps your business moving.</h1>
            <p className="build">
              We implement ERP software that growing businesses actually use, and build custom software when 
              nothing off the shelf fits
              Then we stay to support it.
            </p>
            <div className="home-actions">
              <Button render={<Link to="/contact" />} className="home-button home-button-primary h-auto">
                Book a consultation <ArrowRight size={15} />
              </Button>
              <Button render={<Link to="/solution/erp-software" />} variant="outline" className="home-button home-button-outline h-auto">
                Explore ERP software
              </Button>
            </div>
            <div className='hero-prove-container'>
                <div className="hero-proof">
              <span>
                <Check size={12} />
              </span>
              <p>Built for your operations</p>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={12} />
              </span>
              <p>Local payments built in</p>
            </div>
            <div className="hero-proof">
              <span>
                <Check size={12} />
              </span>
              <p>Support after launch</p>
            </div>
            </div>
          </div>
          <div className="hero-art">
            <DashboardPreview />
            
          </div>
        </div>
        <div className="hero-rule" />
      </section>

      <section className="sector-strip" aria-label="Industries served">
        <span className="sector-intro">Trusted by manufacturers, builders, distributors and service businesses</span>
        <div className="home-container sector-row">
          
          {sectors.map((item) => (
            <Badge variant="outline" className="sector-chip h-auto" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section className="home-section intro-section">
        <div className="home-container intro-grid">
          <div className="section-copy">
            <span className="copy">About Nigmatech</span>
            <h2>
              We&apos;re a Lagos software company that builds, implements, and
              supports the systems businesses run on.
            </h2>
            <p>
              Our ERP consultants and engineers work directly with your team: ERP specialists for Implementation,
              and  builders for anything custom. We measure success by whether your team uses what we deliver.
            </p>
            <Link className="home-text-link" to="/about">
              More about us <ArrowRight size={14} />
            </Link>
          </div>
          <div className="fact-grid">
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>20+</b>
              <strong></strong>
              <small>Businesses running on systems we built or Implemented</small>
            </Card>
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>5</b>
              
              <small>Industries with live ERP projects</small>
            </Card>
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>3</b>
              
              <small>Countries with live deployments</small>
            </Card>
             <Card role="article" className="gap-0 p-0 ring-0">
              <b>10</b>
              
              <small>Years Implementing ERP</small>
            </Card>
          </div>
        </div>
      </section>

      <section className="home-section solutions-section">
        <div className="home-container">
          <div className="section-heading heading-row">
            <div>
              <h2>ERP for your whole business and custom software for the gaps.</h2>
              <p className="">You work directly with the people who Implement, build and support your systems</p>
              
            </div>
          </div>
          <div className="solution-grid">
            {solutions.map(({ id, label, title, copy, to, action, Icon }) => (
              <Card role="article" className={`solution-card solution-${id} gap-0 ring-0`} key={id}>
                <div className="solution-meta">
                  <span>
                    <Icon size={15} />
                  </span>
                  <small>{label}</small>
                  <ArrowUpRight size={15} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <div className="solution-art" aria-hidden="true">
                  <div className="solution-art-orbit">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>
                   <Image size={30}/>
                  </span>
                  <small className='text-[14px] font-semibold'>
                    {id === "nuvio"
                      ? "Orders moving together"
                      : "Your work, connected"}
                  </small>
                </div>
                <Link to={to} className="solution-link py-2">
                  {action}
                  <ArrowRight size={14} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="capability-band">
        <div className="home-container">
          <div className="section-heading heading-row dark-heading">
              
              <h2>We implement your ERP, build what is missing, and stay to support it.</h2>

          </div>
          <div className="capability-grid">
            {capabilities.map(({ Icon, title, copy }, i) => (
              <Card role="article" className="gap-0 ring-0 capability-card" key={title}>
                <div className="flex items-center gap-2">
                   <span className="flex size-10 shrink-0 items-center justify-center rounded-lg text-nigma-teal-light">
                    <Icon size={26} />
                  </span>
                <h3>{title}</h3>
                </div>
                <p>{copy}</p>
              </Card>
            ))}
          </div>
         
        </div>
      </section>
      <section className="home-section process-section">
        <div className="home-container">
          <div className="section-heading heading-row">
            <div className="section-heading">
              
              <h2>A clear path from the first call to go-live and beyond.</h2>
            </div>
            <p>
              The same four stages on every project, so you always know what happens next.
            </p>
          </div>
          <div className="process-grid">
            {steps.map(({ number, title, copy }, i) => (
              <Card role="article" className="gap-0 ring-0 process-card" key={number}>
                <div>
                  <b className="rounded-full p-1.5 bg-nigma-teal-dark text-nigma-ink">{number}</b>
                  {i < steps.length - 1 && <span />}
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section principles-section">
        <div className="home-container">
          <div className="section-heading">
            
            <h2>Trusted by the teams who use it every day</h2>
            <p>A shared view of what is happening and what needs attention.</p>
          </div>
          <div className="principle-grid">
            {principles.map(({ title, copy, company }, i) => (
              <Card role="article" className="gap-0 ring-0 principle-card" key={title}>
                <div>
                  <span>“</span>
                  <small>ERP Software</small>
                </div>
                <p>{copy}</p>
                <footer>
                  <i>
                    <UsersRound size={17} />
                  </i>
                  <span>
                    <b>{title}</b>
                    <small>{company}</small>
                  </span>
                </footer>
                <strong>0{i + 1}</strong>
              </Card>
            ))}
          </div>
          
          <Card role="article" className="gap-0 ring-0 story-card lg:mt-0 mt-20 border md:h-[340px] h-auto">
            <div className="story-visual">
              <Image aria-hidden="true" size={17} />
              <small>Photo · Cabinet workshop, finished units on the floor</small>
            </div>
            <div className="story-copy">
              <span className="eye">Featured project: Manufacturing</span>
              <h3>Estimates in minutes, not days</h3>
              <p>
                A custom estimating module that prices cabinets from carcass, door, drawer, hardware, material and finish lookup tables, then turns approved estimates into ERP items and orders.
              </p>
              <Link className="home-text-link" to="/solution/sportlight">
                See all spotlight projects <ArrowRight size={14} />
              </Link>
            </div>
          </Card>
        </div>
        
      </section>

      <section className="home-section faq-section">
        <div className="home-container faq-grid">
          <h2>Questions, answered</h2>
          <Accordion className="faq-list" defaultValue={["home-faq-0"]}>
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={q} value={`home-faq-${i}`} className="rounded-[10px] border border-black/[.07] bg-white/[.76] shadow-[0_6px_18px_rgba(5,10,11,.03)]">
                <AccordionTrigger className="min-h-[52px] items-center gap-[18px] px-[15px] py-3 text-left text-[17px] font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[650px] px-[15px] pb-[15px] text-base leading-[1.7] text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-container">
          <div className="home-cta">
            
            <h2>Let’s map your processes</h2>
            <p>
              Book a 30-minute call. We’ll walk through your ERP or custom software needs and give you a clear next step.
            </p>
            <div className="home-actions">
            <Button render={<Link to="/contact" />} className="home-button home-button-primary h-auto">
                Book a consultation <ArrowRight size={15} />
            </Button>
            <Button render={<Link to="/contact" />} variant="outline" className="home-button home-button-outline h-auto">
                Contact us
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
