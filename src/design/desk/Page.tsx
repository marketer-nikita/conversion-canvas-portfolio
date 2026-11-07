import React, { useEffect, useRef, useState } from "react";
import { caseStudiesConfig } from "@/config/caseStudies";
import { certificationsConfig } from "@/config/certifications";
import { experienceConfig } from "@/config/experience";
import { industriesConfig } from "@/config/industries";
import { profileConfig } from "@/config/profile";
import { toolsConfig } from "@/config/tools";
import "./styles.css";

const PHOTO = "/lovable-uploads/02ece727-1d4b-407f-9ad8-81ad22872104.png";
const AUDIT_MAIL = `mailto:${profileConfig.email}?subject=${encodeURIComponent("Free ad account audit")}`;

// Red-pen margin notes. Every fact comes from caseStudies.ts.
const SHEETS = [
  { circled: "10x", label: "ROI", note: "no past data. started from zero." },
  { circled: "$10,000", label: "revenue", note: "from $443 of ads. 3 sales!" },
  { circled: "1.82x", label: "ROAS", note: "80+ campaigns, $3K a day." },
];

const CIRCLE = "M52 6 C24 3 5 10 4 21 C3 33 28 38 55 36 C80 34 97 27 96 17 C95 7 72 3 42 7";
const UNDERLINE = "M2 12 C24 6 44 15 62 9 C74 5 88 8 98 10";

// Puts anything with .dk-drag under the pointer. Links inside still click, and phones keep normal scrolling.
const useDesk = (rootRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const canDrag = window.matchMedia("(min-width: 761px) and (pointer: fine)");
    let top = 10;

    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const item = target.closest<HTMLElement>(".dk-drag");
      if (!item || !canDrag.matches || target.closest("a")) return;
      e.preventDefault();
      const startX = e.clientX - Number(item.dataset.x || 0);
      const startY = e.clientY - Number(item.dataset.y || 0);
      item.style.zIndex = String(++top);
      item.classList.add("is-held");

      const onMove = (move: PointerEvent) => {
        const x = move.clientX - startX;
        const y = move.clientY - startY;
        item.dataset.x = String(x);
        item.dataset.y = String(y);
        item.style.setProperty("--x", `${x}px`);
        item.style.setProperty("--y", `${y}px`);
      };
      const onUp = () => {
        item.classList.remove("is-held");
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    };

    root.addEventListener("pointerdown", onDown);
    return () => root.removeEventListener("pointerdown", onDown);
  }, [rootRef]);
};

// Red pen that draws itself once its mark scrolls into view.
const Pen = ({ path, className = "", delay = 0 }: { path: string; className?: string; delay?: number }) => {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <svg ref={ref} className={`dk-pen ${className}${drawn ? " is-drawn" : ""}`} viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
      <path d={path} pathLength={1} style={{ transitionDelay: `${delay}ms` }} />
    </svg>
  );
};

const Page = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesk(rootRef);

  return (
    <div className="dk" ref={rootRef}>
      <header className="dk-top">
        <a href="#home">{profileConfig.name}</a>
        <nav aria-label="Sections">
          <a href="#case-studies">Reports</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Free audit</a>
        </nav>
      </header>

      <main>
        <section id="home" className="dk-hero">
          <h1>
            <span className="dk-strip dk-drag" style={{ "--r": "-2.4deg", "--d": 0 } as React.CSSProperties}>I make ad budgets</span>
            <span className="dk-strip dk-strip--2 dk-drag" style={{ "--r": "1.3deg", "--d": 1 } as React.CSSProperties}>
              earn their keep.
              <Pen path={UNDERLINE} className="dk-under" delay={1500} />
            </span>
          </h1>

          <figure className="dk-print dk-drag" style={{ "--r": "4deg", "--d": 2 } as React.CSSProperties}>
            <span className="dk-tape" aria-hidden="true" />
            <img src={PHOTO} alt="Portrait of Nikita Gupta" width={800} height={800} draggable={false} />
            <figcaption>Nikita, buying your clicks carefully</figcaption>
          </figure>

          <div className="dk-note dk-note--yellow dk-drag" style={{ "--r": "-5deg", "--d": 3 } as React.CSSProperties}>
            <p>$443 of ads</p>
            <p className="dk-note-big">
              <span>$10,000<Pen path={CIRCLE} className="dk-round" delay={1900} /></span>
            </p>
            <p>in jewellery sales, NYC</p>
          </div>

          <div className="dk-brief dk-drag" style={{ "--r": "-1.5deg", "--d": 4 } as React.CSSProperties}>
            <p>Google and Meta campaigns for B2B, e-commerce and local brands. Tested every week, reported plainly, and judged on revenue, not clicks.</p>
            <a href={AUDIT_MAIL}>Get a free ad audit</a>
          </div>

          <div className="dk-note dk-note--pink dk-drag" style={{ "--r": "6deg", "--d": 5 } as React.CSSProperties}>
            <p>10x ROI on Google for a Dubai rental brand</p>
          </div>

          <p className="dk-hint">go on, move things around</p>
        </section>

        <section id="case-studies" className="dk-section">
          <h2>Client reports, marked up</h2>
          <div className="dk-sheets">
            {caseStudiesConfig.map((study, index) => (
              <article key={study.client} className={`dk-sheet dk-sheet--${index}`}>
                <span className="dk-clip" aria-hidden="true" />
                <p className="dk-sheet-meta">{study.industry}</p>
                <h3>{study.client}</h3>
                <p>{study.description}</p>
                <p className="dk-result">
                  <span>{SHEETS[index].circled}<Pen path={CIRCLE} className="dk-round" delay={200} /></span>
                  {" "}{SHEETS[index].label}
                </p>
                <p className="dk-hand">{SHEETS[index].note}</p>
                <table>
                  <tbody>
                    {study.results.map((r) => (
                      <tr key={r.metric}>
                        <td>{r.metric}</td>
                        <td>{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h4>What I did</h4>
                <ul>
                  {study.solution.map((step) => <li key={step}>{step}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="industries" className="dk-section">
          <h2>Index cards by industry</h2>
          <ul className="dk-cards">
            {industriesConfig.map((item, index) => (
              <li key={item.industry} className="dk-card" style={{ "--r": `${[-2, 1.5, -1, 2, -1.5][index]}deg` } as React.CSSProperties}>
                <h3>{item.industry.split(" (")[0]}</h3>
                <p>{item.description}</p>
                <strong>{item.result}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="dk-section dk-pads">
          <div className="dk-pad">
            <h2>Jobs so far</h2>
            <ul>
              {experienceConfig.map((job) => (
                <li key={`${job.company}${job.period}`}>
                  <h3>{job.role}</h3>
                  <p className="dk-sheet-meta">{job.company}, {job.period}</p>
                  <p>{job.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="dk-certs">
            <h2>Certificates</h2>
            <ul>
              {certificationsConfig.map((cert) => (
                <li key={cert.name}>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.name}</a>
                  <span>{cert.platform}, {cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="tools-skills" className="dk-section">
          <h2>Stickers on my laptop</h2>
          <ul className="dk-stickers">
            {toolsConfig.map((tool, index) => (
              <li key={tool.name} className="dk-sticker dk-drag" style={{ "--r": `${[-5, 3, -2, 6, -4, 2][index % 6]}deg` } as React.CSSProperties}>
                <img src={tool.logo} alt="" draggable={false} />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="dk-section">
          <div className="dk-letter">
            <h2>Leave your ad account on my desk</h2>
            <p>I'll audit it for free and show you where your budget leaks. I reply within 24 hours, with no commitment.</p>
            <a className="dk-stamp" href={AUDIT_MAIL}>Get a free ad audit</a>
            <p className="dk-sign">Nikita</p>
            <p className="dk-links">
              <a href={`mailto:${profileConfig.email}`}>{profileConfig.email}</a>
              <a href="tel:+917983863180">{profileConfig.phone}</a>
              <a href={profileConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profileConfig.resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
