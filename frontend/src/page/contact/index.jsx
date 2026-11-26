import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Layers,
  Database,
  Cpu,
  HelpCircle,
  Code,
  Settings,
  Sparkle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";

const interests = [
  {label :"ERP implementation", icon: Layers}, 
  {label :"Custom software", icon: Code}, 
  {label :"Support & optimization", icon: Settings}, 
  
  {label :"Something else", icon: Sparkle}];

const inputClass =
  "mt-1.5 h-10 w-full rounded-lg border border-border bg-white px-3 text-md text-nigma-ink placeholder:text-muted-foreground/70 outline-none transition focus:border-nigma-teal focus:ring-2 focus:ring-nigma-teal/20";
const labelClass = "block text-[16px] font-semibold text-nigma-ink";

function Contact() {
  const [interest, setInterest] = useState("Nuvio");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function getEmailError(input) {
    if (!input.value.trim()) return "Work email is required.";
    return input.validity.valid ? "" : "Enter a valid email address.";
  }

  function handleEmailChange(event) {
    setEmail(event.currentTarget.value);
    if (emailError) setEmailError(getEmailError(event.currentTarget));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="-mt-20 overflow-hidden bg-muted text-nigma-ink">
      <section className="relative isolate overflow-hidden bg-nigma-ink bg-linear-to-br from-nigma-ink via-nigma-dark to-nigma-teal-dark pb-16 pt-36 text-white sm:pb-20 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 z-0 size-[30rem] translate-x-1/4 rounded-full bg-nigma-teal/25 blur-3xl"
        />
        <div className="relative z-10 mx-auto grid w-[min(1220px,calc(100%-40px))] items-center gap-10 sm:w-[min(1220px,calc(100%-64px))] sm:grid-cols-2 sm:gap-8 xl:gap-16">
          <div className="pt-1 lg:pt-0">
            <Badge
              variant="outline"
              className="h-auto gap-2 rounded-full border-white/15 bg-white/[0.06] px-4 py-2 text-md text-white/75"
            >
              <span className="size-1.5 rounded-full bg-nigma-teal-light" />
              Book a consultation
            </Badge>
            <h1 className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-5xl">
              Let&apos;s talk about your business
            </h1>
            <p className="mt-5 max-w-lg text-[16px] leading-6 text-white/60 sm:text-base sm:leading-7">
              Tell us a little about what you need. We&apos;ll get back to you
              within one business day to book a call.
            </p>

            <div className="mt-6">
              <p className="text-[22px] font-bold text-nigma-teal-light">
                What to expect
              </p>
              <ul className="mt-3 space-y-2.5 text-[16px] text-white/75">
                {[
                  "A 30-minute call with a product or ERP lead",
                  "A walkthrough using your menus or processes",
                  "A clear proposal, with no obligation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-nigma-teal-light">
                      <Check
                        aria-hidden="true"
                        className="size-2.5"
                        strokeWidth={3}
                      />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <address className="mt-6 grid max-w-md gap-3 rounded-2xl border border-white/10 bg-white/[0.065] p-4 not-italic backdrop-blur-sm sm:p-5">
              <a
                href="mailto:info@nigmatech.net"
                className="group flex items-center gap-3 text-md text-white/85 hover:text-white"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nigma-teal-light/15 bg-nigma-teal/10 text-nigma-teal-light">
                  <Mail aria-hidden="true" className="size-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="block text-[14px] leading-4 text-white/50">
                    Email
                  </span>
                  <span className="block leading-5">info@nigmatech.net</span>
                </span>
              </a>
              <div className="flex items-center gap-3 text-md text-white/85">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nigma-teal-light/15 bg-nigma-teal/10 text-nigma-teal-light">
                  <Phone aria-hidden="true" className="size-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="block text-[14px] leading-4 text-white/50">
                    Phone / WhatsApp
                  </span>
                  <span className="block leading-5">+234 906 8022 673</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-md text-white/85">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-nigma-teal-light/15 bg-nigma-teal/10 text-nigma-teal-light">
                  <MapPin aria-hidden="true" className="size-4" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="block text-[14px] leading-4 text-white/50">
                    Office
                  </span>
                  <span className="block leading-5">Lagos, Nigeria</span>
                </span>
              </div>
            </address>
          </div>

          <Card className="w-full rounded-3xl border-0 bg-white p-0 text-nigma-ink ring-0 shadow-2xl shadow-black/20">
            <form onSubmit={handleSubmit} className="w-full p-5 sm:p-6 lg:p-7">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Tell us about your project
              </h2>
              <div className="mt-5 grid gap-x-3.5 gap-y-3 sm:grid-cols-2">
                <label className={`${labelClass} space-y-1`}>
                  Full name
                  <Input
                    autoComplete="name"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="Ada Okafor"
                  />
                </label>
                <label className={`${labelClass} space-y-1`}>
                  Work email
                  <Input
                    autoComplete="email"
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={(event) => setEmailError(getEmailError(event.currentTarget))}
                    onInvalid={(event) => setEmailError(getEmailError(event.currentTarget))}
                    aria-invalid={emailError ? "true" : undefined}
                    aria-describedby={emailError ? "work-email-error" : undefined}
                    className={`${inputClass} ${emailError ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                    placeholder="ada@company.com"
                  />
                  {emailError && (
                    <span id="work-email-error" role="alert" className="text-[11px] leading-4 text-destructive">
                      {emailError}
                    </span>
                  )}
                </label>
                <label className={`${labelClass} space-y-1`}>
                  Phone / WhatsApp
                  <Input
                    autoComplete="tel"
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="+234 801 234 5678"
                  />
                </label>
                <label className={`${labelClass} space-y-1`}>
                  Company
                  <Input
                    autoComplete="organization"
                    name="company"
                    className={inputClass}
                    placeholder="Company name"
                  />
                </label>
              </div>

              <fieldset className="mt-4">
                <legend className={labelClass}>I&apos;m interested in</legend>
                <div className="mt-2 grid md:grid-cols-2 grid-cols-1 w-[430px] gap-3">
                  {interests.map(({ label, icon: Icon }) => (
                    <Button
                      key={label}
                      variant="outline"
                      className={`h-auto min-h-10 rounded-full flex items-center w-[210px] gap-2 justify-content px-3 text-md font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal ${interest === label ? "border-nigma-teal bg-nigma-teal-pale text-nigma-teal-dark" : "border-transparent bg-muted text-muted-foreground hover:border-border hover:bg-muted hover:text-nigma-ink"}`}
                      type="button"
                      aria-pressed={interest === label}
                      onClick={() => setInterest(label)}
                    >
                      {/* icon and label in flex */}
                      {Icon && (
                        <span className="text-md">
                          <Icon aria-hidden="true" size={16} />
                        </span>
                      )}
                      <span className="text-md">{label}</span>
                    </Button>
                  ))}
                </div>
              </fieldset>

              <label className={`${labelClass} mt-4 block`}>
                Business size
                <Select name="businessSize" defaultValue={null}>
                  <SelectTrigger
                    className={`${inputClass} mt-1.5 h-10 appearance-none`}
                  >
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

              <label className={`${labelClass} mt-4 block`}>
                How can we help?
                <Textarea
                  name="message"
                  required={true}
                  rows="3"
                  className="mt-1.5 min-h-24 w-full resize-y rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-nigma-ink placeholder:text-muted-foreground/70 outline-none transition focus:border-nigma-teal focus:ring-2 focus:ring-nigma-teal/20"
                  placeholder="Tell us about your current systems and what you'd like to improve..."
                />
              </label>
              <input type="hidden" name="interest" value={interest} />

              <Button
                type="submit"
                className="mt-4 h-auto cursor-pointer min-h-11 w-full rounded-full bg-nigma-teal px-5 text-sm font-bold text-nigma-ink shadow-md shadow-nigma-ink/10 hover:bg-nigma-teal-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-nigma-teal-dark"
              >
                Request a call
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              {submitted ? (
                <p
                  role="status"
                  className="mt-3 rounded-lg bg-nigma-teal-pale px-3 py-2 text-xs leading-5 text-nigma-teal-dark"
                >
                  Your details are ready. This form is not connected to a
                  booking service yet, so your request has not been sent. Please
                  email info@nigmatech.net to reach us.
                </p>
              ) : (
                <p className="mt-3 text-[15px] leading-4 text-muted-foreground">
                  We&apos;ll only use your details to reply to this enquiry.
                </p>
              )}
            </form>
          </Card>
        </div>
      </section>

    </div>
  );
}

export default Contact;
