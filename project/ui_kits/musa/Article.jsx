/* global React */
function Article() {
  return (
    <article className="article">
      <header className="article-head">
        <p className="article-num">Essay No. 12</p>
        <h1 className="article-title">The Quiet Room</h1>
        <p className="article-byline">By Angela Serravalle &nbsp;·&nbsp; November 2026 &nbsp;·&nbsp; 18 min read</p>
      </header>
      <div className="article-body">
        <p className="dropcap">
          There is a room in the clinic where I see most of my patients. It is
          small and unbeautiful, lit by a single lamp I bought because the
          overhead fluorescent was, in the language of the body, hostile. The
          chair I sit in is older than the practice. The chair my patients sit
          in is newer. We talk for fifty minutes, or sometimes we don't talk,
          and the room holds whatever happens with the absence of opinion that
          is its primary qualification.
        </p>
        <p>
          When a patient is in the deep middle of something, she will sometimes
          go very still. The body, finding no acceptable response, declines to
          produce one. The clinical literature calls this dissociation, freeze,
          a parasympathetic shutdown — and these names are useful, the way
          maps are useful when you are not yourself the territory. But I have
          come to think that what we see in those moments is not a failure of
          composure. It is a refusal to translate.
        </p>
        <blockquote className="pullquote">
          <p>What we call composure is sometimes the body refusing to translate.</p>
        </blockquote>
        <p>
          Translation requires equivalence: a word in this language for the
          word in that one, a gesture here that corresponds to the gesture
          there. The body, when something has happened to it that has no
          equivalent in language, has two options. It can produce a noise that
          everyone in the room will receive as inadequate — a sob, a tremor,
          the unspecific shaking — or it can decline.
        </p>
        <p>
          I have come to read the decline as a kind of integrity. Not absence,
          not avoidance, not the failure of the therapeutic moment, but a body
          insisting on its own pace. The work, then, is not to break the
          stillness but to be in it without flinching, and to mark, when the
          patient returns, that she did not return alone.
        </p>
      </div>
      <footer className="article-foot">
        <hr className="rule-ochre"/>
        <p className="article-foot-byline">Angela Serravalle is a licensed psychologist in Middletown, Delaware. Her clinical work is at <a href="#">Center for Balanced Living</a>.</p>
      </footer>
    </article>
  );
}
window.Article = Article;
