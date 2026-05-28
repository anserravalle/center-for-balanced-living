/* global React */
function MusaFooter() {
  return (
    <footer className="musa-footer">
      <hr className="rule-ochre" />
      <div className="musa-footer-inner">
        <div className="mf-brand">
          <p className="musa-wordmark-sm">MUSA</p>
          <p className="mf-tagline">Essays and books by Angela Serravalle.</p>
        </div>
        <div className="mf-cols">
          <div>
            <h4>The Writing</h4>
            <ul>
              <li><a href="#">Essays</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Publications</a></li>
              <li><a href="#">Speaking</a></li>
            </ul>
          </div>
          <div>
            <h4>Elsewhere</h4>
            <ul>
              <li><a href="#">Center for Balanced Living &mdash; clinical practice</a></li>
              <li><a href="#">CFBL Institute &mdash; continuing education</a></li>
              <li><a href="#">Contact the author</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="musa-footer-bottom">
        <p>&copy; 2026 Angela Serravalle</p>
        <ul>
          <li><a href="#">Colophon</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </footer>
  );
}
window.MusaFooter = MusaFooter;
