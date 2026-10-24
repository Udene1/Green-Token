const projects = [
  {
    number: "01",
    name: "Compflow",
    type: "Cloud compliance · Evidence systems",
    description:
      "A compliance automation platform built around asynchronous execution, multi-cloud integrations, persisted execution graphs, and verifiable audit evidence.",
    proof: ["Worker and queue architecture", "Evidence fingerprints and manifests", "Control-to-resource traceability"],
    href: "/work/compflow",
    status: "Flagship engineering case study",
    className: "project-card project-card--wide"
  },
  {
    number: "02",
    name: "Cognitia",
    type: "Cognitive systems · Research",
    description:
      "An experimental problem-solving system exploring evidence reasoning, hypothesis selection, durable experience, and structural transfer without relying on an LLM for the core transfer experiment.",
    proof: ["Evidence reasoning benchmarks", "Persistent learned structures", "Documented limits and adversarial cases"],
    href: "https://github.com/Udene1/Cognitia",
    status: "Research & experiments",
    className: "project-card"
  },
  {
    number: "03",
    name: "Hunt",
    type: "Company intelligence · Evidence discovery",
    description:
      "A company intelligence engine designed to reconstruct operating signals from public evidence, then preserve the source trail behind each finding.",
    proof: ["Source-backed signals", "Company scanning workflow", "Adapter-driven discovery architecture"],
    href: "https://github.com/Udene1/Hunt",
    status: "Active build",
    className: "project-card"
  },
  {
    number: "04",
    name: "Cashflow OS",
    type: "Commercial operations · Automation",
    description:
      "An operational workspace for lead discovery, research, outreach, contact activity, and commercial follow-through—where state should reflect what actually happened.",
    proof: ["Persistent activity history", "Gmail-connected outreach", "Lead-to-conversation workflow"],
    href: "https://github.com/Udene1/Cashflow-os",
    status: "Operational build",
    className: "project-card"
  },
  {
    number: "05",
    name: "Shade",
    type: "Business systems · Data integrity",
    description:
      "Inventory and sales operations with movement-based records, explicit reconciliation, credit integrity, and selectable WAC/FIFO valuation.",
    proof: ["PostgreSQL-backed domain logic", "Valuation and integrity tests", "Event history over silent overwrites"],
    href: "https://github.com/Udene1/Shade",
    status: "UI refinement in progress",
    className: "project-card"
  },
  {
    number: "06",
    name: "BPN Network",
    type: "Fintech infrastructure · Biometrics",
    description:
      "A cardless payment concept exploring biometric authorization and merchant payment flows. Integration and liveness boundaries are treated as real engineering constraints, not hidden behind mock success.",
    proof: ["Backend and integration experiments", "Mobile-device testing path", "Explicit production-readiness gaps"],
    href: "https://github.com/Udene1/bpn-network",
    status: "Prototype / R&D",
    className: "project-card"
  }
];

const principles = [
  {
    n: "01",
    title: "State must mean something",
    body: "A system should tell the truth about what happened—not what a workflow hoped would happen."
  },
  {
    n: "02",
    title: "Evidence before conclusions",
    body: "Make claims traceable to records, events, tests, and sources. Unknown should remain unknown."
  },
  {
    n: "03",
    title: "Failure is part of the design",
    body: "Retries, boundaries, stale data, partial execution, and recovery paths deserve first-class treatment."
  }
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <a className="wordmark" href="#top" aria-label="Kenneth Elioku home">
          <span className="wordmark-mark">KE</span>
          <span>Kenneth Elioku</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="mailto:kennethikechukwu159@gmail.com">Email me <span>↗</span></a>
      </div>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> INDEPENDENT ENGINEER · NIGERIA / REMOTE</div>
          <h1>I build systems<br />that <em>hold up</em><br />in the real world.</h1>
          <p className="hero-intro">
            I’m Kenneth Elioku—a backend and systems engineer focused on dependable software,
            operational infrastructure, automation, and evidence-driven products.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#work">Explore selected work <span>↓</span></a>
            <a className="text-link" href="https://github.com/Udene1" target="_blank" rel="noreferrer">GitHub profile <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-line" /> I care about the system behind the screen.</div>
        </div>

        <div className="hero-art" aria-label="Abstract system map illustration">
          <div className="art-grid" />
          <div className="orbit orbit--outer" />
          <div className="orbit orbit--inner" />
          <div className="orbit-node orbit-node--a" />
          <div className="orbit-node orbit-node--b" />
          <div className="orbit-node orbit-node--c" />
          <div className="core">
            <span className="core-kicker">SYSTEM STATE</span>
            <span className="core-symbol">↗</span>
            <span className="core-label">REALITY<br />IN / OUT</span>
          </div>
          <div className="art-tag art-tag--top"><span className="tag-dot" /> TRACEABLE</div>
          <div className="art-tag art-tag--bottom">EVENT → STATE → EVIDENCE</div>
          <div className="art-index">FIG. 001 / SYSTEMS THINKING</div>
        </div>
        <div className="hero-bottomline">
          <span>BACKEND ENGINEERING</span><span>ARCHITECTURE</span><span>RELIABILITY</span><span>INTELLIGENCE TOOLS</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-inner">
          <p className="section-label">THE THROUGH-LINE</p>
          <p className="intro-statement">Different products. One obsession: <span>make complex work observable, recoverable, and trustworthy.</span></p>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">SELECTED WORK / 2024—2026</p>
            <h2>Systems I’m<br /><em>putting into the world.</em></h2>
          </div>
          <p className="heading-aside">Not a gallery of mockups. These are real codebases, with real constraints, trade-offs, and work still in progress.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={project.className} key={project.name}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="proof-list">
                {project.proof.map((item) => <li key={item}><span>↳</span>{item}</li>)}
              </ul>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.name === "Compflow" ? "Read engineering case study" : "Explore repository"} <span>↗</span></a>
            </article>
          ))}
        </div>
        <p className="work-footnote"><span>↳</span> Status is intentionally explicit: a working codebase, a prototype, and a polished public product are not the same thing.</p>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-wrap approach-inner">
          <div className="approach-heading">
            <p className="section-label">HOW I THINK</p>
            <h2>Good engineering<br />is <em>honest engineering.</em></h2>
            <p>I’m drawn to the invisible parts that decide whether software can be trusted: boundaries, durable state, evidence, and recovery.</p>
          </div>
          <div className="principles">
            {principles.map((principle) => (
              <div className="principle" key={principle.n}>
                <span className="principle-number">{principle.n}</span>
                <div><h3>{principle.title}</h3><p>{principle.body}</p></div>
                <span className="principle-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-marker">A NOTE ON THE WORK</div>
        <div className="about-copy">
          <h2>I think in systems.<br /><em>I build in public.</em></h2>
          <p>
            My work spans backend platforms, compliance automation, business operations,
            research systems, and intelligence tooling. I’m most useful where the problem
            is bigger than a single screen: translating messy real-world processes into
            software with clear state, durable records, and testable behavior.
          </p>
          <p>
            I’m open to backend and systems engineering roles, paid implementation work,
            technical consulting, and partnerships where careful execution matters.
          </p>
          <div className="about-links">
            <a href="https://github.com/Udene1" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://x.com/smart_web3boy" target="_blank" rel="noreferrer">X / @smart_web3boy <span>↗</span></a>
            <a href="https://www.linkedin.com/in/kenneth-elioku-890467137/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="mailto:kennethikechukwu159@gmail.com">Email <span>↗</span></a>
          </div>
        </div>
        <div className="about-side">
          <div className="side-label">CURRENTLY INTERESTED IN</div>
          <p>Backend systems</p><p>Distributed workflows</p><p>Evidence infrastructure</p><p>Automation that closes loops</p>
          <div className="side-rule" />
          <div className="side-label">WORKING PRINCIPLE</div>
          <blockquote>“The system should correspond to reality.”</blockquote>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-wrap contact-inner">
          <p className="section-label">HAVE A REAL PROBLEM TO SOLVE?</p>
          <h2>Let’s build something<br /><em>that can be relied on.</em></h2>
          <a className="button button--light" href="mailto:kennethikechukwu159@gmail.com">Email me about your project <span>↗</span></a>
          <div className="contact-channels" aria-label="Other ways to connect">
            <a href="https://x.com/smart_web3boy" target="_blank" rel="noreferrer">X / @smart_web3boy <span>↗</span></a>
            <a href="https://www.linkedin.com/in/kenneth-elioku-890467137/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
          <div className="contact-aside">Roles · Projects · Consulting · Partnerships</div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="wordmark" href="#top"><span className="wordmark-mark">KE</span><span>Kenneth Elioku</span></a>
        <p>Independent by practice. Systems-minded by nature.</p>
        <div className="footer-right"><span>© {new Date().getFullYear()} Kenneth Elioku</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
