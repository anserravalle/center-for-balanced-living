/* global React */
const { useState } = React;

function Header() {
  const [open, setOpen] = useState(null);
  const items = [
    {
      label: 'For Clients',
      children: ['Therapy', 'Psychological Evaluations', 'Groups', 'Consultation', 'Meet the Team', 'FAQ', 'Contact'],
    },
    {
      label: 'For Professionals',
      children: ['CFBL Institute', 'Trainings', 'Workshops', 'Consultation', 'Supervision', 'Resources'],
    },
    {
      label: 'MUSA',
      children: ['Books', 'Essays', 'Publications', 'Speaking', 'Author Bio'],
    },
    { label: 'About' },
    { label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="brand-lockup" aria-label="Center for Balanced Living home">
          <img src="../../assets/cfbl-logo-rainbow.png" alt="" className="brand-mark" />
          <span className="brand-text">
            <span className="brand-line-1">Center for</span>
            <span className="brand-line-2">Balanced Living</span>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Primary">
          {items.map((it) => (
            <div
              key={it.label}
              className={`nav-item${open === it.label ? ' is-open' : ''}`}
              onMouseEnter={() => it.children && setOpen(it.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="nav-link" type="button">
                {it.label}
                {it.children ? <span className="caret" aria-hidden="true">·</span> : null}
              </button>
              {it.children && open === it.label ? (
                <div className="mega-menu" role="menu">
                  <ul>
                    {it.children.map((c) => (
                      <li key={c}>
                        <a href="#" role="menuitem">{c}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="header-utility">
          <a href="#" className="util-link">Client Portal</a>
          <a href="#" className="btn btn-primary btn-sm">Schedule</a>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
