/* global React */
function Footer() {
  const cols = [
    {
      title: 'Center for Balanced Living',
      sub: 'Clinical Practice',
      links: ['Therapy', 'Psychological Evaluations', 'Groups & Workshops', 'Consultation', 'Meet the Team', 'FAQ', 'Contact'],
    },
    {
      title: 'CFBL Institute',
      sub: 'Continuing Education',
      links: ['Trainings', 'Workshops', 'Supervision', 'Resources for Clinicians', 'CE Information'],
    },
    {
      title: 'MUSA',
      sub: 'Essays & Books',
      links: ['Books', 'Essays', 'Publications', 'Speaking', 'Author Bio', 'Newsletter'],
    },
  ];
  return (
    <footer className="site-footer">
      <div className="footer-cols">
        {cols.map((c) => (
          <div key={c.title} className="footer-col">
            <p className="footer-col-sub">{c.sub}</p>
            <h4 className="footer-col-title">{c.title}</h4>
            <ul>
              {c.links.map((l) => (<li key={l}><a href="#">{l}</a></li>))}
            </ul>
          </div>
        ))}
        <div className="footer-col footer-contact">
          <p className="footer-col-sub">Contact</p>
          <h4 className="footer-col-title">Get in touch</h4>
          <p className="footer-line">Middletown, DE 19709</p>
          <p className="footer-line">(302) 555-0140</p>
          <p className="footer-line">hello@balancedlivingde.com</p>
          <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="nl">Updates</label>
            <div className="nl-row">
              <input id="nl" type="email" placeholder="you@example.com" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Center for Balanced Living. All rights reserved.</p>
        <ul className="footer-utility">
          <li><a href="#">Client Portal</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Accessibility Statement</a></li>
        </ul>
      </div>
    </footer>
  );
}
window.Footer = Footer;
