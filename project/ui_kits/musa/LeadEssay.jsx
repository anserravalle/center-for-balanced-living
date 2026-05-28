/* global React */
function LeadEssay({ onOpen }) {
  return (
    <section className="lead-essay" aria-label="Featured essay">
      {/* Left column: text content */}
      <div className="lead-essay-content">
        <p className="lead-num">Essay No. 12 &nbsp;&middot;&nbsp; Latest</p>

        {/* Large DM Serif Display title, h1-sized */}
        <h1 className="lead-title">On Memory and the Body: What Trauma Teaches Us About Time</h1>

        {/* Ochre 1px rule above byline */}
        <hr className="lead-rule" aria-hidden="true" />

        {/* Walnut uppercase byline */}
        <p className="lead-byline">Angela Serravalle &nbsp;&middot;&nbsp; May 2026</p>

        {/* EB Garamond lede — italic, 3-4 sentences */}
        <p className="lead-lede">
          The body keeps a record that the mind is still learning to read.
          Traumatic memory does not behave like ordinary memory — it refuses sequence,
          resists narrative, and surfaces not as recollection but as repetition.
          What clinical practice reveals about the strangeness of time after trauma.
        </p>

        {/* "Read the essay" in Oxblood */}
        <button type="button" onClick={onOpen} className="lead-open">
          Read the essay <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Right column: image (musa-book-icon as placeholder) */}
      <div className="lead-essay-image" aria-hidden="true">
        <img
          src="../../assets/musa-book-icon.png"
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  );
}
window.LeadEssay = LeadEssay;
