import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend fixes",
    description: "Resolve UI bugs, layout issues and responsive problems without rebuilding everything.",
    points: ["Targeted bug fixes", "Responsive corrections", "Component cleanup"],
    price: "From $79",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Website improvements",
    description: "Make an existing page clearer, faster to use and more consistent with your brand.",
    points: ["Focused page redesign", "Visual hierarchy", "Accessibility-minded UI"],
    price: "From $129",
  },
  {
    number: "03",
    icon: MonitorSmartphone,
    title: "Landing page rebuilds",
    description: "Turn an outdated or unclear landing page into a polished, mobile-first experience.",
    points: ["Custom React / Next.js UI", "Mobile-first implementation", "SEO foundations"],
    price: "From $299",
  },
];

const projects = [
  {
    id: "01",
    type: "BUSINESS WEBSITE · CONCEPT PROJECT",
    name: "Northline Construction",
    description: "A clearer digital presence for a construction company, built around trust, services and project proof.",
    tags: ["Business website", "Responsive design", "Conversion structure"],
    className: "northline",
    label: "N",
    metric: "BUILT TO MAKE TRUST VISIBLE",
  },
  {
    id: "02",
    type: "SAAS LANDING PAGE · CONCEPT PROJECT",
    name: "Orbit — SaaS concept",
    description: "A focused product narrative that explains the value, demonstrates the workflow and supports a clear next step.",
    tags: ["SaaS", "Landing page", "Product storytelling"],
    className: "orbit",
    label: "orbit",
    metric: "LESS NOISE. MORE CLARITY.",
  },
  {
    id: "03",
    type: "FRONTEND ENGINEERING · TECHNICAL DEMO",
    name: "Frontend Rescue",
    description: "A technical demonstration of practical UI repairs: spacing, responsive behavior and component consistency.",
    tags: ["UI repair", "Accessibility", "Engineering"],
    className: "rescue",
    label: "{ }",
    metric: "DETAILS THAT MAKE THE DIFFERENCE",
  },
];

const steps = [
  ["01", "You send a written brief", "Share the page, what feels wrong and what outcome you need. No call required."],
  ["02", "We define the scope", "You receive a written plan with deliverables, exclusions, price and estimated timeline."],
  ["03", "We build and review", "Work is shared for review with two revision rounds included in the agreed scope."],
  ["04", "You receive the handover", "The finished work is delivered with the relevant files and a clear handover."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="HK Labs home">
          <span className="brand-mark">hk<span>.</span></span>
          <span className="brand-name">HK LABS</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#services">Services</Link>
          <Link href="#work">Selected work</Link>
          <Link href="#process">Process</Link>
        </nav>
        <Link className="header-cta" href="#contact">Start a project <ArrowUpRight size={15} /></Link>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> INDEPENDENT FRONTEND STUDIO</div>
          <h1>Better websites.<br /><span>Built with intent.</span></h1>
          <p className="hero-description">
            Modern frontend development for businesses and digital agencies.
            From focused fixes to complete landing page rebuilds — without the unnecessary complexity.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="button button-primary">Discuss your project <ArrowUpRight size={17} /></Link>
            <Link href="#work" className="text-link">Explore selected work <ArrowDownRight size={16} /></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-item"><span className="proof-icon"><Check size={14} /></span><span>Written communication</span></div>
            <div className="proof-item"><span className="proof-icon"><Check size={14} /></span><span>Clear project scope</span></div>
            <div className="proof-item"><span className="proof-icon"><Check size={14} /></span><span>Responsive by default</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract interface preview">
          <div className="visual-glow" />
          <div className="visual-top"><span>HK / DIGITAL WORKSPACE</span><span className="visual-live"><i /> AVAILABLE FOR PROJECTS</span></div>
          <div className="visual-window">
            <div className="window-bar"><span /><span /><span /><small>experience.tsx</small></div>
            <div className="code-preview">
              <p><i>01</i><span className="code-purple">const</span> experience = {"{"}</p>
              <p><i>02</i>&nbsp;&nbsp; clarity: <b>true</b>,</p>
              <p><i>03</i>&nbsp;&nbsp; responsive: <b>true</b>,</p>
              <p><i>04</i>&nbsp;&nbsp; performance: <b>“prioritized”</b>,</p>
              <p><i>05</i>&nbsp;&nbsp; details: <b>“considered”</b></p>
              <p><i>06</i>{"}"}</p>
            </div>
            <div className="window-footer"><span><span className="mini-dot" /> SYSTEM READY</span><span>BUILD / 001</span></div>
          </div>
          <div className="visual-caption"><Sparkles size={15} /> Thoughtful design. Reliable implementation.</div>
          <div className="visual-index">01 — 03</div>
        </div>
        <div className="hero-bottom"><span>DESIGN-MINDED DEVELOPMENT</span><span>INDEPENDENT · ASYNCHRONOUS · DETAIL-DRIVEN</span></div>
      </section>

      <section className="trust-strip">
        <div className="section-wrap trust-inner"><span>BUILT WITH A MODERN STACK</span><div>REACT</div><div>NEXT.JS</div><div>TYPESCRIPT</div><div>TAILWIND CSS</div><div>NODE.JS</div></div>
      </section>

      <section id="services" className="section-wrap section-block">
        <div className="section-heading">
          <div><SectionLabel>WHAT WE DO</SectionLabel><h2>Focused work.<br /><span>Measurable progress.</span></h2></div>
          <p>Get the right level of engineering for the problem at hand. Every engagement starts with a defined scope — not an open-ended contract.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><Icon size={20} strokeWidth={1.5} /></div>
              <h3>{service.title}</h3><p>{service.description}</p>
              <ul>{service.points.map((point) => <li key={point}><Check size={14} />{point}</li>)}</ul>
              <div className="service-bottom"><span>{service.price}</span><Link href="#contact" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></Link></div>
            </article>;
          })}
        </div>
        <p className="pricing-note">Starting prices for clearly scoped projects. Final pricing depends on complexity, content and requirements.</p>
      </section>

      <section id="work" className="work-section">
        <div className="section-wrap section-block">
          <div className="section-heading">
            <div><SectionLabel>SELECTED WORK</SectionLabel><h2>Proof of craft.<br /><span>Not promises.</span></h2></div>
            <p>Concept projects and technical demonstrations created to show our approach to structure, interface design and frontend implementation.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <article className="project-card" key={project.id}>
              <div className={`project-art ${project.className}`}>
                <div className="project-art-top"><span>HK LABS / {project.id}</span><span>CONCEPT SERIES</span></div>
                <div className="project-art-center"><span>{project.label}</span><small>{project.metric}</small></div>
                <div className="project-art-bottom"><span>DESIGN STUDY</span><span>↗</span></div>
              </div>
              <div className="project-meta">{project.type}</div>
              <h3>{project.name}</h3><p>{project.description}</p>
              <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
          <div className="disclosure"><span>ⓘ</span> These are self-initiated concept projects and technical demos, not commissioned client work.</div>
        </div>
      </section>

      <section className="section-wrap section-block process-section" id="process">
        <div className="section-heading">
          <div><SectionLabel>HOW WE WORK</SectionLabel><h2>Simple process.<br /><span>No meeting overhead.</span></h2></div>
          <p>Everything is handled asynchronously and in writing. You stay informed, decisions stay documented, and the scope stays clear.</p>
        </div>
        <div className="process-list">
          {steps.map(([number, title, description]) => <article className="process-row" key={number}>
            <span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="process-arrow" size={18} />
          </article>)}
        </div>
      </section>

      <section className="stack-section">
        <div className="section-wrap stack-inner">
          <div><SectionLabel>ENGINEERING APPROACH</SectionLabel><h2>Built for the<br /><span>real world.</span></h2></div>
          <div className="stack-points">
            <div><Workflow size={19} /><span><b>Maintainable code</b><small>Clear components and practical architecture.</small></span></div>
            <div><MonitorSmartphone size={19} /><span><b>Responsive behavior</b><small>Layouts designed to work across screen sizes.</small></span></div>
            <div><Sparkles size={19} /><span><b>Quality details</b><small>Accessibility, metadata and performance foundations.</small></span></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block faq-section">
        <div><SectionLabel>GOOD TO KNOW</SectionLabel><h2>Before we<br /><span>get started.</span></h2></div>
        <div className="faq-list">
          <details><summary>Do you work with clients remotely? <span>+</span></summary><p>Yes. Projects are handled remotely with written updates and documented decisions.</p></details>
          <details><summary>Do I need to schedule a call? <span>+</span></summary><p>No. The entire process can be handled in writing, from the initial brief to delivery.</p></details>
          <details><summary>What is included in the price? <span>+</span></summary><p>Each proposal defines deliverables, exclusions, timeline and two revision rounds. Starting prices are not fixed quotes.</p></details>
          <details><summary>Can you work with an existing codebase? <span>+</span></summary><p>Yes, after a short technical review confirms the stack, access and scope are suitable.</p></details>
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-orb" />
        <SectionLabel>HAVE A PROJECT IN MIND?</SectionLabel>
        <h2>Let's make your<br /><span>next build better.</span></h2>
        <p>Send a short written brief. Include your website, what needs to improve and your ideal outcome. We’ll respond with the next practical step.</p>
        <a className="button button-primary contact-button" href="mailto:a.koumad.pro@gmail.com?subject=HK%20Labs%20-%20Project%20inquiry">Email HK Labs <ArrowUpRight size={17} /></a>
        <a className="contact-email" href="mailto:a.koumad.pro@gmail.com">a.koumad.pro@gmail.com</a>
        <small>Written communication only · No calls required</small>
      </section>

      <footer className="site-footer">
        <Link href="/" className="brand"><span className="brand-mark">hk<span>.</span></span><span className="brand-name">HK LABS</span></Link>
        <span>Independent frontend development studio.</span>
        <span>© {new Date().getFullYear()} HK Labs. All rights reserved.</span>
        <Link href="https://github.com/HakimDev-tech/hk-labs-website" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></Link>
      </footer>
    </main>
  );
}
