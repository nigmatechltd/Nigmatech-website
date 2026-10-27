import { Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Nigmatech_logo.jpeg'

const footerLinkClass =
  'w-fit text-md leading-5 text-white/60 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nigma-teal'

const footerSections = [
  {
    title: 'Solutions',
    links: [
      { label: 'Nuvio pricing', to: '/solution/nuvio' },
      { label: 'Nuvio', to: '/solution/nuvio' },
      { label: 'ERP Software', to: '/solution/erp-software' },
      { label: 'Custom software', to: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Case studies', to: '/case-study' },
      { label: 'Careers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help center' },
      { label: 'Book a demo', to: '/contact' },
      { label: 'Privacy policy' },
      { label: 'Terms of service' },
    ],
  },
]

const socialItems = [
  { label: 'LinkedIn', mark: 'in' },
  { label: 'X', mark: 'X' },
  { label: 'Facebook', mark: 'f' },
]

function FooterSection({ title, links }) {
  return (
    <nav aria-label={`Footer ${title.toLowerCase()}`} className="flex flex-col items-start gap-3">
      <h2 className="mb-1 text-md font-semibold text-white/80">{title}</h2>
      {links.map(({ label, to }) =>
        to ? (
          <Link key={label} to={to} className={footerLinkClass}>
            {label}
          </Link>
        ) : (
          <span key={label} aria-disabled="true" className={`${footerLinkClass} cursor-default`}>
            {label}
          </span>
        )
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer
      className="w-full text-white bg-gradient-to-r from-nigma-teal-dark via-nigma-dark to-nigma-dark"
    //   style={{
    //     background:
    //       'radial-gradient(ellipse at 2% 42%, var(--nigma-teal-dark) 0%, var(--nigma-dark) 50%, var(--nigma-ink) 100%)',
    //   }}
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-9 px-5 py-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 sm:px-8 lg:grid-cols-[minmax(0,1.7fr)_repeat(3,minmax(0,0.8fr))] lg:gap-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-start gap-4 sm:pr-4 lg:pr-12">
          <Link to="/" aria-label="Nigmatech home" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt=""
              className="size-9 rounded-lg bg-white object-cover p-0.5"
            />
            <span className="font-heading text-md font-semibold">Nigmatech</span>
          </Link>
          <p className="max-w-sm text-md leading-relaxed text-white/60">
            Nuvio for cloud kitchens, plus ERP and custom software for growing businesses. Built in Lagos.
          </p>
          <a
            href="mailto:info@nigmatech.net"
            className="flex items-center gap-2 text-md text-white/60 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nigma-teal"
          >
            <Mail aria-hidden="true" className="size-4 shrink-0 text-nigma-teal-light" />
            info@nigmatech.net
          </a>
          <p className="flex items-center gap-2 text-md text-white/60">
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-nigma-teal-light" />
            Lagos, Nigeria
          </p>
        </div>

        {footerSections.map((section) => (
          <FooterSection key={section.title} {...section} />
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between px-5 lg:px-10">
          <p className="text-md text-white/50">
            © {new Date().getFullYear()} Nigmatech Limited. All rights reserved.
          </p>
          <div aria-label="Social media" className="flex items-center gap-2">
            {socialItems.map(({ label, mark }) => (
              <span
                key={label}
                role="img"
                aria-label={`${label} profile link not configured`}
                title={`${label} profile link not configured`}
                className="flex size-10 items-center cursor-pointer justify-center rounded-full border border-white/15 text-white/60"
              >
                <span aria-hidden="true" className="text-[11px] font-semibold leading-none">
                  {mark}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
