import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Gauge,
  Layers3,
  Link2,
  PackageCheck,
  ShoppingBasket,
  Truck,
  UsersRound,
  Utensils,
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

const industries = ["Manufacturing", "Distribution", "Construction", "Food & beverage", "Professional services", "Retail"];

const industryCards = [
  { icon: Factory, title: "Manufacturing", copy: "Plan production, track materials and understand costs from one connected workspace.", tags: ["Work orders", "Materials", "Quality"] },
  { icon: Truck, title: "Distribution", copy: "Keep purchasing, stock and fulfilment in sync across warehouses and sales channels.", tags: ["Inventory", "Purchasing", "Fulfilment"] },
  { icon: BriefcaseBusiness, title: "Construction", copy: "Bring project budgets, procurement, people and progress into a clearer view.", tags: ["Projects", "Job costing", "Procurement"] },
  { icon: Utensils, title: "Food & beverage", copy: "Manage recipes, batches, stock movements and day-to-day operations with confidence.", tags: ["Recipes", "Batch tracking", "Expiry dates"] },
  { icon: UsersRound, title: "Professional services", copy: "Connect time, projects, billing and team capacity without scattered spreadsheets.", tags: ["Timesheets", "Projects", "Billing"] },
  { icon: ShoppingBasket, title: "Retail", copy: "Coordinate products, sales, purchasing and stock across your business.", tags: ["Products", "Sales", "Stock"] },
];

const modules = [
  [CircleDollarSign, "Finance & accounting", "See cash flow, budgets and accounts with cleaner financial records."],
  [Boxes, "Inventory & warehousing", "Know what is available, where it is and what needs replenishing."],
  [UsersRound, "People & payroll", "Keep employee records, leave and payroll processes together."],
  [ClipboardCheck, "Procurement", "Manage suppliers, purchase requests and approvals in one flow."],
  [BriefcaseBusiness, "Sales & CRM", "Follow leads, quotes, orders and customer history from one place."],
  [Gauge, "Manufacturing", "Connect bills of materials, production plans and work orders."],
  [Layers3, "Projects", "Track project work, time, costs and progress as it happens."],
  [BarChart3, "Reports & dashboards", "Turn connected operational data into useful, timely views."],
];

const practices = [
  [FileCheck2, "ERPNext configuration", "Fit the system to your processes, roles and approval paths."],
  [UsersRound, "People training", "Give each team practical guidance for the work they do every day."],
  [PackageCheck, "Data migration", "Prepare, map and validate important business records before go-live."],
  [Wrench, "Ongoing support", "Get help refining workflows and keeping the system useful over time."],
];

const connections = [
  [Link2, "Payment providers", "Connect payment workflows with the tools your business already uses."],
  [FileCheck2, "Local tax & reporting", "Shape finance workflows around your local reporting requirements."],
  [Truck, "Shipping & logistics", "Coordinate fulfilment information with delivery and logistics partners."],
  [Boxes, "Business integrations", "Connect ERPNext to selected systems through APIs and integrations."],
];

const steps = [
  ["01", "Discover", "Map your teams, processes, pain points and priorities."],
  ["02", "Design", "Agree on the right ERPNext setup, scope and delivery plan."],
  ["03", "Implement", "Configure, migrate and validate the system with your team."],
  ["04", "Improve", "Go live with support, then refine as your needs evolve."],
];

const customWork = [
  ["Business applications", "Purpose-built tools for a workflow that needs more than configuration."],
  ["Workflow automation", "Reduce repetitive handoffs with clear, maintainable automation."],
  ["Systems integration", "Connect ERPNext with the platforms and data your teams rely on."],
  ["Reporting & analytics", "Create focused reports for decisions your team makes often."],
];

const faqs = [
  ["What is ERPNext?", "ERPNext is an open-source ERP platform that brings business functions such as accounting, inventory, sales, projects and people operations into one system."],
  ["How long does an ERP implementation take?", "Timing depends on the number of teams, processes, integrations and data to move. We define the scope and a practical delivery plan together after discovery."],
  ["Can ERPNext fit our processes?", "ERPNext can be configured around many common workflows. When a requirement needs more, we can assess a custom workflow or integration."],
  ["Can you migrate our existing data?", "Yes. We can help review, map and validate the records that matter for your new system."],
  ["What happens after go-live?", "We can provide ongoing support, training and improvement work as your teams use the system."],
];

function DashboardPreview() {
  return (
    <div aria-label="ERP finance dashboard preview" className="relative mx-auto w-full max-w-[560px] rotate-0 rounded-2xl border border-white/15 bg-white p-3 shadow-2xl shadow-black/30 sm:p-4 lg:rotate-1">
      <div className="flex items-center justify-between border-b border-nigma-grey-light pb-3">
        <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-nigma-teal-pale text-nigma-teal-dark"><BarChart3 size={15} /></span><div><p className="text-[11px] font-bold text-nigma-ink">Business overview</p><p className="text-[9px] text-muted-foreground">Company dashboard</p></div></div>
        <span className="rounded-full bg-muted px-2 py-1 text-[9px] font-medium text-muted-foreground">This quarter⌄</span>
      </div>
      <div className="grid grid-cols-3 gap-2 py-3 sm:gap-3">
        {[["Revenue", "₦48.2m", "+12.8%"], ["Orders", "1,284", "+8.4%"], ["Stock health", "92.6%", "+4.1%"]].map(([label, value, change]) => <div key={label} className="rounded-xl bg-muted p-2 sm:p-3"><p className="text-[9px] text-muted-foreground">{label}</p><p className="mt-1 text-sm font-bold text-nigma-ink sm:text-lg">{value}</p><p className="mt-1 text-[8px] font-semibold text-nigma-teal-dark">↗ {change}</p></div>)}
      </div>
      <div className="grid gap-3 sm:grid-cols-[1.35fr_.85fr]">
        <div className="rounded-xl border border-nigma-grey-light p-3"><div className="flex items-center justify-between"><p className="text-[10px] font-bold text-nigma-ink">Sales performance</p><span className="text-[8px] text-muted-foreground">Jan — Jun</span></div><div className="mt-4 flex h-24 items-end justify-around gap-2 border-b border-l border-nigma-grey-light px-2"><span className="h-[35%] w-4 rounded-t bg-nigma-cyan-soft sm:w-6"/><span className="h-[52%] w-4 rounded-t bg-nigma-teal-light sm:w-6"/><span className="h-[45%] w-4 rounded-t bg-nigma-teal sm:w-6"/><span className="h-[68%] w-4 rounded-t bg-nigma-teal-light sm:w-6"/><span className="h-[58%] w-4 rounded-t bg-nigma-teal sm:w-6"/><span className="h-[88%] w-4 rounded-t bg-nigma-teal-dark sm:w-6"/><span className="h-[74%] w-4 rounded-t bg-nigma-teal sm:w-6"/></div><div className="mt-2 flex justify-between text-[8px] text-muted-foreground"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div></div>
        <div className="rounded-xl border border-nigma-grey-light p-3"><p className="text-[10px] font-bold text-nigma-ink">Recent activity</p><div className="mt-3 space-y-3">{[["Purchase order", "PO-02841 · Approved"], ["Invoice paid", "INV-00816 · Today"], ["Stock updated", "Warehouse A · 9:42"]].map(([a,b]) => <div key={a} className="flex gap-2"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-nigma-teal-pale text-nigma-teal-dark"><Check size={11}/></span><div><p className="text-[9px] font-semibold text-nigma-ink">{a}</p><p className="text-[8px] text-muted-foreground">{b}</p></div></div>)}</div></div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-nigma-ink px-3 py-2 text-white"><span className="text-[9px] text-white/70">Your operations, connected</span><span className="flex items-center gap-1 text-[9px] font-semibold text-nigma-teal-light">View reports <ArrowRight size={11}/></span></div>
    </div>
  );
}

function ERPSoftware() {
  return (
    <main className="-mt-20 overflow-hidden bg-muted text-nigma-ink">
      <section className="bg-[radial-gradient(ellipse_at_78%_45%,rgba(22,115,128,0.48),transparent_58%),linear-gradient(116deg,#050A0B,#0C1415_58%,#0C3337)] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-310">
          <nav aria-label="ERP page navigation" className="mb-12 flex min-h-11 items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 sm:mb-16 sm:px-5">
            <Link to="/solution/erp-software" className="flex shrink-0 items-center gap-2 font-bold text-white"><span className="grid size-6 place-items-center rounded-md bg-nigma-teal text-nigma-ink"><Boxes size={14}/></span><span>ERPNext <span className="font-normal text-white/45">by Nigmatech</span></span></Link>
            <div className="hidden items-center gap-5 md:flex"><a href="#industries" className="hover:text-white">Industries</a><a href="#capabilities" className="hover:text-white">Capabilities</a><a href="#implementation" className="hover:text-white">Implementation</a><a href="#faq" className="hover:text-white">FAQ</a></div>
            <Button render={<Link to="/contact" />} className="h-auto min-h-10 rounded-full bg-nigma-teal px-4 py-2.5 font-bold text-nigma-ink hover:bg-nigma-teal-light">Book a demo</Button>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-10">
            <div className="max-w-xl">
              <Badge variant="outline" className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/75"><span className="size-1.5 rounded-full bg-nigma-teal-light"/>ERPNext implementation</Badge>
              <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">ERP your teams will actually use.</h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/65 sm:text-lg">A practical ERPNext setup for the way your business works. Connect your teams, get a clearer view of operations and build a system that can grow with you.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Button render={<Link to="/contact" />} className="h-auto min-h-11 rounded-full bg-nigma-teal px-5 text-sm font-bold text-nigma-ink hover:bg-nigma-teal-light">Talk to our team <ArrowRight size={16}/></Button><Button render={<a href="#implementation" />} variant="outline" className="h-auto min-h-11 rounded-full border-white/20 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white">See how it works</Button></div>
              <p className="mt-5 text-xs text-white/45">ERPNext implementation, migration and ongoing support.</p>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      <div id="industries" className="border-b border-nigma-grey-light bg-white px-4 py-4 sm:px-6"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 sm:gap-3"><span className="mr-1 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">ERPNext for</span>{industries.map((name) => <a key={name} href="#industry-cards" className="rounded-full border border-nigma-grey-light px-3 py-2 text-[11px] font-medium text-muted-foreground transition hover:border-nigma-teal hover:text-nigma-teal-dark">{name}</a>)}</div></div>

      <section id="industry-cards" className="px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><div className="mb-9 flex flex-col justify-between gap-4 sm:mb-11 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">Built around your work</p><h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">ERP that fits the industry</h2></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Start with proven ERPNext workflows, then configure the details around your teams and operations.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{industryCards.map(({icon: Icon, title, copy, tags}, index) => <Card role="article" key={title} className="group overflow-hidden rounded-2xl border border-white bg-white p-0 ring-0 shadow-[0_10px_28px_rgba(5,10,11,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(5,10,11,0.12)]"><div className="relative flex h-36 items-end overflow-hidden bg-[radial-gradient(ellipse_at_70%_25%,rgba(111,202,212,0.42),transparent_45%),linear-gradient(145deg,#167380,#0C2729_72%,#050A0B)] p-5"><div className="absolute -right-5 -top-10 size-36 rounded-full border border-white/10"/><div className="absolute -right-1 -top-2 size-24 rounded-full border border-white/10"/><div className="absolute right-8 top-7 grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/[0.08] text-nigma-teal-light"><Icon size={26}/></div><span className="relative rounded-full border border-white/15 bg-black/15 px-2.5 py-1 text-[10px] font-medium text-white/70">ERPNext · {String(index+1).padStart(2,"0")}</span></div><div className="p-5"><h3 className="font-heading text-lg font-semibold">{title}</h3><p className="mt-2 min-h-[60px] text-sm leading-6 text-muted-foreground">{copy}</p><div className="mt-4 flex flex-wrap gap-2">{tags.map(tag => <Badge key={tag} variant="secondary" className="h-auto rounded-full px-2.5 py-1 text-[10px] font-medium">{tag}</Badge>)}</div><a href="#capabilities" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-nigma-teal-dark">Explore capabilities <ArrowRight size={14}/></a></div></Card>)}</div>
        </div></section>

      <section id="capabilities" className="px-4 pb-16 pt-5 sm:px-6 sm:pb-20"><div className="mx-auto max-w-7xl"><div className="mb-9 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">Connected work</p><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">One system for the whole business</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Bring core workflows together in one ERPNext environment, with information flowing between the teams who need it.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{modules.map(([Icon,title,copy],i) => <Card role="article" key={title} className="rounded-xl border border-white bg-white/80 p-5 shadow-[0_6px_20px_rgba(5,10,11,0.04)]"><span className="grid size-9 place-items-center rounded-lg bg-nigma-teal-pale text-nigma-teal-dark"><Icon size={18}/></span><p className="mt-4 text-[10px] font-bold tracking-[.12em] text-nigma-teal-dark">0{i+1}</p><h3 className="mt-1 font-heading text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p></Card>)}</div></div></section>

      <section className="px-4 py-8 sm:px-6 sm:py-12"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_32px_rgba(5,10,11,0.07)] md:grid-cols-[1.1fr_.9fr]"><div className="flex flex-col justify-center p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">A system people can trust</p><blockquote className="mt-4 font-heading text-xl font-semibold leading-relaxed sm:text-2xl">“ERP works best when it reflects how people actually do the work. We make the process clear, involve your team and build confidence at every step.”</blockquote><div className="mt-6 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-nigma-teal-pale text-nigma-teal-dark"><UsersRound size={18}/></span><div><p className="text-sm font-bold">Nigmatech implementation team</p><p className="text-xs text-muted-foreground">ERPNext delivery & advisory</p></div></div></div><div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_25%,rgba(111,202,212,0.42),transparent_45%),linear-gradient(145deg,#167380,#0C2729_72%,#050A0B)] p-8 text-white"><div className="absolute -right-8 -top-14 size-64 rounded-full border border-white/10"/><div className="absolute -right-1 -top-7 size-48 rounded-full border border-white/10"/><div className="relative max-w-xs"><span className="grid size-11 place-items-center rounded-xl bg-nigma-teal text-nigma-ink"><ArrowDownRight/></span><p className="mt-6 font-heading text-2xl font-semibold">Make the system work for your people.</p><p className="mt-2 text-sm leading-6 text-white/60">Clear workflows. Useful information. Teams moving together.</p></div></div></div></section>

      <section id="implementation" className="px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><div className="mb-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">Thoughtful delivery</p><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Implementation done properly</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{practices.map(([Icon,title,copy]) => <Card role="article" key={title} className="flex gap-4 rounded-xl border border-white bg-white/75 p-5"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-nigma-teal-pale text-nigma-teal-dark"><Icon size={18}/></span><div><h3 className="font-heading text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p></div></Card>)}</div></div></section>

      <section className="bg-[radial-gradient(ellipse_at_85%_25%,rgba(22,115,128,0.38),transparent_48%),linear-gradient(116deg,#050A0B,#0C1415_60%,#0C3337)] px-4 py-16 text-white sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-light">Made for the real world</p><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">Connected to the tools and rules you deal with</h2><p className="mt-3 text-sm leading-6 text-white/60">Your ERP should fit into your operating environment. We help plan the right connections and local workflows for your business.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{connections.map(([Icon,title,copy]) => <Card role="article" key={title} className="rounded-xl border border-white/10 bg-white/[.045] p-5"><span className="grid size-9 place-items-center rounded-lg bg-nigma-teal/15 text-nigma-teal-light"><Icon size={18}/></span><h3 className="mt-4 font-heading text-sm font-semibold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-white/55">{copy}</p></Card>)}</div></div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">A clear path</p><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">A clear path from first call to go-live, and beyond</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number,title,copy]) => <Card role="article" key={number} className="relative rounded-xl border border-white bg-white/75 p-5"><span className="font-heading text-3xl font-semibold text-nigma-teal/50">{number}</span><h3 className="mt-4 font-heading text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></Card>)}</div></div></section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20"><div className="mx-auto max-w-7xl"><div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">Beyond configuration</p><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">When off-the-shelf doesn't fit</h2></div><p className="max-w-md text-sm leading-6 text-muted-foreground">Extend your ERP thoughtfully where your process calls for something specific.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{customWork.map(([title,copy],i) => <Card role="article" key={title} className="rounded-xl border border-white bg-white/75 p-5"><span className="grid size-8 place-items-center rounded-lg bg-nigma-teal-pale text-xs font-bold text-nigma-teal-dark">0{i+1}</span><h3 className="mt-4 font-heading text-sm font-semibold">{title}</h3><p className="mt-2 min-h-12 text-xs leading-5 text-muted-foreground">{copy}</p><div className="mt-4 flex flex-wrap gap-1.5"><Badge variant="secondary" className="h-auto rounded-full px-2 py-1 text-[9px]">ERPNext</Badge><Badge variant="secondary" className="h-auto rounded-full px-2 py-1 text-[9px]">Fit for purpose</Badge></div></Card>)}</div></div></section>

      <section id="faq" className="px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-3xl"><div className="mb-8 text-center"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-dark">FAQ</p><h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight">ERP questions</h2></div><Accordion defaultValue={["erp-faq-0"]} className="gap-2">{faqs.map(([question,answer],i) => <AccordionItem key={question} value={`erp-faq-${i}`} className="rounded-xl border border-white bg-white/80 px-5 shadow-[0_6px_18px_rgba(5,10,11,0.04)]"><AccordionTrigger className="min-h-14 items-center py-0 text-sm font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-5 pr-6 text-sm leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20"><div className="mx-auto max-w-7xl rounded-2xl bg-[radial-gradient(ellipse_at_80%_45%,rgba(22,115,128,0.48),transparent_58%),linear-gradient(116deg,#050A0B,#0C1415_58%,#0C3337)] px-6 py-12 text-center text-white sm:px-10 sm:py-14"><p className="text-xs font-bold uppercase tracking-[.18em] text-nigma-teal-light">Start with a conversation</p><h2 className="mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl">Let's map your processes</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/60">Tell us what your teams need. We’ll help you work out whether ERPNext is the right fit and what a practical first step looks like.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Button render={<Link to="/contact" />} className="h-auto min-h-11 gap-2 rounded-full bg-nigma-teal px-5 text-sm font-bold text-nigma-ink hover:bg-nigma-teal-light">Book a demo <ArrowRight size={15}/></Button><Button render={<Link to="/contact" />} variant="outline" className="h-auto min-h-11 rounded-full border-white/20 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white">Contact us</Button></div></div></section>
    </main>
  );
}

export default ERPSoftware;
