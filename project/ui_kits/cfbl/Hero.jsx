/* global React */
function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-media">
        <img src="../../assets/cfbl-tree-portrait.jpeg" alt="" />
        <div className="hero-veil" aria-hidden="true"></div>
      </div>
      <div className="hero-content">
        <p className="hero-kicker">Trauma-Informed Psychology · Middletown, DE</p>
        <h1 className="hero-headline">Healing Happens In Relationship.</h1>
        <p className="hero-lede">
          We pair evidence-based care with warmth, attunement, and a holistic
          approach to mind, body, and spirit.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary">Schedule a Consultation</a>
          <a href="#" className="btn btn-secondary">Meet the Team</a>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
