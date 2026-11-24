import {
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Camera,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Factory,
  FactoryIcon,
  FileCheck2,
  FolderKanban,
  Gauge,
  HardHat,
  Headset,
  Image,
  Layers3,
  Link2,
  MessageSquare,
  PackageCheck,
  Quote,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  User,
  UsersRound,
  WalletCards,
  Warehouse,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import Footer from "@/components/layout/Footer";

const spotlightProjects = [
  {
    featured: true,
    category: "Manufacturing",
    photo: "Cabinet workshop, finished units on the floor",
    title: "Estimates in minutes, not days",
    client: "Cabinet manufacturer",
    copy: "A custom estimating module that prices cabinets from carcasses, doors, drawer fronts, materials and labour, then turns approved estimates into ERPNext items and orders.",
    tags: ["Estimating", "Manufacturing", "Selling"],
    statValue: "XX%",
    statLabel: "faster quoting",
    logo: <Factory size={16} />
  },
  {
    category: "Construction",
    photo: "Site engineer reviewing plans on a tablet",
    title: "Every project, every naira, in view",
    client: "Construction company",
    copy: "Bring bills of quantities, change orders, cost control and daily progress into one project view.",
    tags: ["Projects", "Cost control", "Buying"],
    statValue: "XX",
    statLabel: "active projects tracked",
    logo: <HardHat size={16} />
  },
  {
    category: "Trade distribution",
    photo: "Warehouse shelving with plumbing stock",
    title: "Wholesaler catalogues, connected",
    client: "Heating & plumbing distributor",
    copy: "Keep supplier catalogues, prices and product data connected with stock and purchasing workflows.",
    tags: ["Buying", "Stock", "Integrations"],
    statValue: "XXk",
    statLabel: "supplier items synced",
    logo: <Warehouse size={16} />
  },
  {
    category: "Retail & trading",
    photo: "Retail counter with invoice printer",
    title: "ZATCA e-invoicing, Phase 1 and 2",
    client: "Trading company, Saudi Arabia",
    copy: "Complete simplified and standard invoices, onboarding and reporting to ZATCA, built into the client's existing ERPNext sales flow.",
    tags: ["Accounting", "Compliance", "Local tax"],
    statValue: "XXk",
    statLabel: "invoices reported to ZATCA",
    logo: <Store size={16} />
  },
  {
    category: "Workforce & HR",
    photo: "HR team in a bright office",
    title: "HR and payroll for a growing team",
    client: "Multi-site employer",
    copy: "Unify employee records, leave, attendance, expense claims and payroll in one ERPNext setup across multiple offices.",
    tags: ["HR", "Payroll", "People"],
    statValue: "XXX",
    statLabel: "employees on one system",
    logo: <UsersRound size={16} />
  },
];

const modules = [
  [
    WalletCards,
    "Finance & accounting",
    "General ledger, receivables, bancking, budgets and multi-company consolidation.",
  ],
  [
    Boxes,
    "Inventory & warehousing",
    "Stock across multiple warehouses, batches and serial numbers with automatic reordering.",
  ],
  [
    ClipboardList,
    "Procurement",
    "Purchase requests, supplier purchase orders and three-way matching.",
  ],
  [
    UsersRound,
    "Sales & CRM",
    "Leads , quotations sales orders and pricing rule with a full history for customer.",
  ],
  [
    User,
    "HR & payroll",
    "Employee records, leave, attendance, expense claims and payroll.",
  ],
  [
    FactoryIcon,
    "Manufacturing",
    "Bills of materials, work orders, production planning and costing.",
  ],
  [
    Layers3,
    "Projects",
    "Track, timesheets, project costing and client billing.",
  ],
  [
    Headset,
    "Helpdesk",
    "TCustomer support tickets with service-level targets and self-service portal.",
  ],
   [
    ChartNoAxesCombined,
    "Analytics and dashboards",
    "Live dashboards and reports for management, finance and operations.",
  ],
];

const practices = [
  [
    
    "ERP setup & configuration",
    "Your chart of accounts, company structure, roles and workflows, set up to match how your business actually works.",
  ],
  [
    
    "Process mapping",
    "We document how work actually flows today before deciding what the system should do.",
  ],
  [
    
    "Data migration",
    "PCustomers, itmes, balances and history moved over clearly and checked.",
  ],
  [
    
    "Training & support",
    "Hands-on training for each rol, then support after go-live from the team that built your system.",
  ],
];

const connections = [
  [
    CreditCard,
    "Local payments gateways",
    "Paystack and flutterwave connected directly to your invioces and receipts.",
  ],
  [
    MessageSquare,
    "WhatsApp & Telegram",
    "Approves, reminders and notifications sent where your team already works.",
  ],
  [
    ShieldCheck,
    "Tax & e-invoicing compliance",
    "Tax setup and e-invoicing for each country you operate in.",
  ],
  [
    Sparkles,
    "AI-assisted workflows",
    "Help with drafting, summaring and data entry, built into the tools your team uses.",
  ],
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
    copy: "We agree the scope, workflows and succes measures with you before building anything.",
  },
  {
    number: "03",
    title: "Implement",
    copy: "We build and configure in short cycles with regular demos so there are no surprises.",
  },
  {
    number: "04",
    title: "improve",
    copy: "After go-live we stay on to support your team, tune the system and also what you need next.",
  },
];



const faqs = [
  [
    "What is ERPNext?",
    "ERPNext is a complete, open-source ERP with no per-user licence fees. You own your data and your system, and you can extend it without being into a vendor." ,
  ],
  [
    "Can you take over an existing ERP setup?",
    "Yes. We can review your current system, map the data and processes, and migrate to ERPNext with minimal disruption.",
  ],
  [
    "Cloud or on premise?",
    "We can host your system in the cloud or on your own servers, depending on your security and compliance requirements.",
  ],
  [
    "How long does an implementation take?",
    "Timing depends on the number of teams, processes, integrations and data to move. We define the scope and a practical delivery plan together after discovery.",
  ],
];

const sectors = [
  "client logo",
  "client logo",
  "client logo",
  "client logo",
  "client logo",
  "client logo",
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

function ERPSoftware() {
  return (
    <>
      <nav
        aria-label="ERP page navigation"
        className="fixed left-1/2 top-4 z-50 mx-auto flex min-h-11 w-[calc(100%-2rem)] max-w-[1220px] -translate-x-1/2 items-center justify-between gap-3 rounded-full border border-white/10 bg-[#071112]/95 px-3 py-2 text-[15px] text-white/70 shadow-lg shadow-black/20 backdrop-blur-xl sm:w-[calc(100%-3rem)] sm:px-5"
      >
        <Link
          to="/solution/erp-software"
          className="flex shrink-0 items-center gap-2 text-[16px] font-bold text-white"
        >
          <span className="grid size-6 place-items-center rounded-md bg-nigma-teal text-nigma-ink">
            <Boxes size={14} />
          </span>
          <span>
            ERP <span className="font-normal text-white/45">Software</span>
          </span>
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          <a href="#overview" className="text-md hover:text-white">
            Overview
          </a>
          <a href="#projects" className="text-md hover:text-white">
            Projects
          </a>
          <a href="#capabilities" className="text-md hover:text-white">
            Modules
          </a>
          <a href="#implementation" className="text-md hover:text-white">
            Services
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>
        <Button
          render={<Link to="/contact" />}
          className="h-auto min-h-10 rounded-full bg-nigma-teal px-4 py-2.5 text-[16px] font-bold text-nigma-ink hover:bg-nigma-teal-light"
        >
          Book a consultation
        </Button>
      </nav>
      <main className="-mt-20 overflow-hidden bg-muted text-nigma-ink">
      <section id="overview" className="home-hero scroll-mt-20">
        <div aria-hidden="true" className="mb-12 h-11 sm:mb-16" />
        <div className="home-container hero-layout">
          <div className="hero-copy">
            <Badge variant="outline" className="hero-badge h-auto">
              ERP Software
            </Badge>
            <h1>ERP your teams will actually use.</h1>
            <p className="">We implement, customise and support ERP for growing businesses. Finance, inventory, manufacturing, projects and people in one system, set up around how you actually work.</p>
           
            <div className="home-actions">
              <Button
                render={<Link to="/contact" />}
                className="home-button home-button-outline h-auto"
              >
                See spolight projects <ArrowRight size={15} />
              </Button>
            </div>
            <div className="hero-prove-container">
              <div className="hero-proof">
                <span>
                  <Check size={12} />
                </span>
                <p>No per-user licensing fees</p>
              </div>
              <div className="hero-proof">
                <span>
                  <Check size={12} />
                </span>
                <p>Cloud or on-premise</p>
              </div>
              <div className="hero-proof">
                <span>
                  <Check size={12} />
                </span>
                <p>You own your data</p>
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
        <span className="sector-intro">
          Trusted by manufacturers, builders, distributors and service
          businesses
        </span>
        <div className="home-container sector-row">
          {sectors.map((item) => (
            <Badge variant="outline" className="sector-chip h-auto" key={item}>
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1250px] container">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-11 sm:flex-row sm:items-end">
            <div>
              <p className="text-[20px] font-bold tracking-[.18em] text-nigma-teal-dark">
                Sportlight projects
              </p>
              <h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold  tracking-tight sm:text-4xl">
                ERP that fits the industry
              </h2>
              <p className="max-w-[550px] mt-3 text-muted-foreground">
                Five recent projects across five industries. Each one started
                with how the business really works.
              </p>
            </div>
            <Button
              render={<Link to="/contact" />}
              className="inline-flex min-h[42px] items-center justify-center gap-[9px] rounded-full border-solid px-5 py-[15px] text-xl font-[600] leading-[1.2] no-underline w-[250px] border border-[rgb(255 255 255 / 19%)] bg-white hover:border-[rgb(255 255 255 / 35%)] hover:bg-[rgb(255 255 255 / 10%)] h-auto text-black"
            >
              All case studies <ArrowRight size={15} />
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {spotlightProjects.map(
              ({
                featured,
                category,
                photo,
                title,
                client,
                copy,
                tags,
                statValue,
                statLabel,
                logo,
              }) => (
                <Card
                  role="article"
                  key={title}
                  className={`group flex  flex-col overflow-hidden rounded-[22px] border border-white bg-[#f7f8f8] p-0 ring-0 shadow-[0_8px_24px_rgba(5,10,11,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(5,10,11,0.1)] ${featured ? "md:col-span-2" : ""}`}
                >
                  <div
                    className={
                      featured
                        ? "grid h-full md:grid-cols-[1.05fr_1.25fr]"
                        : "flex h-full flex-col"
                    }
                  >
                    <div
                      className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_25%,rgba(111,202,212,0.32),transparent_48%),linear-gradient(145deg,#F7FAF8,#E1F1F1)] ${featured ? "h-[225px] md:h-full" : "h-[230px]"}`}
                    >
                      <span className="grid size-12 place-items-center rounded-xl border border-[#0b4d59]/15 bg-white/10 text-[#0d4a52] shadow-sm backdrop-blur-sm">
                        <Image size={22} className="text-[#0d4a52]/75" />
                      </span>
                      <span className="absolute bottom-3 left-3 inline-flex max-w-[85%] items-center gap-1.5 truncate rounded-full border border-white/80 bg-white/80 px-2.5 py-2 text-[12px] font-medium text-[#1d2d31] shadow-sm sm:text-[12px]">
                        <Camera size={11} className="shrink-0" />
                        <span className="truncate font-semibold">Photo. {photo}</span>
                      </span>
                    </div>

                    <div
                      className={`flex min-w-0 flex-col ${featured ? "px-5 py-5 sm:px-6 sm:py-6" : "px-4 py-4 sm:px-5"}`}
                    >
                      <p
                        className={`flex items-center gap-1.5 md:text-[20px] font-bold tracking-[.12em] text-nigma-teal-dark text-[18px]`}
                      >
                        {logo}
                        {featured ? `Featured · ${category}` : category}
                      </p>

                      <h3
                        className={`mt-2 font-heading font-semibold leading-[1.05] tracking-[-0.04em] text-[#111b1d] ${featured ? "md:text-[35px] text-[18px]" : "md:text-[20px] text-[18px]"}`}
                      >
                        {title}
                      </h3>

                      <p className="mt-2 md:text-[15px] leading-tight text-muted-foreground text-[17px]">
                        [{client}]
                      </p>

                      <p
                        className={`mt-2 text-muted-foreground ${featured ? "md:text-[15px] leading-6 text-[15px]" : "md:text-[17px] leading-5 text-[15px]"} ${featured ? "" : "line-clamp-2 sm:line-clamp-3"}`}
                      >
                        {copy}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="h-auto rounded-xl bg-[var(--muted)] border-0 ring-0 px-2.5 py-1.5 md:text-[14px] font-medium text-[#1c2b2d] shadow-[inset_0_0_0_1px_rgba(17,27,29,0.06)] text-[13px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-5 flex items-end gap-2 border-t border-black/[0.06] pt-3">
                        <span
                          className={`font-heading font-bold leading-none tracking-[-0.05em] text-[#111b1d] ${featured ? "text-[28px] sm:text-[42px]" : "text-[22px] sm:text-[30px]"}`}
                        >
                          [{statValue}]
                        </span>
                        <span className="pb-1 md:text-[14px] font-semibold leading-tight text-muted-foreground text-[12px]">
                          {statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20 px-4 pb-16 pt-5 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-9 max-w-2xl">
            <p className="text-[20px] font-bold tracking-[.18em] text-nigma-teal-dark">
              Modules
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              One system for the whole business
            </h2>
            <p className="mt-3 text-[17px] leading-6 text-muted-foreground">
             Start with the modules you need now, then add more as your business grows. They all share one database.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(([Icon, title, copy]) => (
              <Card
                role="article"
                key={title}
                className="rounded-xl h-[150px] rounded-[22px] border border-white bg-[#f7f8f8] p-0 ring-0 shadow-[0_8px_24px_rgba(5,10,11,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(5,10,11,0.1)] p-[17px]"
              >
                <div className="flex items-center gap-3 w-[235px]">
                  <span className="rounded-lg text-nigma-teal-dark">
                    <Icon size={23} />
                  </span>

                  <h3 className="mt-1 font-heading text-[15.5px] font-semibold">
                    {title}
                  </h3>
                </div>

                <p className="mt-2 text-[15px] leading-5 text-muted-foreground">
                  {copy}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-[1250px]">
          <p className="mb-3 text-[20px] font-bold tracking-[.16em] text-nigma-teal-dark">
            Clients
          </p>
          <div className="grid grid-cols-1 items-center gap-3 sm:gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <Card className="flex min-w-0 flex-col justify-between self-center rounded-[22px] border border-white bg-[#f7f8f8] p-4 shadow-[0_10px_28px_rgba(5,10,11,0.06)] sm:p-6">
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="grid size-8 shrink-0 place-items-center text-nigma-teal-dark sm:size-9">
                    <Quote size={20} />
                  </span>
                  <Badge
                    variant="secondary"
                    className="h-auto rounded-full px-2 py-1 text-[14px] font-medium"
                  >
                    ERP Software
                  </Badge>
                </div>
                <blockquote className="font-heading text-sm font-semibold leading-snug sm:text-xl sm:leading-relaxed">
                  “ERP works best when it reflects how people actually do the
                  work. We make the process clear, involve your team and build
                  confidence at every step.”
                </blockquote>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-nigma-teal text-white">
                  <UsersRound size={21} />
                </span>
                <div className="min-w-0">
                  <p className="truncate md:text-[15px] font-bold text-md">
                    Nigmatech implementation team
                  </p>
                  <p className="md:text-[15px] text-muted-foreground text-md">
                    ERP delivery & advisory
                  </p>
                </div>
              </div>
            </Card>
            <div
              role="img"
              aria-label="Photo placeholder for a production manager on the factory floor"
              className="relative flex h-[270px] items-center justify-center overflow-hidden rounded-[22px] border border-white bg-[radial-gradient(ellipse_at_70%_20%,rgba(111,202,212,0.48),transparent_48%),linear-gradient(145deg,#F7FAF8,#E1F1F1)] p-3 shadow-[0_10px_28px_rgba(5,10,11,0.06)] lg:h-[320px]"
            >
              <Image size={23} className="relative text-nigma-teal-dark/70" />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/80 bg-white/80 px-2 py-1 md:text-[15px] font-medium text-nigma-ink shadow-sm text-[12px]">
                Photo · Production manager on the factory floor
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="implementation" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-8">
            <p className="text-[20px] font-bold tracking-[.18em] text-nigma-teal-dark">
              What we do
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Implementation done properly
            </h2>
            <p className="mt-3 text-[16px] leading-6 text-muted-foreground">
             Most ERP projects fail on process and adoption, not software, we focus on both.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {practices.map(([ title, copy], i) => (
              <Card
                role="article"
                key={title}
                className="flex gap-4  bg-[var(--muted)] border-none ring-0 py-5"
              >
                
                <div>
                  {/* {i < practices.length - 1 && <span className='bg-[var(--border] h-[1px] flex-1'/>} */}
                  <hr />
                  <h3 className="font-heading text-xl font-semibold  mt-2">
                    {title}
                  </h3>
                  <p className="mt-2 text-md leading-5 text-muted-foreground">
                    {copy}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(ellipse_at_85%_25%,rgba(22,115,128,0.38),transparent_48%),linear-gradient(116deg,#050A0B,#0C1415_60%,#0C3337)] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1250px]">
          <div className="mb-8 max-w-2xl">
            <p className="text-[20px] font-bold tracking-[.18em] text-nigma-teal-light">
              Built for how business work here
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Connected to the tools and rules you deal with
            </h2>
            <p className="mt-3 text-[16px] leading-6 text-white/60">
              We've built the local integrations already, so you don't need to pay for them again
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {connections.map(([Icon, title, copy]) => (
              <Card
                role="article"
                key={title}
                className="rounded-xl border border-white/10 bg-white/[.045] p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg text-nigma-teal-light">
                    <Icon size={26} />
                  </span>
                  <h3 className="m-0 font-heading text-xl font-semibold text-white">
                    {title}
                  </h3>
                  </div>
                <p className="mt-2 text-[15px] leading-5 text-white/55">
                  {copy}
                </p>
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

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-[1250px] flex-col gap-5 rounded-2xl border border-white bg-[#f7f8f8] p-5 shadow-[0_10px_28px_rgba(5,10,11,0.06)] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
          <div className="max-w-3xl">
            <h2 className="font-heading text-lg font-semibold text-nigma-ink">
              When off-the-shelf doesn’t fit
            </h2>
            <p className="mt-1 text-[14px] leading-5 text-muted-foreground">
              We design and build business applications, automations and integrations around your process, then support them for the long term.
            </p>
            <p className="mt-2 text-[13px] leading-5 text-muted-foreground">
              Technologies: Frappe &amp; ERPNext · Python · FastAPI · Vue · React · MariaDB · REST &amp; webhooks · WhatsApp Cloud API
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-md font-bold text-nigma-teal-dark transition-colors hover:text-nigma-teal"
          >
            Discuss your project <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-2xl font-bold uppercase tracking-[.18em] text-nigma-teal-dark">
              FAQ
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight">
              ERP questions
            </h2>
          </div>
          <Accordion defaultValue={["erp-faq-0"]} className="gap-2">
            {faqs.map(([question, answer], i) => (
              <AccordionItem
                key={question}
                value={`erp-faq-${i}`}
                className="rounded-xl border border-white bg-white/80 px-5 shadow-[0_6px_18px_rgba(5,10,11,0.04)]"
              >
                <AccordionTrigger className="min-h-14 items-center py-0 text-md font-semibold hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-6 text-md leading-6 font-normal text-muted-foreground">
                  {answer}
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
                    A free 45-minute consultation with an ERP lead. You'll leave with a clear picture of what to automate first.
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
      <Footer />
      </main>
    </>
  );
}

export default ERPSoftware;
