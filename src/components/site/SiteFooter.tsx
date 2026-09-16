import { Link } from "@tanstack/react-router";
import logo from "@/assets/paaecm-logo.png.asset.json";
import { footerLinks, org } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <img
            src={logo.url}
            alt="Pan African Alliance for Ending Child Marriage logo"
            className="h-12 w-auto rounded-sm bg-background p-1.5"
            width={400}
            height={160}
            loading="lazy"
          />
          <p className="mt-5 font-display text-lg">{org.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-accent">
            {org.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/85 underline-offset-4 hover:text-accent hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 text-xs text-primary-foreground/70 sm:px-8">
          © {year} PAAECM — Pan African Alliance for Ending Child Marriage
        </div>
      </div>
    </footer>
  );
}
