/* global React */
function Masthead({ view, setView }) {
  const items = [
    { id: 'archive', label: 'Essays' },
    { id: 'article', label: 'Current Essay' },
    { id: 'books',   label: 'Books' },
    { id: 'bio',     label: 'Author' },
  ];
  return (
    <header className="musa-masthead">
      <div className="masthead-rule" aria-hidden="true"></div>
      <div className="masthead-inner">
        <p className="masthead-issue">No. 04 &nbsp;·&nbsp; Fall 2026 &nbsp;·&nbsp; Essays &amp; Publications</p>
        <a href="#" className="musa-wordmark" aria-label="MUSA home">MUSA</a>
        <p className="masthead-byline">By Angela Serravalle</p>
      </div>
      <nav className="masthead-nav" aria-label="Primary">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => setView(it.id)}
            className={`masthead-nav-link${view === it.id ? ' is-active' : ''}`}
          >{it.label}</button>
        ))}
      </nav>
      <div className="masthead-rule" aria-hidden="true"></div>
    </header>
  );
}
window.Masthead = Masthead;
