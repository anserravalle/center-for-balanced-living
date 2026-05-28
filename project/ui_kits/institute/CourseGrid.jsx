/* global React */
function TrainingCard({ tag, ce, title, date, format, presenter, price, abstract, onOpen }) {
  return (
    <article className="training-card">
      <header className="tc-head">
        <span className="tc-tag">{tag}</span>
        <span className="tc-ce">{ce}</span>
      </header>
      <h3 className="tc-title">{title}</h3>
      <p className="tc-meta">{date} &nbsp;·&nbsp; {format} &nbsp;·&nbsp; {price}</p>
      <p className="tc-abstract">{abstract}</p>
      <footer className="tc-foot">
        <span className="tc-presenter">{presenter}</span>
        <button type="button" className="tc-link" onClick={onOpen}>View course →</button>
      </footer>
    </article>
  );
}

function CourseGrid({ onOpenDetail }) {
  const courses = [
    {
      tag: 'Live Workshop',
      ce: '6 CE',
      title: 'Assessment for the Trauma Clinician',
      date: 'November 14, 2026',
      format: 'Online · Zoom',
      presenter: 'Angela Serravalle, Psy.D.',
      price: '$245',
      abstract: 'Integrating psychometric reasoning with somatic and nervous-system intervention. For licensed clinicians working with complex trauma presentations.',
    },
    {
      tag: 'On-Demand',
      ce: '3 CE',
      title: 'Differential Diagnosis in Complex PTSD',
      date: 'Available now',
      format: 'Self-paced',
      presenter: 'Angela Serravalle, Psy.D.',
      price: '$135',
      abstract: 'A structured framework for distinguishing C-PTSD from BPD, dissociative presentations, and adjacent diagnostic categories.',
    },
    {
      tag: 'Cohort',
      ce: '12 CE',
      title: 'Foundations of Polyvagal-Informed Practice',
      date: 'Jan–Mar 2026',
      format: '6-week cohort',
      presenter: 'Angela Serravalle, Psy.D.',
      price: '$595',
      abstract: 'A small-cohort applied program. Required: foundational training in trauma or attachment-based therapy.',
    },
    {
      tag: 'Live Workshop',
      ce: '4 CE',
      title: 'Working with Dissociation in Session',
      date: 'February 21, 2026',
      format: 'Online · Zoom',
      presenter: 'Angela Serravalle, Psy.D.',
      price: '$185',
      abstract: 'Practical skills for clinicians: tracking dissociative states, structured interventions, and consultation case material.',
    },
    {
      tag: 'Supervision',
      ce: 'Per-hour',
      title: 'Individual Clinical Supervision',
      date: 'Ongoing',
      format: 'Online · 50-min',
      presenter: 'Angela Serravalle, Psy.D.',
      price: '$185 / hr',
      abstract: 'Licensed clinicians and supervisees seeking consultation on complex trauma cases, assessment integration, or clinical reasoning.',
    },
    {
      tag: 'On-Demand',
      ce: '2 CE',
      title: 'Ethics in Trauma-Informed Care',
      date: 'Available now',
      format: 'Self-paced',
      presenter: 'Angela Serravalle, Psy.D.',
      price: '$95',
      abstract: 'Boundaries, dual relationships, and informed consent in trauma practice. Meets state-level ethics CE for most jurisdictions.',
    },
  ];
  return (
    <section className="course-grid-section" aria-label="Course catalog">
      <header className="cg-head">
        <h2>Catalog · Fall 2026</h2>
        <p className="cg-count">Showing {courses.length} of {courses.length} courses</p>
      </header>
      <div className="course-grid">
        {courses.map((c, i) => (
          <TrainingCard key={i} {...c} onOpen={onOpenDetail} />
        ))}
      </div>
    </section>
  );
}
window.TrainingCard = TrainingCard;
window.CourseGrid = CourseGrid;
