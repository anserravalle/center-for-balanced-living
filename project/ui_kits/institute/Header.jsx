/* global React */
const { useState } = React;

function Header({ view, setView }) {
  const items = ['Trainings', 'Workshops', 'Supervision', 'Resources', 'About'];
  return (
    <header className="inst-header">
      <div className="inst-header-inner">
        <a href="#" className="inst-lockup">
          <span className="lockup-small-caps">Center for Balanced Living</span>
          <span className="lockup-main">CFBL Institute</span>
        </a>
        <nav className="inst-nav" aria-label="Primary">
          {items.map((it) => (
            <a key={it} href="#" className="inst-nav-link">{it}</a>
          ))}
        </nav>
        <div className="inst-utility">
          <a href="#" className="inst-util-link">CE Information</a>
          <a href="#" className="btn btn-primary btn-sm">Register</a>
        </div>
      </div>
      <div className="inst-tabs" role="tablist">
        <button role="tab" aria-selected={view === 'catalog'} className={`inst-tab${view === 'catalog' ? ' is-active' : ''}`} onClick={() => setView('catalog')}>Catalog</button>
        <button role="tab" aria-selected={view === 'detail'}  className={`inst-tab${view === 'detail'  ? ' is-active' : ''}`} onClick={() => setView('detail')}>Course Detail</button>
      </div>
    </header>
  );
}
window.InstHeader = Header;
