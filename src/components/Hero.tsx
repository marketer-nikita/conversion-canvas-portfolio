import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { profileConfig } from "@/config/profile";
import { heroConfig } from "@/config/hero";

const PHOTO = "/lovable-uploads/02ece727-1d4b-407f-9ad8-81ad22872104.png";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** "**bold**" → <b>, mirroring how search results bold the words you searched for. */
const withMatches = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <b key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </b>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );

/** Types the query, then reveals the sponsored result. The page's one orchestrated motion. */
function useTypedQuery(query: string) {
  const [count, setCount] = useState(() => (prefersReducedMotion() ? query.length : 0));
  const [shown, setShown] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timers: number[] = [];
    let t = 700; // let the headline land first
    for (let i = 1; i <= query.length; i++) {
      t += 38 + ((i * 37) % 45); // uneven, human-ish rhythm (deterministic)
      timers.push(window.setTimeout(() => setCount(i), t));
    }
    timers.push(window.setTimeout(() => setShown(true), t + 380));
    return () => timers.forEach(clearTimeout);
  }, [query]);

  return { typed: query.slice(0, count), done: count >= query.length, shown };
}

const SearchMoment = () => {
  const { query, ad, adCaption } = heroConfig;
  const { typed, done, shown } = useTypedQuery(query);

  return (
    <figure className="m-0">
      <div className="rounded-[22px] bg-white p-3 shadow-[0_1px_0_rgba(15,27,61,0.06),0_24px_60px_-28px_rgba(15,27,61,0.35)] ring-1 ring-ink/[0.08] sm:p-4">
        {/* search field */}
        <div
          className="flex h-12 items-center gap-3 rounded-full bg-paper px-4 text-[15px] text-ink sm:h-14 sm:px-5 sm:text-base"
          role="img"
          aria-label={`Search: ${query}`}
        >
          <Search className="h-[18px] w-[18px] shrink-0 text-subtle" aria-hidden="true" />
          <span className="min-w-0 truncate" aria-hidden="true">
            {typed}
            {!done && <span className="hero-caret" />}
          </span>
        </div>

        {/* sponsored result */}
        <div className="hero-result px-2 pb-2 pt-5 sm:px-3 sm:pt-6" data-shown={shown}>
          <div className="hero-result-step flex items-center gap-3">
            <img
              src={PHOTO}
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-ink/10"
            />
            <div className="min-w-0 leading-tight">
              <div className="text-[13px] font-semibold text-ink">Sponsored</div>
              <div className="truncate text-[13px] text-subtle">
                {profileConfig.name}, {profileConfig.title}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="hero-result-step mt-3 block text-left text-[19px] font-medium leading-snug text-cobalt underline-offset-[3px] hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt sm:text-[21px]"
            style={{ animationDelay: "80ms", fontStretch: "92%" }}
          >
            {ad.headline}
          </button>

          <p
            className="hero-result-step mt-2 max-w-[62ch] text-[14.5px] leading-relaxed text-subtle"
            style={{ animationDelay: "160ms" }}
          >
            {withMatches(ad.description)}
          </p>

          <ul
            className="hero-result-step mt-4 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-ink/10 pt-3"
            style={{ animationDelay: "240ms" }}
          >
            {ad.sitelinks.map((s) => (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => scrollToId(s.targetId)}
                  className="py-1.5 text-left text-[14.5px] text-cobalt underline-offset-[3px] hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-4 max-w-[44ch] pl-1 text-sm leading-relaxed text-subtle">{adCaption}</figcaption>
    </figure>
  );
};

const NameList = ({ items }: { items: string[] }) => (
  <>
    {items.map((name, i) => (
      <React.Fragment key={name}>
        <span className="font-semibold text-ink" style={{ fontStretch: "85%" }}>
          {name}
        </span>
        {i < items.length - 2 ? ", " : i === items.length - 2 ? " and " : ""}
      </React.Fragment>
    ))}
  </>
);

const Hero = () => {
  const { headline, subheadline, primaryCta, secondaryCta, riskReversal, clients, employers } = heroConfig;

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative bg-paper font-archivo text-ink">
      <div className="mx-auto max-w-[1320px] px-4 pb-14 pt-28 sm:px-8 sm:pt-36 lg:pb-20">
        <h1
          id="hero-heading"
          className="text-[clamp(2.9rem,13vw,10rem)] font-[750] leading-[0.86] tracking-[-0.012em]"
          style={{ fontStretch: "68%", wordSpacing: "0.08em" }}
        >
          {headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-2">
            <p className="max-w-[40ch] text-lg leading-[1.55] text-ink/80 sm:text-xl">{subheadline}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <button
                type="button"
                onClick={() => scrollToId(primaryCta.targetId)}
                data-cta="hero-primary"
                className="inline-flex h-14 items-center justify-center rounded-full bg-cobalt px-8 text-[17px] font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-cobalt-deep active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cobalt/30"
              >
                {primaryCta.label}
              </button>
              <button
                type="button"
                onClick={() => scrollToId(secondaryCta.targetId)}
                data-cta="hero-secondary"
                className="inline-flex h-14 items-center justify-center rounded-full px-2 text-[17px] font-medium text-ink underline decoration-ink/30 decoration-2 underline-offset-[6px] transition-colors hover:decoration-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
              >
                {secondaryCta.label}
              </button>
            </div>
            <p className="mt-4 text-[15px] text-subtle">{riskReversal}</p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SearchMoment />
          </div>
        </div>
      </div>

      {/* Social proof: real client and employer names, set as type rather than borrowed logos */}
      <div className="border-t border-ink/[0.12]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-x-10 gap-y-2 px-4 py-6 text-[15px] leading-relaxed sm:px-8 lg:flex-row lg:items-baseline">
          <p className="text-subtle">
            Campaigns for <NameList items={clients} />
          </p>
          <p className="text-subtle lg:ml-auto">
            Previously at <NameList items={employers} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
