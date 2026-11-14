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
  Layers3,
  LocationEdit,
  MessageCircle,
  Package,
  Phone,
  Play,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Store,
  UsersRound,
  Utensils,
  Workflow,
  Zap,
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
    title: "ERP implimented properly for your business",
    copy: "Finance, inventory, manufacturing, projects, HR and CRM in one system, set up around how you actually work and supported after go-live",
    to: "/solution/erp-software",
    action: "Explore ERP Software",
    Icon: Layers3,
  },
  {
    id: "erp",
    label: "Custom software",
    title: "Built around your process, when nothing off the sheft fits",
    copy: "Business applications, workflow automation and integrations that connect your ERP, payment gatways and messaging, then supported for the long term",
    to: "/contact",
    action: "Discuss your project",
    Icon: Phone,
  },
];

const capabilities = [
  {
    Icon: Workflow,
    title: "Business-first",
    copy: "We start from your operations and margins, not from a feature list",
  },
  {
    Icon: Rocket,
    title: "Practical delivery",
    copy: "Working software in weeks, shown to you in regular demo.",
  },
  {
    Icon: LocationEdit,
    title: "Built for here",
    copy: "Local payment gateways. whatsApp and local tax rules are already built in",
  },
];

// const industries = [
//   {
//     Icon: Utensils,
//     title: "Food & hospitality",
//     copy: "Orders, kitchens, and service.",
//   },
//   { Icon: Store, title: "Retail", copy: "Stock, sales, and daily operations." },
//   {
//     Icon: Package,
//     title: "Distribution",
//     copy: "Inventory and connected workflows.",
//   },
//   {
//     Icon: Building2,
//     title: "Professional services",
//     copy: "People, projects, and delivery.",
//   },
//   {
//     Icon: ShoppingBag,
//     title: "Multi-branch teams",
//     copy: "A clearer view across locations.",
//   },
//   {
//     Icon: ChartColumnIncreasing,
//     title: "Growing businesses",
//     copy: "Systems ready for what comes next.",
//   },
// ];

// const services = [
//   {
//     Icon: ChartColumnIncreasing,
//     title: "Product strategy",
//     copy: "Find the right problem and define a useful solution.",
//   },
//   {
//     Icon: Workflow,
//     title: "Systems integration",
//     copy: "Bring disconnected tools into a clearer flow.",
//   },
//   {
//     Icon: Layers3,
//     title: "Custom software",
//     copy: "Build software around your operating needs.",
//   },
//   {
//     Icon: ShieldCheck,
//     title: "Ongoing support",
//     copy: "Keep your tools useful as the business changes.",
//   },
// ];

const steps = [
  {
    number: "01",
    title: "Discover",
    copy: "We learn how your business really runs: the people, processes, data and limits.",
  },
  {
    number: "02",
    title: "Design",
    copy: "We agree the scope, workflows and succes measures with you before building anything.",
  },
  {
    number: "03",
    title: "Impliment",
    copy: "We build and configure in short cycles with regular demos so there are no surprises.",
  },
  {
    number: "04",
    title: "improve",
    copy: "After go-live we stay on to support your team, tune the system and also what you need next.",
  },
];

const principles = [
  {
    title: "Name",
    copy: "A shared view of what is happening and what needs attention.",
  },
  {
    title: "Name",
    copy: "Work moves cleanly from one person, tool, or team to the next.",
  },
  {
    title: "Name",
    copy: "The right information is close when a decision needs to be made.",
  },
];

const faqs = [
  {
    q: "What does Nigmatech build?",
    a: "Nigmatech builds and implements Nuvio for cloud kitchens, ERP software, and custom digital systems for growing businesses.",
  },
  {
    q: "What is Nuvio?",
    a: "Nuvio brings cloud-kitchen ordering and operations into one workspace, helping teams keep menus, orders, payments, and kitchen activity connected.",
  },
  {
    q: "Can you work with the systems we already use?",
    a: "We start by understanding your current tools and workflows, then recommend a practical approach for configuration, integration, or custom software.",
  },
  {
    q: "Do you support implementation after launch?",
    a: "Implementation and ongoing support are part of the way we work, so your team has help as the system becomes part of daily operations.",
  },
];

// function Eyebrow({ children, light = false }) {
//   return (
//     <Badge variant="ghost" className={`home-eyebrow text-4xl h-auto rounded-none border-0 bg-transparent px-0 py-0 text-inherit${light ? " home-eyebrow-light" : ""}`}>
//       {children}
//     </Badge>
//   );
// }

function DashboardPreview() {
  const income = [35, 52, 42, 68, 55, 88, 62, 74, 48, 93, 65, 78];
  const expenses = [24, 38, 31, 46, 34, 58, 43, 50, 32, 65, 46, 55];

  return (
    <div
      className="dashboard-preview"
      role="img"
      aria-label="Illustrative finance dashboard showing revenue, receivables, income versus expenses, and recent invoices"
    >
      <div className="dashboard-window">
        <div className="dashboard-browser" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>erp.yourcompany.app/accounting</span>
        </div>
        <div className="dashboard-inner">
          <div className="dashboard-title">
            <span>
              <b>Finance overview</b>
              <small>FY 2026 · All branches</small>
            </span>
            
          </div>

          <div className="dashboard-metrics">
            <div>
              <small>Revenue (YTD)</small>
              <b>₦412m</b>
              <span className="metric-positive">+18%</span>
            </div>
            <div className="dashboard-receivables">
              <small>Receivables</small>
              <b>₦38.4m</b>
              <span className="metric-negative">−6% over 30 days</span>
            </div>
            <div className="dashboard-active-plans">
              <small>Active plans</small>
              <b>312</b>
              <span>This week</span>
            </div>
          </div>

          <div className="dashboard-chart">
            <div className="dashboard-chart-title">
              <b>Income vs expenses</b>
            </div>
            <div className="dashboard-bars" aria-hidden="true">
              {income.map((height, index) => (
                <span className="dashboard-bar-pair" key={index}>
                  <i style={{ height: `${height}%` }} />
                  <i style={{ height: `${expenses[index]}%` }} />
                </span>
              ))}
            </div>
          </div>

          <div className="dashboard-order-list" aria-label="Recent invoices">
            <div className="dashboard-order">
              <span><b>Lagos Retail Co.</b><small>ACC-SINV-0918</small></span>
            </div>
            <div className="dashboard-order">
              <span><b>Eko Foods Ltd</b><small>ACC-SINV-0917</small></span>
            </div>
            <div className="dashboard-order">
              <span><b>Prime Supplies</b><small>ACC-PINV-0332</small></span>
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
              We impliment ERP software that growing businesses actually use, and build custom software when 
              nothing off the shelf fits
              Then we stay to support it.
            </p>
            <div className="home-actions">
              <Button render={<Link to="/contact" />} className="home-button home-button-primary h-auto">
                Book a consolution <ArrowRight size={15} />
              </Button>
              <Button render={<Link to="/solution/nuvio" />} variant="outline" className="home-button home-button-outline h-auto">
                Explore ERP software
              </Button>
            </div>
            <div className='hero-prove-container'>
                <div className="hero-proof">
              <span>
                <Check size={12} />
              </span>
              <p>Build for your operations</p>
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
              <p>Support after lunch</p>
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
              Our ERP consultants and engineers work directly with your tem: ERP specialists for implimentation,
              and  builders for anything custom. We measure success by whether your team uses what we deliver.
            </p>
            <Link className="home-text-link" to="/about">
              More about Nigmatech <ArrowRight size={14} />
            </Link>
          </div>
          <div className="fact-grid">
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>[XX]+</b>
              <strong></strong>
              <small>businesses running on systems we built or implimented</small>
            </Card>
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>5</b>
              
              <small>Industries with live ERP projects</small>
            </Card>
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>[X]</b>
              
              <small>Contries with live deployments</small>
            </Card>
             <Card role="article" className="gap-0 p-0 ring-0">
              <b>[XX]</b>
              
              <small>years implimenting ERPNext</small>
            </Card>
          </div>
        </div>
      </section>

      <section className="home-section solutions-section">
        <div className="home-container">
          <div className="section-heading heading-row">
            <div>
              <h2>ERP for the whole business, and software for the gaps</h2>
              <p className="">you work directly with the people who impliment, build and support your systems</p>
              
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
                    {id === "nuvio" ? (
                     
                     <Layers3 size={30} /> 
                    ) : (
                      <Utensils size={30} />
                    )}
                  </span>
                  <small>
                    {id === "nuvio"
                      ? "Orders moving together"
                      : "Your work, connected"}
                  </small>
                </div>
                <Link to={to} className="solution-link">
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
              
              <h2>We impliment it, we build what's missing , and we stay to support it.</h2>

          </div>
          <div className="capability-grid">
            {capabilities.map(({ Icon, title, copy }, i) => (
              <Card role="article" className="gap-0 ring-0 capability-card" key={title}>
                <span className="capability-icon">
                  <Icon size={25} />
                </span>
                <h3>{title}</h3>
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
              
              <h2>A clear path from first call to go-live, and beyond</h2>
            </div>
            <p>
              The same four stages on every project, so you always know what happens next.
            </p>
          </div>
          <div className="process-grid">
            {steps.map(({ number, title, copy }, i) => (
              <Card role="article" className="gap-0 ring-0 process-card" key={number}>
                <div>
                  <b>{number}</b>
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
          </div>
          <div className="principle-grid">
            {principles.map(({ title, copy }, i) => (
              <Card role="article" className="gap-0 ring-0 principle-card" key={title}>
                <div>
                  <span>“</span>
                  <small>BUILT AROUND THE WORK</small>
                </div>
                <p>{copy}</p>
                <footer>
                  <i>
                    <UsersRound size={17} />
                  </i>
                  <span>
                    <b>{title}</b>
                    <small>[Title][Manufacturing client]</small>
                  </span>
                </footer>
                <strong>0{i + 1}</strong>
              </Card>
            ))}
          </div>
          
          <Card role="article" className="gap-0 ring-0 story-card lg:mt-0 mt-20 border">
            <div className="story-visual">
              <div className="story-window">
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span />
                <span />
                <div className="story-bars">
                  {[35, 70, 48, 91, 61, 78, 45, 85].map((height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <b>
                  <Play size={20} fill="currentColor" />
                </b>
              </div>
            </div>
            <div className="story-copy">
              <span className="eye">Featuring project - Manufacturing</span>
              <h3>Estimates in munites, not days</h3>
              <p>
                A custom estimating module that prices cabinets from carcass, door, drawer, hardware, material and finish lookup tables, then turns approved estimates into ESP itmes and orders.
              </p>
              <Link className="home-text-link" to="/solution/nuvio">
                See how Nuvio works <ArrowRight size={14} />
              </Link>
            </div>
          </Card>
        </div>
        
      </section>

      <section className="home-section faq-section">
        <div className="home-container faq-grid">
          {/* <div className="section-copy">
            <span className="eye">GOOD QUESTIONS</span>
            
            <p>A few useful things to know about working with Nigmatech.</p>
            <Link className="home-text-link" to="/contact">
              Ask us something else <ArrowRight size={14} />
            </Link>
          </div> */}
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
            
            <h2>Let's map your processes</h2>
            <p>
              book a 30-minute call. We'll walk though your ERP or custom software needs and give you a clear next step.
            </p>
            <div className="home-actions">
            <Button render={<Link to="/contact" />} className="home-button home-button-primary h-auto">
                Book a consultant <ArrowRight size={15} />
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
