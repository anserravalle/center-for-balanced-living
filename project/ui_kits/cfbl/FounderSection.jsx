/* global React */
function FounderSection() {
  return (
    <section className="founder" aria-label="About Dr. Serravalle">
      <div className="founder-grid">
        <div className="founder-portrait">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <p className="placeholder-label">Portrait</p>
              <p className="placeholder-copy">Editorial photograph of Dr. Serravalle</p>
            </div>
          </div>
        </div>
        <div className="founder-content">
          <p className="eyebrow">About</p>
          <h2>Dr. Angela (Niki) Serravalle, Psy.D., LPCMH, NCC</h2>
          <p>
            A trauma-informed psychologist, educator, and writer. Founder of the
            Center for Balanced Living, the CFBL Institute, and the MUSA author
            platform.
          </p>
          <p>
            Clinical work happens at the practice; teaching happens at the
            Institute; the writing lives at MUSA. Three properties, one
            commitment to careful, evidence-based care.
          </p>
          <a href="#" className="btn btn-secondary">Read full bio</a>
        </div>
      </div>
    </section>
  );
}
window.FounderSection = FounderSection;
