import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/paaecm-logo.png.asset.json";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="PAAECM — home"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo.url}
            alt="Pan African Alliance for Ending Child Marriage logo"
            className="h-11 w-auto shrink-0 sm:h-12"
            width={400}
            height={160}
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-1 xl:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={cn(
                "rounded-sm px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              )}
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/partner-with-us"
            className="ml-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main mobile"
          className="border-t border-border bg-background xl:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-base font-medium text-foreground/85"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link
                to="/partner-with-us"
                onClick={() => setOpen(false)}
                className="block rounded-sm bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Partner With Us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
      <span className="sr-only">{pathname}</span>
    </header>
  );
}
