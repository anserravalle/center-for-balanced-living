/* global React */

function TrainingCard({ kicker, title, description, date, format, price, onOpen }) {
  return (
    <article className="training-card">
      {/* Inter uppercase kicker: CE hours and format */}
      <p className="tc-kicker">{kicker}</p>

      {/* Cormorant SC title in Forest */}
      <h3 className="tc-title">{title}</h3>

      {/* Lora description (2 sentences) */}
      <p className="tc-description">{description}</p>

      {/* Date and format metadata in Inter small */}
      <p className="tc-meta">{date} &nbsp;&middot;&nbsp; {format} &nbsp;&middot;&nbsp; {price}</p>

      {/* Register link in Forest */}
      <button type="button" className="tc-register" onClick={onOpen}>
        Register <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

function CourseGrid({ onOpenDetail }) {
  const courses = [
    {
      kicker: '6.0 CE HOURS · LIVE ONLINE',
      title: 'Trauma-Informed Assessment: Integrating the ACEs Framework',
      description: 'Integrating psychometric reasoning with somatic and nervous-system awareness in the assessment process. A six-hour workshop for licensed clinicians working with trauma presentations.',
      date: 'November 14, 2026',
      format: 'Live Online',
      price: '$245',
    },
    {
      kicker: '3.0 CE HOURS · SELF-STUDY',
      title: 'Somatic Approaches in Clinical Practice',
      description: 'An introduction to somatic theory for talk-therapy clinicians, covering body-based methods and their evidence base. Includes recorded demonstrations and case material.',
      date: 'Available now',
      format: 'Self-Study',
      price: '$95',
    },
    {
      kicker: '12.0 CE HOURS · LIVE ONLINE INTENSIVE',
      title: 'Complex PTSD and Developmental Trauma',
      description: 'A two-day intensive on complex and developmental trauma presentations, covering assessment, differential diagnosis, and treatment sequencing. Prerequisite: foundational trauma training.',
      date: 'January 9–10, 2027',
      format: 'Live Online Intensive',
      price: '$395',
    },
    {
      kicker: '4.0 CE HOURS · LIVE ONLINE',
      title: 'Working with Dissociation in Session',
      description: 'Practical skills for clinicians managing dissociative states in the clinical hour, including tracking, structured interventions, and consultation case examples.',
      date: 'February 21, 2027',
      format: 'Live Online',
      price: '$185',
    },
    {
      kicker: '6.0 CE HOURS · LIVE ONLINE',
      title: 'Attachment Theory for the Practicing Clinician',
      description: 'Translating attachment research into clinical practice with adults and adolescents. Covers assessment of attachment patterns, relational ruptures, and the therapeutic relationship as intervention.',
      date: 'March 15, 2027',
      format: 'Live Online',
      price: '$245',
    },
    {
      kicker: '2.0 CE HOURS · SELF-STUDY',
      title: 'Ethics in Trauma-Informed Care',
      description: 'Boundaries, dual relationships, and informed consent in trauma practice. Meets state-level ethics CE requirements for most jurisdictions.',
      date: 'Available now',
      format: 'Self-Study',
      price: '$75',
    },
  ];

  return (
    <section className="course-grid-section" aria-label="Course catalog">
      <header className="cg-head">
        <h2>Catalog &nbsp;&middot;&nbsp; 2026–2027</h2>
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
