/* global React */
function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Left column: text content */}
      <div className="hero-text-col">
        <p className="hero-kicker">Trauma-Informed Psychology · Middletown, DE</p>
        <h1 className="hero-headline">Healing Happens In Relationship.</h1>
        <hr className="hero-rule" aria-hidden="true" />
        <p className="hero-lede">
          We pair evidence-based care with warmth, attunement, and a holistic
          approach to mind, body, and spirit.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary">Schedule a Consultation</a>
          <a href="#" className="btn btn-secondary">Meet the Team</a>
        </div>
      </div>

      {/* Right column: photographic image */}
      <div className="hero-image-col" aria-hidden="true">
        <img
          src="../../assets/cfbl-tree-portrait.jpeg"
          alt=""
          loading="eager"
        />
        <div className="hero-image-veil"></div>
      </div>
    </section>
  );
}
window.Hero = Hero;
