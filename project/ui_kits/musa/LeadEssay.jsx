/* global React */
function LeadEssay({ onOpen }) {
  return (
    <section className="lead-essay" aria-label="Featured essay">
      <p className="lead-num">Essay No. 12</p>
      <h1 className="lead-title">The Quiet Room</h1>
      <p className="lead-byline">By Angela Serravalle &nbsp;·&nbsp; November 2026</p>
      <p className="lead-lede">
        What we call composure is sometimes the body refusing to translate.
        An essay on grief, language, and the rooms in which we wait.
      </p>
      <button type="button" onClick={onOpen} className="lead-open">Read the essay →</button>
    </section>
  );
}
window.LeadEssay = LeadEssay;
