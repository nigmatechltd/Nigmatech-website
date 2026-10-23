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
  MessageCircle,
  Package,
  Play,
  ShieldCheck,
  ShoppingBag,
  Store,
  Utensils,
  Workflow,
  Zap,
} from "lucide-react";
import "./home.css";

const sectors = [
  "Food & hospitality",
  "Retail & distribution",
  "Professional services",
  "Multi-location teams",
  "Growing businesses",
];

const solutions = [
  {
    id: "nuvio",
    label: "01 / NUVIO",
    title: "The operating system for cloud kitchens",
    copy: "Bring orders, menus, payments, and kitchen workflows into one clear view.",
    to: "/solution/nuvio",
    action: "Explore Nuvio",
    Icon: Utensils,
  },
  {
    id: "erp",
    label: "02 / ERP SOFTWARE",
    title: "ERP that fits the way your business works",
    copy: "Connect the everyday work behind your people, processes, and decisions.",
    to: "/solution/erp-software",
    action: "Explore ERP software",
    Icon: Layers3,
  },
];

const capabilities = [
  {
    Icon: Workflow,
    title: "Systems that work together",
    copy: "Connect the tools and processes your team already depends on.",
  },
  {
    Icon: ShieldCheck,
    title: "Built for real operations",
    copy: "Practical software shaped around how work happens day to day.",
  },
  {
    Icon: Zap,
    title: "Less friction, more flow",
    copy: "Make the next step easier to see and simpler to complete.",
  },
  {
    Icon: MessageCircle,
    title: "A team beside you",
    copy: "Get implementation and ongoing support from people who know the system.",
  },
];

const industries = [
  {
    Icon: Utensils,
    title: "Food & hospitality",
    copy: "Orders, kitchens, and service.",
  },
  { Icon: Store, title: "Retail", copy: "Stock, sales, and daily operations." },
  {
    Icon: Package,
    title: "Distribution",
    copy: "Inventory and connected workflows.",
  },
  {
    Icon: Building2,
    title: "Professional services",
    copy: "People, projects, and delivery.",
  },
  {
    Icon: ShoppingBag,
    title: "Multi-branch teams",
    copy: "A clearer view across locations.",
  },
  {
    Icon: ChartColumnIncreasing,
    title: "Growing businesses",
    copy: "Systems ready for what comes next.",
  },
];

const services = [
  {
    Icon: ChartColumnIncreasing,
    title: "Product strategy",
    copy: "Find the right problem and define a useful solution.",
  },
  {
    Icon: Workflow,
    title: "Systems integration",
    copy: "Bring disconnected tools into a clearer flow.",
  },
  {
    Icon: Layers3,
    title: "Custom software",
    copy: "Build software around your operating needs.",
  },
  {
    Icon: ShieldCheck,
    title: "Ongoing support",
    copy: "Keep your tools useful as the business changes.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    copy: "We learn how your team works and where the friction lives.",
  },
  {
    number: "02",
    title: "Design",
    copy: "We shape a clear plan around your people and priorities.",
  },
  {
    number: "03",
    title: "Build",
    copy: "We configure, connect, and test the system with your team.",
  },
  {
    number: "04",
    title: "Go live",
    copy: "We support the handover and keep improving from there.",
  },
];

const principles = [
  {
    title: "Clarity",
    copy: "A shared view of what is happening and what needs attention.",
  },
  {
    title: "Continuity",
    copy: "Work moves cleanly from one person, tool, or team to the next.",
  },
  {
    title: "Control",
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

function Eyebrow({ children, light = false }) {
  return (
    <Badge variant="ghost" className={`home-eyebrow h-auto rounded-none border-0 bg-transparent px-0 py-0 text-inherit${light ? " home-eyebrow-light" : ""}`}>
      {children}
    </Badge>
  );
}

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

function PhonePreview() {
  return (
    <div
      className="order-phone"
      role="img"
      aria-label="Illustrative WhatsApp order conversation for Wunmax Kitchen"
    >
      <div className="phone-screen">
        <div className="phone-contact">
          <span><Utensils size={14} /></span>
          <b>Wunmax Kitchen<small>WhatsApp · ordering assistant</small></b>
        </div>
        <p className="chat-bubble chat-in">
          Hi! Jollof rice with chicken and 1 small chops pack. Deliver to Lekki Phase 1 pls
          <small>12:01</small>
        </p>
        <p className="chat-bubble chat-out">
          2 × Jollof rice + chicken, 1 Small chops ₦18,500. Reply CONFIRM to place your order.
          <small>12:01</small>
        </p>
        <div className="chat-confirm">CONFIRM <small>12:02</small></div>
        <div className="phone-input">
          <span>Message</span>
          <b aria-hidden="true">➤</b>
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
              We build Novia, the all-in-one platform for cloud kitchens and Impliment ERP software businesses actually use.
              Then we stay to support it.
            </p>
            <div className="home-actions">
              <Button render={<Link to="/solution/nuvio" />} className="home-button home-button-primary h-auto">
                Book a demo <ArrowRight size={15} />
              </Button>
              <Button render={<Link to="/contact" />} variant="outline" className="home-button home-button-outline h-auto">
                Explore solutions
              </Button>
            </div>
            <div className='hero-prove-container'>
                <div className="hero-proof">
              <span>
                <Check size={12} />
              </span>
              <p>Build for your production</p>
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
            <PhonePreview />
          </div>
        </div>
        <div className="hero-rule" />
      </section>

      <section className="sector-strip" aria-label="Industries served">
        <span className="sector-intro">Trusted by kitchen, manufacturers, builder and distributor</span>
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
              Good software should make work clearer, not add another layer to
              it. We bring product thinking, implementation, and ongoing support
              together so the tools fit the way your team operates.
            </p>
            <Link className="home-text-link" to="/about">
              More about Nigmatech <ArrowRight size={14} />
            </Link>
          </div>
          <div className="fact-grid">
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>2</b>
              <strong>focused software solutions</strong>
              <small>Nuvio + ERP software</small>
            </Card>
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>One</b>
              <strong>team from planning to support</strong>
              <small>Built around your workflow</small>
            </Card>
            <Card role="article" className="gap-0 p-0 ring-0">
              <b>Lagos</b>
              <strong>local context, practical delivery</strong>
              <small>Made for business here</small>
            </Card>
             <Card role="article" className="gap-0 p-0 ring-0">
              <b>24/7</b>
              <strong>local context, practical delivery</strong>
              <small>Made for business here</small>
            </Card>
          </div>
        </div>
      </section>

      <section className="home-section solutions-section">
        <div className="home-container">
          <div className="section-heading heading-row">
            <div>
              <span className="copy">Solution</span>
              <h2>Two solutions, one team behind both</h2>
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
                      <Utensils size={30} />
                    ) : (
                      <Layers3 size={30} />
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
            <div>
              <span className="copy">Why Nigmatech</span>
              <h2>Practical software, built for how business works here.</h2>
            </div>
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
          <div className="capability-stats">
            <div>
              <b>5</b>
              <span>connected solutions connected solutions connected solutions</span>
            </div>
            <div>
              <b>6</b>
              <span>delivery team</span>
            </div>
            <div>
              <b>2</b>
              <span>implementation and support connected solutions connected solutions</span>
            </div>
            <div>
              <b>6 hours</b>
              <span>care beyond go-live connected solutions connected solutions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section industries-section">
        <div className="home-container">
          <div className="section-heading">
            <span className="copy">Industry</span>
            <h2>Built for teams doing the everyday work</h2>
          </div>
          <div className="industry-grid">
            {industries.map(({ Icon, title, copy }) => (
              <Card role="article" className="gap-0 ring-0 industry-card" key={title}>
                <span className="industry-icon">
                  <Icon size={25} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowUpRight size={30} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section custom-section">
        <div className="home-container custom-grid">
          <div className="section-copy">
            <span className="copy">custom Software</span>
            <h2>
              Need Something built just for you?
            </h2>
            <p>
              When neither solution fits, we design and build software around your process connect
              it to the system you already use.
            </p>
            <Button render={<Link to="/contact" />} className="home-button home-button-dark h-auto">
              Discuss your project <ArrowRight size={15} />
            </Button>
          </div>
          <div className="service-grid">
            {services.map(({ Icon, title, copy }) => (
              <Card role="article" className="gap-0 ring-0 service-card" key={title}>
                <span>
                  <Icon size={26} />
                </span>
                <ArrowUpRight size={14} />
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
              <Eyebrow>OUR APPROACH</Eyebrow>
              <h2>A clear path from first call to go-live, and beyond</h2>
            </div>
            <p>
              Stay close to the work at every step, with clear decisions and no
              mystery handoffs.
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
            <Eyebrow>WHAT GOOD SYSTEMS MAKE POSSIBLE</Eyebrow>
            <h2>Trusted by the teams who use it every day</h2>
            <p>
              Useful software gives people more clarity, continuity, and room to
              focus on customers.
            </p>
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
                    <Check size={25} />
                  </i>
                  <span>
                    <b>{title}</b>
                    <small>What good systems deliver</small>
                  </span>
                </footer>
                <strong>0{i + 1}</strong>
              </Card>
            ))}
          </div>
          <Card role="article" className="gap-0 ring-0 story-card">
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
              <Eyebrow>PRODUCT SPOTLIGHT</Eyebrow>
              <h3>How Nuvio brings food channels together in one place</h3>
              <p>
                Orders, kitchen activity, and customer updates can move as one
                connected workflow, giving the team a clearer view through the
                day.
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
          <div className="section-copy">
            <Eyebrow>GOOD QUESTIONS</Eyebrow>
            <h2>Questions, answered</h2>
            <p>A few useful things to know about working with Nigmatech.</p>
            <Link className="home-text-link" to="/contact">
              Ask us something else <ArrowRight size={14} />
            </Link>
          </div>
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
            <Eyebrow>LET&apos;S MOVE YOUR BUSINESS FORWARD</Eyebrow>
            <h2>Ready to see it in action?</h2>
            <p>
              Tell us what your team needs. We&apos;ll help you find the right
              next step.
            </p>
            <div className="home-actions">
            <Button render={<Link to="/contact" />} className="home-button home-button-primary h-auto">
                Book a demo <ArrowRight size={15} />
            </Button>
            <Button render={<Link to="/contact" />} variant="outline" className="home-button home-button-outline h-auto">
                Talk to us <ArrowUpRight size={15} />
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
