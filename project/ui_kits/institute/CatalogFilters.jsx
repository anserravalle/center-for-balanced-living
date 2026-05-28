/* global React */
const { useState: useStateF } = React;

function CatalogFilters() {
  const [active, setActive] = useStateF({ format: 'All', topic: 'All', ce: 'All' });
  const formats = ['All', 'Live Online', 'On-Demand', 'In-Person', 'Cohort'];
  const topics  = ['All', 'Trauma', 'Assessment', 'Somatic', 'Supervision', 'Ethics'];
  const ce      = ['All', '1 CE', '3 CE', '6 CE', '12+ CE'];
  const Row = ({ label, opts, k }) => (
    <div className="filter-row">
      <span className="filter-label">{label}</span>
      <div className="filter-chips">
        {opts.map((o) => (
          <button
            key={o}
            type="button"
            className={`chip${active[k] === o ? ' is-active' : ''}`}
            onClick={() => setActive({ ...active, [k]: o })}
          >{o}</button>
        ))}
      </div>
    </div>
  );
  return (
    <section className="filters" aria-label="Catalog filters">
      <Row label="Format" opts={formats} k="format" />
      <Row label="Topic"  opts={topics}  k="topic" />
      <Row label="CE"     opts={ce}      k="ce" />
    </section>
  );
}
window.CatalogFilters = CatalogFilters;
