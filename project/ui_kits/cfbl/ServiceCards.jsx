/* global React */
function ServiceCards() {
  const services = [
    {
      kicker: 'Individual Therapy',
      title: 'Trauma-Informed Therapy',
      copy: 'Individual therapy for adults and adolescents navigating trauma, anxiety, grief, and identity. Evidence-based approaches tailored to your history and goals.',
      href: '#',
    },
    {
      kicker: 'Psychological Evaluation',
      title: 'Psychological Evaluations',
      copy: 'Comprehensive evaluations for children, adolescents, and adults. Diagnostic clarity that informs treatment planning, school supports, and clinical decision-making.',
      href: '#',
    },
    {
      kicker: 'Groups and Workshops',
      title: 'Group Therapy',
      copy: 'Community-grounded groups focused on grief, parenting, and somatic resourcing. Structured and time-limited, with open enrollment periods.',
      href: '#',
    },
    {
      kicker: 'Clinical Consultation',
      title: 'Consultation',
      copy: 'Case consultation for clinicians and referral conversations for families. Available by arrangement to licensed professionals and referring providers.',
      href: '#',
    },
  ];

  return (
    <section className="services" aria-label="Therapy and support services">
      <div className="section-head">
        <p className="eyebrow">For Clients</p>
        <h2>Care that is clinically grounded and relationally warm.</h2>
      </div>
      <div className="service-grid">
        {services.map((s) => (
          <article key={s.title} className="service-card">
            <p className="service-kicker">{s.kicker}</p>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-copy">{s.copy}</p>
            <a className="service-link" href={s.href}>
              Learn more <span className="arrow" aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
window.ServiceCards = ServiceCards;
