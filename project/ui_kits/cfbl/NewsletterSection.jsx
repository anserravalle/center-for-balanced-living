/* global React */
function NewsletterSection() {
  const { useState } = React;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="newsletter-section" aria-label="Newsletter signup">
      <div className="newsletter-inner">
        <p className="eyebrow">Stay Connected</p>
        <h2>Stay connected</h2>
        <p>
          Updates from the practice, new trainings from the Institute, and new essays
          from MUSA. No more than twice a month.
        </p>
        {submitted ? (
          <p style={{ fontFamily: 'var(--cfbl-font-body)', color: 'var(--cfbl-deep-navy)', fontWeight: 500 }}>
            You&rsquo;re subscribed. Thank you.
          </p>
        ) : (
          <form className="nl-form" onSubmit={handleSubmit}>
            <label htmlFor="nl-email" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Email address
            </label>
            <input
              id="nl-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
window.NewsletterSection = NewsletterSection;
