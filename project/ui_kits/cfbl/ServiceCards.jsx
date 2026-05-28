/* global React */
function ServiceCards() {
  const services = [
    { kicker: 'Service', title: 'Trauma-Informed Therapy', copy: 'Individual therapy for adults and adolescents navigating trauma, anxiety, grief, and identity.' },
    { kicker: 'Service', title: 'Psychological Evaluation', copy: 'Comprehensive evaluations for children, adolescents, and adults — diagnostic clarity that informs care.' },
    { kicker: 'Service', title: 'Groups & Workshops', copy: 'Community-grounded groups focused on grief, parenting, and somatic resourcing.' },
    { kicker: 'Service', title: 'Consultation', copy: 'Case consultation for clinicians and referral conversations for families.' },
  ];
  return (
    <section className="services" aria-label="Featured services">
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
            <a className="service-link" href="#">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
window.ServiceCards = ServiceCards;
