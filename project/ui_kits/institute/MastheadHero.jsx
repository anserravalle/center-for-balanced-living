/* global React */
function MastheadHero() {
  return (
    <section className="inst-masthead">
      <div className="masthead-grid">
        <div className="masthead-copy">
          <p className="meta">Continuing Education · Established 2024</p>
          <h1>Clinically rigorous training for trauma-informed practice.</h1>
          <p className="lede">
            Live workshops, on-demand courses, and consultation for licensed clinicians.
            Taught by a practicing psychologist who carries a clinical caseload.
          </p>
          <div className="masthead-actions">
            <a href="#" className="btn btn-primary">View Trainings</a>
            <a href="#" className="btn btn-secondary">Apply for CE Credit</a>
          </div>
        </div>
        <aside className="masthead-aside">
          <img src="../../assets/institute-logo.png" alt="CFBL Institute &mdash; Professional training in trauma, healing, and integrative practice" />
        </aside>
      </div>
    </section>
  );
}
window.MastheadHero = MastheadHero;
