/* global React */
function EssayRow({ num, title, lede, date, length, onOpen }) {
  return (
    <li className="essay-row">
      <div className="er-num">No. {num}</div>
      <div className="er-body">
        <h2 className="er-title"><a href="#" onClick={(e) => { e.preventDefault(); onOpen && onOpen(); }}>{title}</a></h2>
        <p className="er-lede">{lede}</p>
        <p className="er-meta">{date} &nbsp;·&nbsp; {length}</p>
      </div>
    </li>
  );
}

function EssayList({ onOpen }) {
  const essays = [
    { num: '11', title: 'Inheritances', lede: 'On the grammar of grief and what it means to carry someone else\u2019s memory.', date: 'October 2026', length: '14 min' },
    { num: '10', title: 'The Practice of Attention', lede: 'A clinician\u2019s argument for slowness in a discipline obsessed with throughput.', date: 'September 2026', length: '11 min' },
    { num: '09', title: 'Permission, Conditional', lede: 'On the way trauma renegotiates the everyday contracts of being known.', date: 'August 2026', length: '9 min' },
    { num: '08', title: 'A Vocabulary for Silence', lede: 'The clinical vocabulary for dissociation feels small against what it tries to describe.', date: 'July 2026', length: '12 min' },
    { num: '07', title: 'The Body\u2019s Footnotes', lede: 'What somatic awareness looks like when it isn\u2019t marketed back to us as wellness.', date: 'June 2026', length: '10 min' },
  ];
  return (
    <section className="archive" aria-label="Essay archive">
      <header className="archive-head">
        <p className="archive-label">Archive · 2026</p>
        <h2>Essays</h2>
      </header>
      <ol className="essay-list">
        {essays.map((e) => (<EssayRow key={e.num} {...e} onOpen={onOpen} />))}
      </ol>
      <div className="archive-foot">
        <a href="#">View 2025 archive →</a>
      </div>
    </section>
  );
}
window.EssayRow = EssayRow;
window.EssayList = EssayList;
