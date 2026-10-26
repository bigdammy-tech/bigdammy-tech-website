import { useState } from "react";
import { SITE, SERVICES, PROJECTS } from "./data";
import ContactForm from "./ContactForm";

const LINKS = [["About", "about"], ["Services", "services"], ["Projects", "projects"], ["Contact", "contact"]];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a className="brand" href="#top"><img src="/logo.jpg" alt="" width="44" height="44" /><span>{SITE.name}</span></a>
      <button className="menu-btn" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "links open" : "links"}>
        {LINKS.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="btn gold small" href="#contact" onClick={() => setOpen(false)}>Start a project</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="hero-title">
        <span>We Build.</span>
        <span>You Grow.</span>
      </h1>
      <div className="hero-side">
        <p>
          Welcome to {SITE.name}, where ideas become digital solutions. We build websites, apps and software that help
          businesses grow, reach customers and work smarter.
        </p>
        <div className="row">
          <a className="btn gold" href="#services">Explore our services</a>
          <a className="btn ghost" href="#contact">Start a project</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section split" id="about">
      <h2>Built in Lagos, for businesses that want results</h2>
      <div className="prose">
        <p>
          {SITE.name} was founded by Usman Azizat Olajuwon, known as BigDammy, a full-stack developer who builds with
          Java Spring Boot, React and JavaScript, and who also runs an e-commerce business of her own.
        </p>
        <p>
          That means we know what an online business needs to work day to day: fast pages, simple checkout, reliable
          backends and honest delivery times.
        </p>
        <p>
          Our goal is to solve real business problems with software, and to grow into a studio that also ships its own
          AI products.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <h2>What we build</h2>
      <ul className="services">
        {SERVICES.map((s) => (
          <li key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects we have built</h2>
      <div className="projects">
        {PROJECTS.map((p) => (
          <article key={p.title} className="project">
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="row links-row">
              {p.live && <a className="text-link" href={p.live} target="_blank" rel="noreferrer">Visit live site</a>}
              {p.github && <a className="text-link" href={p.github} target="_blank" rel="noreferrer">View code</a>}
            </div>
          </article>
        ))}
      </div>
      <p className="more">
        See every project, certification and my CV on the <a className="text-link" href={SITE.portfolio} target="_blank" rel="noreferrer">full portfolio</a>.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="section split" id="contact">
      <div>
        <h2>Tell us what you want to build</h2>
        <p className="muted">Share a few details and we will reply with next steps and a quote.</p>
        <p className="muted">Email: <a className="text-link" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
      </div>
      <ContactForm />
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {SITE.name}. Lagos, Nigeria.</span>
        <ul className="socials">
          {SITE.socials.map(([label, url]) => (
            <li key={label}><a href={url} target="_blank" rel="noreferrer">{label}</a></li>
          ))}
        </ul>
      </footer>
    </>
  );
}
