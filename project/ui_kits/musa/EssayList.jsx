/* global React */
function EssayRow({ num, title, lede, date, length, onOpen }) {
  return (
    <li className="essay-row">
      {/* Walnut date: uppercase Inter small */}
      <div className="er-num">{date}</div>
      <div className="er-body">
        {/* DM Serif Display title */}
        <h2 className="er-title">
          <a href="#" onClick={(e) => { e.preventDefault(); onOpen && onOpen(); }}>
            {title}
          </a>
        </h2>
        {/* EB Garamond lede — 1-2 sentences */}
        <p className="er-lede">{lede}</p>
        <p className="er-meta">{length} read</p>
        {/* Oxblood "Read" link */}
        <a href="#" className="er-read" onClick={(e) => { e.preventDefault(); onOpen && onOpen(); }}>
          Read <span aria-hidden="true">&#8594;</span>
        </a>
      </div>
    </li>
  );
}

function EssayList({ onOpen }) {
  const essays = [
    {
      num: '11',
      title: 'The Diagnostic Gaze: When Assessment Becomes Care',
      lede: 'What changes when we treat the act of diagnosis as a clinical encounter rather than an administrative task.',
      date: 'April 2026',
      length: '14 min',
    },
    {
      num: '10',
      title: 'Grief Without a Name: Ambiguous Loss in Contemporary Life',
      lede: 'Pauline Boss gave us the term. The clinical hour is still working out what to do with it — and with the losses that have no ceremony.',
      date: 'March 2026',
      length: '11 min',
    },
    {
      num: '09',
      title: 'What It Means to Witness: Notes from a Clinical Practice',
      lede: 'On bearing witness as a clinical and ethical act — and what it costs to do it carefully.',
      date: 'February 2026',
      length: '9 min',
    },
    {
      num: '08',
      title: 'Inheritances',
      lede: 'On the grammar of grief and what it means to carry someone else’s memory as if it were your own.',
      date: 'January 2026',
      length: '12 min',
    },
    {
      num: '07',
      title: 'The Practice of Attention',
      lede: 'A clinician’s argument for slowness in a discipline obsessed with throughput.',
      date: 'December 2025',
      length: '10 min',
    },
  ];

  return (
    <section className="archive" aria-label="Essay archive">
      <header className="archive-head">
        <p className="archive-label">Archive &nbsp;&middot;&nbsp; 2026</p>
        <h2>Essays</h2>
      </header>
      <ol className="essay-list">
        {essays.map((e) => (
          <EssayRow key={e.num} {...e} onOpen={onOpen} />
        ))}
      </ol>
      <div className="archive-foot">
        <a href="#">View 2025 archive &#8594;</a>
      </div>
    </section>
  );
}
window.EssayRow = EssayRow;
window.EssayList = EssayList;
