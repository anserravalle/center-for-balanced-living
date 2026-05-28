/* global React */
function InstFooter() {
  return (
    <footer className="inst-footer">
      <div className="inst-footer-inner">
        <div className="inst-footer-brand">
          <p className="lockup-small-caps">Center for Balanced Living</p>
          <p className="lockup-main">CFBL Institute</p>
          <p className="footer-tagline">Professional training in trauma, healing, and integrative practice.</p>
        </div>
        <div className="inst-footer-cols">
          <div>
            <h4>Catalog</h4>
            <ul><li><a href="#">Live Workshops</a></li><li><a href="#">On-Demand</a></li><li><a href="#">Cohorts</a></li><li><a href="#">Supervision</a></li></ul>
          </div>
          <div>
            <h4>CE Information</h4>
            <ul><li><a href="#">Accreditation</a></li><li><a href="#">Apply for Credit</a></li><li><a href="#">Refund Policy</a></li></ul>
          </div>
          <div>
            <h4>From the practice</h4>
            <ul><li><a href="#">Center for Balanced Living</a></li><li><a href="#">MUSA &mdash; Essays</a></li><li><a href="#">Contact</a></li></ul>
          </div>
        </div>
      </div>
      <div className="inst-footer-bottom">
        <p>&copy; 2026 CFBL Institute. A division of Center for Balanced Living.</p>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Accessibility</a></li>
        </ul>
      </div>
    </footer>
  );
}
window.InstFooter = InstFooter;
