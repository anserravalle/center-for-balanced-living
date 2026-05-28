/* global React */
function FacultyBlock() {
  return (
    <aside className="faculty">
      <p className="faculty-label">Presenter</p>
      <h3>Angela Serravalle, Psy.D., LPCMH, NCC</h3>
      <p>
        Licensed psychologist in private practice at the Center for Balanced Living
        in Middletown, Delaware. Director of the CFBL Institute. Specialization in
        trauma-informed psychological assessment and somatically-integrated practice.
      </p>
      <ul className="faculty-creds">
        <li>Psy.D., Clinical Psychology · La Salle University</li>
        <li>Licensed Professional Counselor of Mental Health, Delaware</li>
        <li>National Certified Counselor (NCC)</li>
      </ul>
    </aside>
  );
}

function CourseDetail() {
  return (
    <article className="course-detail">
      <header className="cd-head">
        <p className="cd-breadcrumb">Catalog &nbsp;/&nbsp; Live Workshops &nbsp;/&nbsp; Assessment</p>
        <p className="cd-meta">Live Workshop · 6 CE Credits · November 14, 2026</p>
        <h1>Assessment for the Trauma Clinician</h1>
        <p className="cd-sub">A six-hour workshop on integrating psychometric reasoning with somatic and nervous-system intervention.</p>
        <div className="cd-actions">
          <a href="#" className="btn btn-primary">Register · $245</a>
          <a href="#" className="btn btn-secondary">Apply for CE Credit</a>
        </div>
      </header>

      <div className="cd-body">
        <section>
          <h2>Abstract</h2>
          <p>
            Psychological assessment offers a disciplined vocabulary for what is often
            already happening implicitly in trauma-informed treatment. This workshop
            walks clinicians through an integrated framework: where assessment data
            informs case formulation, where it informs intervention choice, and where
            it should be set aside in favor of relational and somatic information.
          </p>
          <p>
            The course is designed for licensed clinicians who carry a caseload and
            who want a structured way to bring psychometric reasoning into existing
            trauma-informed practice without retraining as an assessment specialist.
          </p>
        </section>

        <section>
          <h2>Learning Objectives</h2>
          <ol className="objectives">
            <li>Articulate three points of integration between psychological assessment and somatic-trauma intervention.</li>
            <li>Apply a structured framework for differential diagnosis in complex PTSD presentations.</li>
            <li>Identify the limits of psychometric data in dissociative and developmentally complex cases.</li>
            <li>Demonstrate two consultation strategies for clinicians newer to assessment-informed practice.</li>
          </ol>
        </section>

        <section>
          <h2>Prerequisites &amp; Audience</h2>
          <p>
            Licensed mental health clinicians: psychologists, LCSWs, LPCs, LMFTs,
            LMHCs, PMHNPs, MDs. Graduate students in clinical and counseling
            psychology may attend with adviser approval. Foundational training in
            trauma-informed practice is assumed.
          </p>
        </section>

        <section>
          <h2>CE Credit &amp; Accreditation</h2>
          <p>
            This program offers 6.0 CE credits for licensed psychologists,
            counselors, and social workers. Approval listings and APA continuing
            education statements are available on request.
          </p>
        </section>
      </div>

      <FacultyBlock />
    </article>
  );
}
window.FacultyBlock = FacultyBlock;
window.CourseDetail = CourseDetail;
