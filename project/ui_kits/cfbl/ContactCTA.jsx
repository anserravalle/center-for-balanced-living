/* global React */
function ContactCTA() {
  return (
    <section className="contact-cta" aria-label="Schedule a consultation">
      <div className="cta-inner">
        <h2>Ready to take the first step?</h2>
        <p>
          We&rsquo;re accepting new clients. Schedule a free 15-minute consultation
          to discuss fit, scheduling, and next steps.
        </p>
        <div className="cta-actions">
          <a href="#" className="btn btn-primary">Schedule a Consultation</a>
          <a href="#" className="btn btn-secondary">Contact Us</a>
        </div>
        <p className="cta-meta">Middletown, DE &middot; In-person and telehealth &middot; Most insurance accepted</p>
      </div>
    </section>
  );
}
window.ContactCTA = ContactCTA;
