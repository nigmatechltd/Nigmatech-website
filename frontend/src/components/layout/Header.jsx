
import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Layers3, Menu, Utensils } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Dialog as MobileNavigation } from '@base-ui/react/dialog'
import logo from '../../assets/Original Logo Symbol.png'

const navLinkClass =
  'rounded-full px-4 py-2 text-md font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal'

function Header() {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false)
  const location = useLocation()
  const isSolutionActive = location.pathname.startsWith('/solution')

  const closeMobileNavigation = () => setMobileNavigationOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-15 max-w-310 items-center justify-between rounded-full border border-white/10 bg-gradient-to-r from-[#050a0b]/95 via-[#0c2729]/95 to-[#10565c]/95 px-3 text-white shadow-lg shadow-black/10 backdrop-blur-xl sm:px-5">
        <Link
          to="/"
          aria-label="Nigmatech home"
          className="flex shrink-0 items-center gap-2.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nigma-teal"
        >
          <img
            src={logo}
            alt=""
            className="size-9 rounded-lg bg-white object-cover p-0.5"
          />
          <span className="font-heading text-sm font-semibold text-white sm:text-base">
            Nigmatech
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`${navLinkClass} inline-flex items-center gap-1.5 cursor-pointer ${isSolutionActive ? 'bg-white/10 text-white' : ''}`}
            >
              Solutions
              <ChevronDown aria-hidden="true" className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={18}
              alignOffset={-120}
              className="w-[500px] rounded-2xl border border-white/10 bg-[#0b1718] p-2 text-white shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <DropdownMenuItem
                render={<Link to="/solution/erp-software" />}
                className="flex items-start gap-3 rounded-xl p-3 text-white/80 focus:bg-white/10 focus:text-white hover:text-white cursor-pointer"
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/75 transition-colors group-hover/dropdown-menu-item:bg-nigma-teal-light group-hover/dropdown-menu-item:text-nigma-dark">
                  <Layers3 aria-hidden="true" className="size-5" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-medium text-white group-hover/dropdown-menu-item:text-white">ERP Software</span>
                  <div className="flex items-center gap-1 text-sm text-white/55 group-hover/dropdown-menu-item:text-white/55">
                    <span className="text-sm leading-relaxed text-white/55 group-hover/dropdown-menu-item:text-white/55">
                      ERP implimentation, customization and support for growing businesses.
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-4 text-nigma-teal-dark group-hover/dropdown-menu-item:text-nigma-teal-dark" />
                  </div>
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? 'bg-white/10 text-white' : ''}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? 'bg-white/10 text-white' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            to="/contact"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#10565c]/90 text-white px-4 text-md font-semibold text-nigma-ink transition-colors border border-white/10 hover:bg-[#10565c]/90 focus-visible:outline-10 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a consultation
          </Link>
        </div>

        <MobileNavigation.Root
          open={mobileNavigationOpen}
          onOpenChange={setMobileNavigationOpen}
        >
          <MobileNavigation.Trigger
            aria-label="Open navigation"
            className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </MobileNavigation.Trigger>
          <MobileNavigation.Portal>
            <MobileNavigation.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
            <MobileNavigation.Popup
              className="fixed inset-y-0 right-0 z-50 flex flex-col overflow-y-auto border-l border-white/10 bg-[#050a0b] p-5 text-white shadow-2xl shadow-black/40 outline-none transition-transform duration-200 data-ending-style:translate-x-full data-starting-style:translate-x-full sm:max-w-sm"
              style={{ width: 'min(88vw, 380px)' }}
            >
              <MobileNavigation.Title className="sr-only">Main navigation</MobileNavigation.Title>
              <div className="flex items-center justify-between border-b border-white/10 pb-5 pr-12">
                <Link to="/" aria-label="Nigmatech home" className="flex items-center gap-2.5">
                  <img
                    src={logo}
                    alt=""
                    className="size-9 rounded-lg bg-white object-cover p-0.5"
                  />
                  <span onClick={closeMobileNavigation} className="font-heading text-sm font-semibold">Nigmatech</span>
                </Link>
                <MobileNavigation.Close
                  aria-label="Close navigation"
                  className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nigma-teal"
                >
                  <span aria-hidden="true" className="text-xl leading-none">×</span>
                </MobileNavigation.Close>
              </div>

              <nav aria-label="Mobile navigation" className="flex flex-col gap-7 py-6">
                <div className="flex flex-col gap-2">
                  <p className="px-1 text-md font-semibold text-white/45">Solutions</p>

                  <NavLink
                    to="/solution/erp-software"
                    onClick={closeMobileNavigation}
                    className={({ isActive }) =>
                      `flex min-h-12 items-center justify-between rounded-xl px-3 text-md font-medium transition-colors ${
                        isSolutionActive || isActive
                          ? 'bg-white/10 text-white'
                          : 'text-white hover:bg-white/10'
                      }`
                    }
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white/75">
                        <Layers3 aria-hidden="true" className="size-4" />
                      </span>
                      ERP Software
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-4 text-white/45" />
                  </NavLink>
                </div>

                <div className="flex flex-col gap-1">
                  <NavLink
                    to="/about"
                    onClick={closeMobileNavigation}
                    className={({ isActive }) =>
                      `flex min-h-11 items-center justify-between rounded-xl px-3 text-md transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/[0.06] hover:text-white'}`
                    }
                  >
                    About
                    <ArrowUpRight aria-hidden="true" className="size-4 text-white/40" />
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={closeMobileNavigation}
                    className={({ isActive }) =>
                      `flex min-h-11 items-center justify-between rounded-xl px-3 text-md transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/[0.06] hover:text-white'}`
                    }
                  >
                    Contact
                    <ArrowUpRight aria-hidden="true" className="size-4 text-white/40" />
                  </NavLink>
                </div>
              </nav>

              <div className="mt-auto grid gap-2 border-t border-white/10 pt-5">
                <Link
                  to="/contact"
                  onClick={closeMobileNavigation}
                  className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-nigma-teal px-4 text-md font-semibold text-nigma-ink transition-colors hover:bg-nigma-teal-light"
                >
                  Book a consolution
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </MobileNavigation.Popup>
          </MobileNavigation.Portal>
        </MobileNavigation.Root>
      </div>
    </header>
  )
}

export default Header
