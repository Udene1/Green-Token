"use client";

const services = [
  {
    n: "01",
    title: "Backend & API Engineering",
    problem: "Your product needs dependable foundations—not another disconnected feature.",
    work: "API design and implementation, database modelling, integrations, business logic, and backend architecture.",
    outcome: "A backend your product and team can build on."
  },
  {
    n: "02",
    title: "Systems Reliability",
    problem: "Jobs fail silently, workflows get stuck, or production behaviour is difficult to explain.",
    work: "Production debugging, background processing, retries and recovery, observability, and cloud infrastructure.",
    outcome: "Clearer system state, safer recovery, and fewer operational surprises."
  },
  {
    n: "03",
    title: "Business Automation & Integrations",
    problem: "People are moving information between tools or repeating work that software should handle.",
    work: "Third-party API integrations, workflow automation, webhooks, data synchronisation, and operational tooling.",
    outcome: "Connected workflows with records you can inspect and trust."
  }
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-wrap">
        <div className="section-heading services-heading">
          <div>
            <p className="section-label">WAYS I CAN HELP</p>
            <h2>Engineering for<br /><em>real operational problems.</em></h2>
          </div>
          <p className="heading-aside">Bring me the workflow that is breaking, the integration that is missing, or the backend that needs to become dependable. We can start with a clearly scoped piece of work.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.n}>
              <span className="service-number">{service.n} / SERVICE</span>
              <h3>{service.title}</h3>
              <p className="service-problem">{service.problem}</p>
              <div className="service-detail"><span>WHAT I CAN DO</span><p>{service.work}</p></div>
              <div className="service-outcome"><span>THE AIM</span><p>{service.outcome}</p></div>
              <a className="service-link" href={`mailto:kennethikechukwu159@gmail.com?subject=${encodeURIComponent("Engineering project: " + service.title)}&body=${encodeURIComponent("Hi Kenneth, I would like to discuss a project.\n\nThe problem I need help with:\n\n")}`}>Discuss this work <span>↗</span></a>
            </article>
          ))}
        </div>
        <p className="services-note">I scope the problem before proposing a solution. No inflated claims, invented metrics, or unnecessary rebuilds.</p>
      </div>
    </section>
  );
}
