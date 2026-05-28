/* global React */
function MastheadHero() {
  return (
    <section className="inst-masthead" aria-label="CFBL Institute masthead">
      <div className="masthead-grid">
        {/* Type-led left column — Cream background, no photographic image */}
        <div className="masthead-copy">
          <p className="meta">Continuing Education for the Practicing Clinician</p>
          <h1>Clinically Rigorous Training for Trauma-Informed Practice.</h1>
          <p className="lede">
            Live workshops, on-demand courses, and consultation for licensed clinicians.
            Taught by a practicing psychologist who carries an active caseload.
          </p>
          <div className="masthead-actions">
            <a href="#" className="btn btn-primary">View Trainings</a>
            <a href="#" className="btn btn-secondary">CE Information</a>
          </div>
        </div>

        {/* Right column: official Institute logo lockup */}
        <aside className="masthead-aside" aria-label="CFBL Institute logo">
          <img
            src="../../assets/institute-logo.png"
            alt="CFBL Institute — Center for Balanced Living"
          />
        </aside>
      </div>
    </section>
  );
}
window.MastheadHero = MastheadHero;
