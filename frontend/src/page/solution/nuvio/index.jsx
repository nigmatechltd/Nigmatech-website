import { Fragment, useState } from "react";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Utensils,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import Footer from "@/components/layout/Footer";

const plans = [
  {
    name: "Starter",
    description: "For a single kitchen getting online",
    price: "₦XX,XXX",
    features: [
      "Online storefront",
      "Paystack checkout",
      "Food stock and closing times",
      "Order and invoice emails",
      "Customer order history",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For kitchens selling on every channel",
    price: "₦XX,XXX",
    popular: true,
    features: [
      "Everything in Starter",
      "WhatsApp ordering",
      "Meal plan subscriptions",
      "Home orders and catering bookings",
      "Delivery areas and dispatch",
      "Split settlement by channel",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For multi-brand groups",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Multiple brands and kitchens",
      "Paystack and Flutterwave",
      "Operations and custom reports",
      "Integrations with your systems",
      "Dedicated success manager and SLA",
    ],
  },
];

const comparison = [
  {
    group: "Ordering",
    rows: [
      ["Takeaway storefront", true, true, true],
      ["Home orders (bulk size)", false, true, true],
      ["Buffet and catering bookings", false, true, true],
      ["WhatsApp ordering", false, true, true],
    ],
  },
  {
    group: "Payments",
    rows: [
      ["Paystack", true, true, true],
      ["Flutterwave", false, false, true],
      ["Split settlement by channel", false, true, true],
      ["Refund tracking", false, true, true],
    ],
  },
  {
    group: "Operations",
    rows: [
      ["Food stock and closing times", true, true, true],
      ["Meal plan subscriptions", false, true, true],
      ["Delivery areas and dispatch", false, true, true],
      ["Meal plan operations dashboard", false, true, true],
    ],
  },
  {
    group: "Accounting and support",
    rows: [
      ["Built-in back office and accounting", true, true, true],
      ["Automatic backups", true, true, true],
      ["Brands / kitchens", "1", "Multiple", "Unlimited"],
      ["Support", "Email", "Priority", "Dedicated + SLA"],
    ],
  },
];

const addOns = [
  {
    title: "Onboarding and menu setup",
    description:
      "Menu, pricing, delivery areas and payment setup to help your team start taking orders.",
    price: "Contact us for pricing",
  },
  {
    title: "Extra brand or kitchen",
    description:
      "Add another brand or kitchen with its own menu, orders and reporting.",
    price: "Contact us for pricing",
  },
  {
    title: "Custom integration",
    description:
      "Connect Nuvio to delivery partners, loyalty tools or other software.",
    price: "Quoted per project",
  },
];

const questions = [
  [
    "Is there a setup fee?",
    "Onboarding and menu setup are available as an add-on. Contact us to discuss what your kitchen needs.",
  ],
  [
    "Are payment gateway fees included?",
    "Payment provider fees depend on your selected payment provider. Contact us to discuss your setup.",
  ],
  [
    "Can I change plans later?",
    "Contact our team to discuss plan options as your kitchen and ordering needs change.",
  ],
  [
    "Do you offer annual billing?",
    "Contact our team to discuss annual billing options.",
  ],
];

function Included({ value }) {
  if (typeof value === "string")
    return <span className="nuvio-value">{value}</span>;
  return value ? (
    <Check aria-label="Included" className="nuvio-check" />
  ) : (
    <span aria-label="Not included" className="nuvio-dash">
      —
    </span>
  );
}

function Nuvio() {
  const [billing, setBilling] = useState("Monthly");

  return (
    <div className="nuvio-page">
      <style>{`
        .nuvio-page{margin-top:-5rem;overflow:hidden;background:#f3f4f1;color:#050a0b;font-family:'DM Sans Variable',sans-serif}
        .nuvio-page *{box-sizing:border-box}
        .nuvio-page h1,.nuvio-page h2,.nuvio-page h3{font-family:'Manrope Variable',sans-serif}
        .nuvio-page a{text-decoration:none}
        .nuvio-container{width:min(1120px,calc(100%));margin:0 auto}
        .nuvio-hero{padding:112px 24px 60px;background:radial-gradient(ellipse at 78% 50%,rgba(37,161,176,.22),transparent 45%),linear-gradient(112deg,#050a0b,#0b282a 68%,#104146);color:#fff}
        .nuvio-subnav{min-height:44px;margin:0 auto 64px;padding:5px 16px;display:flex;align-items:center;justify-content:space-between;gap:16px;border:1px solid rgba(255,255,255,.12);border-radius:999px;background:rgba(255,255,255,.05);font-size:12px;color:rgba(255,255,255,.7)}
        .nuvio-brand{display:flex;align-items:center;gap:8px;color:white;font-weight:700}.nuvio-mark{width:24px;height:24px;display:grid;place-items:center;border-radius:7px;background:#25a1b0;color:#050a0b}.nuvio-mark svg{width:14px}.nuvio-brand small{font-weight:400;color:rgba(255,255,255,.45)}
        .nuvio-links{display:flex;gap:22px}.nuvio-links a{color:inherit}.nuvio-links a[aria-current=page]{color:white;font-weight:700}
        .nuvio-demo{min-height:44px;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#25a1b0;color:#050a0b;font-size:12px;font-weight:700}
        .nuvio-intro{max-width:700px;margin:0 auto;text-align:center}.nuvio-eyebrow{display:inline-flex;align-items:center;gap:7px;padding:6px 11px;border:1px solid rgba(255,255,255,.13);border-radius:999px;background:rgba(255,255,255,.06);font-size:12px;color:rgba(255,255,255,.8)}.nuvio-dot{width:7px;height:7px;border-radius:50%;background:#6fcad4}
        .nuvio-intro h1{max-width:660px;margin:22px auto 0;font-size:clamp(38px,5vw,60px);line-height:1.06;letter-spacing:-.04em;color:#fff}.nuvio-intro>p{max-width:560px;margin:20px auto 0;font-size:18px;line-height:1.7;color:rgba(255,255,255,.65)}
        .nuvio-billing{display:inline-flex;margin-top:24px;padding:4px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:rgba(255,255,255,.06)}.nuvio-billing button{min-height:44px;padding:0 17px;border:0;border-radius:999px;background:transparent;color:rgba(255,255,255,.75);font:600 14px 'DM Sans Variable',sans-serif;cursor:pointer}.nuvio-billing button[aria-pressed=true]{background:#fff;color:#050a0b}
        .nuvio-section{padding:68px 24px}.nuvio-section-heading{margin:0 0 28px;text-align:center}.nuvio-left-heading{text-align:left}.nuvio-section-heading p{margin:0;color:#167380;font-size:30px;font-weight:700}.nuvio-section-heading h2{margin:8px 0 0;font-size:clamp(28px,3vw,38px);line-height:1.2}
        .nuvio-plans{padding-top:38px}.nuvio-plan-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:stretch;gap:16px}.nuvio-plan{position:relative;padding:26px 24px;border:1px solid rgba(255,255,255,.9);border-radius:18px;background:rgba(255,255,255,.72);box-shadow:0 12px 30px rgba(5,10,11,.07)}.nuvio-plan h2{margin:0;font-size:20px}.nuvio-plan .nuvio-summary{min-height:38px;margin:5px 0 0;color:#596667;font-size:16px;line-height:1.5}.nuvio-price{margin:18px 0 14px;font-family:'Manrope Variable',sans-serif;font-size:32px;font-weight:700;line-height:1.1}.nuvio-price small{font:400 12px 'DM Sans Variable',sans-serif;color:#596667}.nuvio-plan-action{min-height:44px;width:100%;display:flex;align-items:center;justify-content:center;border-radius:999px;background:white;color:#050a0b;font-size:14px;font-weight:700;box-shadow:0 4px 12px rgba(5,10,11,.08)}.nuvio-plan ul{padding:0;margin:20px 0 0;list-style:none}.nuvio-plan li{display:flex;align-items:flex-start;gap:9px;margin:10px 0;color:#596667;font-size:13px;line-height:1.45}.nuvio-check{width:16px;height:16px;flex:none;color:#25a1b0}.nuvio-popular{border-color:#214346;background:#071719;color:white;transform:translateY(-8px)}.nuvio-popular .nuvio-summary,.nuvio-popular li{color:rgba(255,255,255,.72)}.nuvio-popular .nuvio-price small{color:rgba(255,255,255,.55)}.nuvio-popular .nuvio-plan-action{background:#25a1b0}.nuvio-popular-label{position:absolute;right:14px;top:14px;padding:5px 9px;border:1px solid rgba(255,255,255,.12);border-radius:999px;background:rgba(255,255,255,.08);font-size:10px;color:rgba(255,255,255,.78)}.nuvio-price-note{margin:18px auto 0;text-align:center;color:#596667;font-size:17px}
        .nuvio-table-wrap{overflow:auto;border:1px solid rgba(255,255,255,.9);border-radius:16px;background:rgba(255,255,255,.74);box-shadow:0 12px 30px rgba(5,10,11,.05)}.nuvio-table{width:100%;border-collapse:collapse;font-size:13px}.nuvio-table th,.nuvio-table td{padding:12px 16px;border-bottom:1px solid #e0e7e7}.nuvio-table thead th{font-family:'Manrope Variable',sans-serif;font-size:14px}.nuvio-table thead th:not(:first-child),.nuvio-table td{text-align:center}.nuvio-table tbody th{text-align:left;font-weight:500;color:#596667}.nuvio-table .nuvio-group th{background:#f5f7f5;color:#167380;font-size:17px;font-weight:700;text-align:left}.nuvio-value{font-size:12px;font-weight:600}.nuvio-dash{color:#9aa8a9}.nuvio-table td .nuvio-check,.nuvio-mobile-row .nuvio-check{display:block;margin-inline:auto}
        .nuvio-addons{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.nuvio-addon{padding:22px;border:1px solid rgba(255,255,255,.9);border-radius:16px;background:rgba(255,255,255,.7);box-shadow:0 10px 26px rgba(5,10,11,.05)}.nuvio-addon-icon{width:50px;height:50px;display:grid;place-items:center;border-radius:10px;background:#dceff1;color:#167380}.nuvio-addon-icon svg{width:17px}.nuvio-addon h3{margin:16px 0 7px;font-size:20px}.nuvio-addon p{min-height:58px;margin:0;color:#596667;font-size:15px;line-height:1.55}.nuvio-addon strong{display:block;margin-top:14px;color:#167380;font-size:15px}
        .nuvio-faq-section{background:radial-gradient(ellipse at 50% 50%,rgba(191,227,231,.34),transparent 62%)}.nuvio-faq{max-width:720px;margin:0 auto}.nuvio-faq details{margin:9px 0;padding:0 18px;border:1px solid rgba(255,255,255,.95);border-radius:13px;background:rgba(255,255,255,.78);box-shadow:0 7px 20px rgba(5,10,11,.045)}.nuvio-faq summary{min-height:48px;display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;list-style:none;font-size:14px;font-weight:700}.nuvio-faq summary::-webkit-details-marker{display:none}.nuvio-faq summary svg{width:16px;color:#25a1b0;transition:transform .2s}.nuvio-faq details[open] summary svg{transform:rotate(180deg)}.nuvio-faq details p{margin:0;padding:0 0 16px;color:#596667;font-size:13px;line-height:1.6}
        .nuvio-cta{padding-top:8px}.nuvio-cta-panel{padding:52px 24px;border-radius:20px;background:radial-gradient(ellipse at 80% 50%,rgba(37,161,176,.28),transparent 55%),linear-gradient(112deg,#050a0b,#0b282a 72%,#104146);color:#fff;text-align:center}.nuvio-cta-panel h2{margin:0;font-size:34px}.nuvio-cta-panel p{margin:12px auto 0;color:rgba(255,255,255,.65);font-size:15px;line-height:1.6}.nuvio-cta-actions{display:flex;justify-content:center;gap:10px;margin-top:22px}.nuvio-cta-actions a{min-height:44px;padding:0 17px;display:inline-flex;align-items:center;justify-content:center;gap:7px;border-radius:999px;background:#25a1b0;color:#050a0b;font-size:13px;font-weight:700}.nuvio-cta-actions a+a{border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.06);color:#fff}.nuvio-mobile-compare{display:none}
        @media(max-width:899px){.nuvio-plan-grid{grid-template-columns:1fr;max-width:600px;margin:0 auto}.nuvio-popular{transform:none;order:-1}.nuvio-plan .nuvio-summary{min-height:0}.nuvio-addons{grid-template-columns:1fr;max-width:680px;margin:0 auto}}
        @media(max-width:767px){.nuvio-container{width:calc(100% - 0px)}.nuvio-hero{padding:100px 16px 50px}.nuvio-subnav{margin-bottom:46px;padding:5px 10px}.nuvio-links{display:none}.nuvio-brand small{display:none}.nuvio-section{padding:48px 16px}.nuvio-section-heading{margin-bottom:22px}.nuvio-plan{padding:22px}.nuvio-plan-grid{gap:12px}.nuvio-table-wrap{display:none}.nuvio-mobile-compare{display:grid;gap:9px}.nuvio-mobile-compare details{padding:0 15px;border:1px solid rgba(255,255,255,.95);border-radius:12px;background:rgba(255,255,255,.8)}.nuvio-mobile-compare summary{min-height:46px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;list-style:none;font-size:14px;font-weight:700}.nuvio-mobile-compare summary::-webkit-details-marker{display:none}.nuvio-mobile-compare summary svg{width:16px;color:#25a1b0}.nuvio-mobile-head,.nuvio-mobile-row{display:grid;grid-template-columns:minmax(0,1fr) repeat(3,auto);align-items:center;gap:8px;padding:8px 0;border-top:1px solid #e0e7e7;font-size:11px}.nuvio-mobile-head{color:#596667;font-weight:700}.nuvio-mobile-row>span:first-child{color:#596667}.nuvio-mobile-row>span:not(:first-child){min-width:26px;text-align:center}.nuvio-addon p{min-height:0}.nuvio-cta-panel{padding:38px 19px}.nuvio-cta-panel h2{font-size:27px}.nuvio-cta-actions{flex-wrap:wrap}}
        .nuvio-hero .nuvio-container{width:min(1240px,calc(100% - 16px))}
        @media(max-width:767px){.nuvio-hero .nuvio-container{width:100%}}
      `}</style>

      <section className="nuvio-hero">
        <div className="nuvio-container">
           <nav
            aria-label="ERP page navigation"
            className="mb-12 flex min-h-11 text-[16px] items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70 sm:mb-16 sm:px-5"
          >
            <Link
              to="/solution/erp-software"
              className="flex shrink-0 items-center text-[16px] gap-2 font-bold text-white "
            >
              <span className="grid size-6 place-items-center rounded-md bg-nigma-teal text-nigma-ink">
                <Utensils size={14} />
              </span>
              <span>
                ERP{" "}
                <span className="font-normal  text-white/45">by Nigmatech</span>
              </span>
            </Link>
            <div className="hidden items-center gap-5 md:flex">
              <a href="#industries" className="hover:text-white">
                Industries
              </a>
              <a href="#capabilities" className="hover:text-white">
                Capabilities
              </a>
              <a href="#implementation" className="hover:text-white">
                Implementation
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </div>
            <Button
              render={<Link to="/contact" />}
              className="h-auto min-h-10 rounded-full text-[16px]  bg-nigma-teal px-4 py-2.5 font-bold text-nigma-ink hover:bg-nigma-teal-light"
            >
              Book a demo
            </Button>
          </nav>
          <div id="overview" className="nuvio-intro">
            <Badge variant="outline" className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.06] px-4 py-2 text-md text-white/75">
              <span className="nuvio-dot" />
              Nuvio pricing
            </Badge>
            <h1>Simple pricing that grows with your kitchen</h1>
            <p className="text-[18px]">
              Start with online ordering and add WhatsApp, meal plans and more
              as your kitchen grows. No per-order commission.
            </p>
            <div
              className="nuvio-billing"
              role="group"
              aria-label="Billing frequency"
            >
              {["Monthly", "Annual"].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => setBilling(period)}
                  aria-pressed={billing === period}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="nuvio-section nuvio-plans">
        <div className="nuvio-container">
          <div className="nuvio-plan-grid">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                role="article"
                className={`nuvio-plan gap-0${plan.popular ? " nuvio-popular" : ""}`}
              >
                {plan.popular && (
                  <Badge variant="outline" className="nuvio-popular-label h-auto">{"\u2605 Most popular"}</Badge>
                )}
                <h2 className="text-2xl">{plan.name}</h2>
                <p className="nuvio-summary">{plan.description}</p>
                <p className="nuvio-price">
                  {plan.price}
                  {plan.price !== "Custom" && <small> / month</small>}
                </p>
                <Button render={<Link to="/contact" />} className="nuvio-plan-action h-auto px-4 py-0">
                  {plan.name === "Scale" ? "Talk to sales" : "Book a demo"}
                </Button>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" className="nuvio-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="nuvio-price-note">
            Contact us for current plan pricing and billing options.
          </p>
        </div>
      </section>

      <section id="features" className="nuvio-section">
        <div className="nuvio-container">
          <header className="nuvio-section-heading">
            <p className="text-xl">Compare</p>
            <h2>Every plan, side by side</h2>
          </header>
          <div className="nuvio-table-wrap">
            <Table className="nuvio-table table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[52%]">Compare plans</TableHead>
                  {plans.map((plan) => (
                    <TableHead className="w-[16%]" key={plan.name}>{plan.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison.map(({ group, rows }) => (
                  <Fragment key={group}>
                    <TableRow className="nuvio-group">
                      <TableHead colSpan="4">{group}</TableHead>
                    </TableRow>
                    {rows.map(([feature, ...values]) => (
                      <TableRow key={feature}>
                        <TableHead scope="row">{feature}</TableHead>
                        {values.map((value, index) => (
                          <TableCell key={`${feature}-${index}`}>
                            <Included value={value} />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
          <Accordion className="nuvio-mobile-compare">
            {comparison.map(({ group, rows }) => (
              <AccordionItem key={group} value={`compare-${group}`} className="rounded-xl border border-white/95 bg-white/80 px-4">
                <AccordionTrigger className="min-h-11 items-center py-0 text-sm font-bold hover:no-underline">
                  {group}
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <div className="nuvio-mobile-head">
                    <span>Feature</span>
                    {plans.map((plan) => (
                      <span key={plan.name}>{plan.name}</span>
                    ))}
                  </div>
                  {rows.map(([feature, ...values]) => (
                    <div className="nuvio-mobile-row" key={feature}>
                      <span>{feature}</span>
                      {values.map((value, index) => (
                        <span key={`${feature}-${index}`}>
                          <Included value={value} />
                        </span>
                      ))}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="nuvio-section">
        <div className="nuvio-container">
          <header className="nuvio-section-heading nuvio-left-heading">
            <p>Add-ons</p>
            <h2>Extras when you need them</h2>
          </header>
          <div className="nuvio-addons">
            {addOns.map((item) => (
              <Card className="nuvio-addon gap-0" key={item.title}>
                <span className="nuvio-addon-icon">
                  <CircleHelp aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>{item.price}</strong>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="nuvio-section nuvio-faq-section">
        <div className="nuvio-faq">
          <header className="nuvio-section-heading">
            <p>FAQ</p>
            <h2>Pricing questions</h2>
          </header>
          <Accordion className="nuvio-faq-list" defaultValue={["nuvio-faq-0"]}>
            {questions.map(([question, answer], index) => (
              <AccordionItem
                key={question}
                value={`nuvio-faq-${index}`}
                className="my-2 rounded-[13px] border border-white/95 bg-white/[0.78] px-[18px] shadow-[0_7px_20px_rgba(5,10,11,0.045)]"
              >
                <AccordionTrigger className="min-h-12 items-center py-0 text-md font-bold hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[14px] leading-[1.6] text-[#596667]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="nuvio-section nuvio-cta">
        <div className="nuvio-container">
          <div className="nuvio-cta-panel">
            <h2>Not sure which plan fits?</h2>
            <p>
              Tell us about your kitchen and we will recommend the right setup.
            </p>
            <div className="nuvio-cta-actions">
              <Button render={<Link to="/contact" />} className="h-auto min-h-11 rounded-full bg-[#25a1b0] px-[17px] text-[13px] font-bold text-[#050a0b] hover:bg-[#6fcad4]">
                Book a demo <ArrowRight aria-hidden="true" />
              </Button>
              <Button render={<Link to="/contact" />} variant="outline" className="h-auto min-h-11 rounded-full border-white/25 bg-white/[0.06] px-[17px] text-[13px] font-semibold text-white hover:bg-white/15 hover:text-white">
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Nuvio;
