/* global React */
function MusaPreview() {
  const essays = [
    { num: '12', title: 'The Quiet Room', lede: 'What we call composure is sometimes the body refusing to translate.' },
    { num: '11', title: 'Inheritances', lede: 'On the grammar of grief and what it means to carry someone else\u2019s memory.' },
    { num: '10', title: 'The Practice of Attention', lede: 'A clinician\u2019s argument for slowness in a discipline obsessed with throughput.' },
  ];
  return (
    <section className="brand-musa cross-brand musa-preview" aria-label="MUSA preview">
      <div className="cb-inner musa-inner">
        <header className="musa-head">
          <p className="byline">MUSA · Essays &amp; Publications</p>
          <h2>New writing on psychology, memory, and being human.</h2>
          <p className="cb-lede">By Angela Serravalle</p>
        </header>
        <ol className="essay-list">
          {essays.map((e) => (
            <li key={e.num} className="essay-row">
              <span className="essay-num">No. {e.num}</span>
              <div className="essay-body">
                <h3 className="essay-title"><a href="#">{e.title}</a></h3>
                <p className="essay-lede">{e.lede}</p>
              </div>
            </li>
          ))}
        </ol>
        <a href="#" className="musa-more">Read the full archive →</a>
      </div>
    </section>
  );
}
window.MusaPreview = MusaPreview;
