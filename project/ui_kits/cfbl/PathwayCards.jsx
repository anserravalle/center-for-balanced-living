/* global React */
function PathwayCards() {
  const pathways = [
    {
      kicker: 'For Clients',
      title: 'Center for Balanced Living',
      copy: 'Therapy, psychological evaluation, groups, and consultation for individuals and families.',
      cta: 'Explore Clinical Services',
      tone: 'cfbl',
    },
    {
      kicker: 'For Professionals',
      title: 'CFBL Institute',
      copy: 'Continuing education in trauma-informed practice, assessment, and applied clinical reasoning.',
      cta: 'View Trainings & CE',
      tone: 'institute',
    },
    {
      kicker: 'For Readers',
      title: 'MUSA',
      copy: 'Books, essays, and longer-form writing on psychology, memory, and being human.',
      cta: 'Read the Essays',
      tone: 'musa',
    },
  ];

  return (
    <section className="pathways" aria-label="Three pathways">
      <div className="section-head">
        <p className="eyebrow">Three Pathways</p>
        <h2>One practice. Three doors.</h2>
      </div>
      <div className="pathway-grid">
        {pathways.map((p) => (
          <a key={p.title} href="#" className={`pathway-card tone-${p.tone}`}>
            <p className="pathway-kicker">{p.kicker}</p>
            <h3 className="pathway-title">{p.title}</h3>
            <p className="pathway-copy">{p.copy}</p>
            <span className="pathway-cta">{p.cta} →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
window.PathwayCards = PathwayCards;
