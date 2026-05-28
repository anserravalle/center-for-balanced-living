/* global React */
function InstitutePreview() {
  return (
    <section className="brand-institute cross-brand inst-preview" aria-label="CFBL Institute preview">
      <div className="cb-inner">
        <div className="cb-content">
          <p className="eyebrow inst-eyebrow">CFBL Institute · For Professionals</p>
          <h2>Continuing education in trauma-informed practice.</h2>
          <p className="cb-lede">
            Live workshops, on-demand courses, and consultation for licensed clinicians.
            Taught by a practicing psychologist who carries a clinical caseload.
          </p>
          <a href="#" className="btn btn-primary">View Trainings</a>
        </div>
        <aside className="cb-feature">
          <p className="utility">Featured · 6 CE Credits</p>
          <h3>Assessment for the Trauma Clinician</h3>
          <p className="cb-feature-meta">Nov 14 · Online · $245</p>
          <p className="cb-feature-abstract">
            Integrating psychometric reasoning with somatic and nervous-system intervention.
            A six-hour workshop for LCSWs, LPCs, psychologists, and PMHNPs.
          </p>
          <a href="#" className="cb-feature-link">Register →</a>
        </aside>
      </div>
    </section>
  );
}
window.InstitutePreview = InstitutePreview;
