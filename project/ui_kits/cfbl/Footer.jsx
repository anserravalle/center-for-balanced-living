/* global React */
function Footer() {
  const brandCols = [
    {
      title: 'Center for Balanced Living',
      sub: 'Clinical Practice',
      links: [
        { label: 'Therapy Services', href: '#' },
        { label: 'Psychological Evaluations', href: '#' },
        { label: 'Groups and Workshops', href: '#' },
        { label: 'Consultation', href: '#' },
        { label: 'Meet the Team', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'CFBL Institute',
      sub: 'Continuing Education',
      links: [
        { label: 'Course Catalog', href: '#' },
        { label: 'Live Workshops', href: '#' },
        { label: 'Self-Study Courses', href: '#' },
        { label: 'CE Information', href: '#' },
        { label: 'Resources for Clinicians', href: '#' },
      ],
    },
    {
      title: 'MUSA',
      sub: 'Essays and Books',
      links: [
        { label: 'Essays', href: '#' },
        { label: 'Books', href: '#' },
        { label: 'Speaking', href: '#' },
        { label: 'Author Bio', href: '#' },
        { label: 'Subscribe', href: '#' },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-cols">
        {/* Brand identity + contact column */}
        <div className="footer-col footer-brand-col">
          <img
            className="footer-brand-logo"
            src="../../assets/cfbl-logo-rainbow.png"
            alt="Center for Balanced Living"
          />
          <p className="footer-brand-name">Center for Balanced Living</p>
          <p className="footer-brand-tagline">
            Trauma-informed psychology for adults, adolescents, and children.
            Middletown, Delaware.
          </p>
          <p className="footer-contact-item">Middletown, DE 19709</p>
          <p className="footer-contact-item">(302) 555-0140</p>
          <p className="footer-contact-item">hello@balancedlivingde.com</p>
        </div>

        {/* Three-brand columns */}
        {brandCols.map((c) => (
          <div key={c.title} className="footer-col">
            <p className="footer-col-sub">{c.sub}</p>
            <h4 className="footer-col-title">{c.title}</h4>
            <ul>
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
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
