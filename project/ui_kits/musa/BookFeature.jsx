/* global React */
function BookFeature() {
  return (
    <section className="book-feature" aria-label="Featured book">
      <div className="bf-grid">
        <div className="bf-cover" aria-hidden="true">
          <div className="bf-cover-inner">
            <p className="bf-cover-author">A. Serravalle</p>
            <h3 className="bf-cover-title">The Quiet Room</h3>
            <p className="bf-cover-sub">essays</p>
          </div>
        </div>
        <div className="bf-copy">
          <p className="bf-label">Forthcoming · Spring 2027</p>
          <h2>The Quiet Room</h2>
          <p className="bf-sub">Essays on memory, grief, and the rooms in which we wait.</p>
          <p>
            A collection of twelve essays first published on MUSA between 2024
            and 2026, gathered with new material and an extended afterword.
          </p>
          <ul className="bf-meta">
            <li><span>Publisher</span><em>Independent</em></li>
            <li><span>Length</span><em>248 pages</em></li>
            <li><span>Format</span><em>Hardcover, paperback, ebook</em></li>
          </ul>
          <a href="#" className="bf-link">Pre-order details →</a>
        </div>
      </div>
    </section>
  );
}
window.BookFeature = BookFeature;
