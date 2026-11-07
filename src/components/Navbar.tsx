import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { profileConfig } from "@/config/profile";
import { heroConfig } from "@/config/hero";

// CRO: a short top bar keeps attention on the one action that matters.
// Desktop shows the proof-heavy sections; the mobile menu keeps the full list.
const PRIMARY_LINKS = ["case-studies", "industries", "experience", "about"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
      const currentSection = navigationConfig
        .map((nav) => nav.id)
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
      if (currentSection) setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const desktopLinks = PRIMARY_LINKS.map((id) => navigationConfig.find((n) => n.id === id)).filter(
    (n): n is (typeof navigationConfig)[number] => Boolean(n),
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-archivo text-ink transition-[background-color,box-shadow] duration-300 ${
        isOpen
          ? "bg-paper shadow-[0_1px_0_rgba(15,27,61,0.12)]"
          : isScrolled
            ? "bg-paper/90 shadow-[0_1px_0_rgba(15,27,61,0.12)] backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-4 sm:h-[72px] sm:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="rounded text-[19px] font-bold tracking-[-0.01em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
          style={{ fontStretch: "75%" }}
        >
          {profileConfig.name}
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {desktopLinks.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={`rounded text-[15px] underline-offset-[6px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt ${
                  activeSection === item.id ? "text-ink underline decoration-2" : "text-ink/65 hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-6">
          <a
            href={profileConfig.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded text-[15px] text-ink/65 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt md:inline"
          >
            Résumé
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-cta="nav"
            className="hidden h-10 items-center rounded-full bg-cobalt px-5 text-[15px] font-semibold text-white transition-colors hover:bg-cobalt-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cobalt/30 sm:inline-flex"
          >
            {heroConfig.primaryCta.label}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-ink/10 px-4 pb-6 pt-2 sm:px-8 lg:hidden">
          <ul className="mx-auto max-w-[1320px]">
            {navigationConfig.map((item) => (
              <li key={item.id} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full py-3.5 text-left text-[22px] font-semibold tracking-[-0.01em] ${
                    activeSection === item.id ? "text-cobalt" : "text-ink"
                  }`}
                  style={{ fontStretch: "75%" }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={profileConfig.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3.5 text-[22px] font-semibold tracking-[-0.01em] text-ink"
                style={{ fontStretch: "75%" }}
              >
                Résumé
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-cobalt text-[17px] font-semibold text-white"
          >
            {heroConfig.primaryCta.label}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
