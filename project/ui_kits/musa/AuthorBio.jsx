/* global React */
function AuthorBio() {
  return (
    <section className="author-bio" aria-label="Author">
      <p className="bio-label">Author</p>
      <h2>Angela Serravalle</h2>
      <p className="bio-lede">
        I write essays on psychology, memory, identity, and the parts of being
        human that are slow to name. New writing here, monthly.
      </p>
      <p>
        I am a licensed psychologist in private practice in Middletown,
        Delaware. The clinical work is at <a href="#">Center for Balanced
        Living</a>; the continuing-education work is at the <a href="#">CFBL
        Institute</a>. MUSA is the writing &mdash; intellectually independent
        from the practice and the Institute so the essays can be read on their
        own terms.
      </p>
      <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="ml">Receive new essays by email</label>
        <div className="subscribe-row">
          <input id="ml" type="email" placeholder="you@example.com"/>
          <button type="submit">Subscribe</button>
        </div>
        <p className="subscribe-note">No marketing. New essays only. Unsubscribe at any time.</p>
      </form>
    </section>
  );
}
window.AuthorBio = AuthorBio;
