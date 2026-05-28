/* global React */
function Article() {
  return (
    <article className="article" aria-label="Essay">
      {/* Back to Essays link at top */}
      <a href="#" className="article-back">
        <span aria-hidden="true">&#8592;</span> Back to Essays
      </a>

      {/* Article header */}
      <header className="article-head">
        <p className="article-num">Essay No. 12</p>

        {/* DM Serif Display h1 title, large */}
        <h1 className="article-title">On Memory and the Body: What Trauma Teaches Us About Time</h1>

        {/* Walnut uppercase byline */}
        <p className="article-byline">Angela Serravalle &nbsp;&middot;&nbsp; May 2026 &nbsp;&middot;&nbsp; 18 min read</p>

        {/* Ochre rule below title/byline */}
        <hr className="article-title-rule" aria-hidden="true" />
      </header>

      {/* Article body */}
      <div className="article-body">
        {/* Drop cap on first letter via .dropcap class */}
        <p className="dropcap">
          The body keeps a record that the mind is still learning to read. In the
          clinical hour, I have come to understand this not as metaphor but as
          mechanism: the way a patient will describe a memory she does not
          consciously hold, the way her shoulders move before her words arrive,
          the way the nervous system narrates in a language the prefrontal cortex
          was not invited to translate. Trauma, it turns out, does not behave like
          ordinary memory. It refuses sequence. It resists the tidy retrospective
          coherence that ordinary remembering provides.
        </p>
        <p>
          When we speak of traumatic memory, we tend to speak of its pathology — the
          flashback, the intrusion, the hypervigilance that makes the past a present
          event. These are real. But what interests me more, clinically and as a
          writer, is the structure of traumatic time itself: the way it collapses
          distinctions the rest of us take for granted. The distinction between then
          and now. Between here and there. Between what happened and what is
          happening. A patient who was harmed at seven years old is also, in some
          measurable neurobiological sense, still seven in the parts of herself she
          has not been able to integrate. This is not a figure of speech.
        </p>

        {/* Pull quote: DM Serif Display, Ochre rules above and below */}
        <blockquote className="pullquote">
          <p>
            What we call composure is sometimes the body refusing to translate —
            and the refusal is, in its own way, a kind of integrity.
          </p>
        </blockquote>

        <p>
          I think often about what the French psychoanalyst Jean Laplanche called
          the &ldquo;enigmatic signifier&rdquo; — the communication from one person to another
          that arrives with more meaning than the sender consciously intended, that
          embeds itself in the receiver and demands, across a lifetime, to be
          metabolized. Trauma works something like this. It arrives as an event,
          but it lives as a presence. The body, having received something it cannot
          process, stores it undigested — not archived, not resolved, but suspended.
          Time does not pass for it the way time passes for the rest of the self.
        </p>
        <p>
          What this means clinically is that the therapeutic task is not primarily
          one of narration — telling the story, finding the words, constructing the
          coherent account. Narration can help, and sometimes it is what the person
          most needs. But in complex and developmental trauma presentations, the
          story has often already been told, sometimes hundreds of times, without
          resolution. The telling is not the problem. The problem is time — the body
          that cannot locate the past in the past, cannot receive the evidence that
          it is now safe, cannot integrate the interruption of the original event
          into the ongoing sequence of a life.
        </p>
        <p>
          The work I find most useful in those cases is not narrative. It is
          relational, somatic, and slow. It is the work of being present without
          requiring the body to produce an account. It is the work, sometimes, of
          sitting in a room with another person and doing nothing except refusing
          to be frightened by what she carries.
        </p>
      </div>

      {/* Article footer: author bio + back link */}
      <footer className="article-foot">
        <a href="#" className="article-foot-back">
          <span aria-hidden="true">&#8592;</span> Back to Essays
        </a>
        <p className="article-foot-byline">
          Angela Serravalle is a licensed psychologist and founder of{' '}
          <a href="#">Center for Balanced Living</a> in Middletown, Delaware.
          She teaches at the <a href="#">CFBL Institute</a> and writes at{' '}
          <a href="#">MUSA</a>.
        </p>
      </footer>
    </article>
  );
}
window.Article = Article;
