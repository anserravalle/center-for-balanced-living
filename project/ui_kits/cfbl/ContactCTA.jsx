/* global React */
function ContactCTA() {
  return (
    <section className="contact-cta" aria-label="Contact">
      <div className="cta-inner">
        <h2>Ready to start? We&rsquo;ll meet you where you are.</h2>
        <p>Schedule a free consultation. We&rsquo;ll talk through fit, scheduling, and next steps.</p>
        <div className="cta-actions">
          <a href="#" className="btn btn-primary">Schedule a Consultation</a>
          <a href="#" className="btn btn-secondary">Send a Message</a>
        </div>
        <p className="cta-meta">Middletown, DE · In-person and telehealth · Most insurance accepted</p>
      </div>
    </section>
  );
}
window.ContactCTA = ContactCTA;
