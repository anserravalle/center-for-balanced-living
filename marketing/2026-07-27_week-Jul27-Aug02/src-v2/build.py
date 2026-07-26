# Generates photo-forward, bolder social slides for all posts across 3 brand palettes.
HEAD = '''<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="fonts/fonts-embedded.css">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#777;display:flex;flex-wrap:wrap;gap:24px;padding:24px}
.canvas{position:relative;overflow:hidden;display:flex;flex-direction:column}
.sq{width:1080px;height:1080px}.st{width:1080px;height:1920px}
.pad{padding:110px 96px}.stack{display:flex;flex-direction:column}
.spread{justify-content:space-between}.grow{flex:1}.ctr{align-items:center;text-align:center}
.kick{font-family:'Inter',sans-serif;text-transform:uppercase;letter-spacing:.2em;font-weight:600;font-size:22px;color:var(--acc)}
.disp{font-family:var(--disp);color:var(--blk);font-weight:500;line-height:1.06;letter-spacing:.01em}
.bodyf{font-family:var(--body);color:var(--ink);line-height:1.5}
.badge{display:inline-flex;align-self:flex-start;font-family:'Inter',sans-serif;font-weight:600;font-size:23px;letter-spacing:.08em;padding:13px 28px;background:var(--blk);color:var(--bi);border-radius:2px;text-transform:uppercase}
.bignum{position:absolute;font-family:var(--disp);font-weight:700;font-size:600px;line-height:1;color:var(--blk);opacity:.09;top:-90px;right:-10px}
.ruleacc{border:0;height:3px;width:92px;background:var(--acc)}
.cta{display:inline-flex;align-self:flex-start;font-family:'Inter',sans-serif;font-weight:600;letter-spacing:.08em;text-transform:uppercase;font-size:25px;padding:24px 50px;border-radius:2px}
.dlabel{font-family:'Inter',sans-serif;text-transform:uppercase;letter-spacing:.14em;font-size:20px;font-weight:600}
.dline{display:flex;align-items:baseline;gap:14px}
.swipe{position:absolute;bottom:52px;right:60px;font-family:'Inter',sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:.1em;font-size:22px;color:var(--acc)}
.tag{position:absolute;top:56px;left:96px;font-family:'Inter',sans-serif;text-transform:uppercase;letter-spacing:.2em;font-size:20px;font-weight:600;color:var(--acc)}
.pz{position:relative;overflow:hidden}
.framehint{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:16px;font-family:'Inter',sans-serif;color:var(--blk);opacity:.5;text-transform:uppercase;letter-spacing:.16em;font-size:22px;font-weight:600;text-align:center}
.framehint .bx{width:110px;height:110px;border:2px dashed currentColor;border-radius:6px}
</style></head><body>
'''

def pvars(p):
    return (f"--g:{p['g']};--ga:{p['ga']};--blk:{p['blk']};--bi:{p['bi']};--acc:{p['acc']};"
            f"--mist:{p['mist']};--ink:{p['ink']};--disp:{p['disp']};--body:{p['body']}")

PAL = {
 'inst': dict(g='#EAE2D0',ga='#B8C9BC',blk='#3D5A52',bi='#F0EAE0',acc='#6F8F7A',mist='#B8C9BC',
              ink='#2A3530',disp="'Cormorant SC',serif",body="'Lora',serif"),
 'cfbl': dict(g='#FFFFFF',ga='#F5E7D6',blk='#2B5275',bi='#FFFFFF',acc='#9D654E',mist='#EED9C5',
              ink='#1F2A33',disp="'Cormorant SC',serif",body="'Montserrat',sans-serif"),
 'musa': dict(g='#F1E8D8',ga='#EDE0C8',blk='#6E1F23',bi='#F1E8D8',acc='#C5A572',mist='#EDE0C8',
              ink='#1F1A16',disp="'DM Serif Display',serif",body="'EB Garamond',serif"),
}

def leaf(color, fo=0.16, so=0.30, w=300, pos='left:-70px;bottom:-120px'):
    return (f'<div style="position:absolute;{pos};width:{w}px;color:{color};pointer-events:none">'
      '<svg viewBox="0 0 320 520" xmlns="http://www.w3.org/2000/svg"><g>'
      f'<path d="M160 12 C 70 120,44 320,160 508 C 276 320,250 120,160 12 Z" fill="currentColor" fill-opacity="{fo}"/>'
      f'<path d="M160 30 L160 486" stroke="currentColor" stroke-opacity="{so}" stroke-width="3" fill="none"/>'
      f'<g stroke="currentColor" stroke-opacity="{so*0.8:.2f}" stroke-width="2.4" fill="none">'
      '<path d="M160 90 C 120 96,100 120,92 150"/><path d="M160 90 C 200 96,220 120,228 150"/>'
      '<path d="M160 170 C 112 178,88 206,78 244"/><path d="M160 170 C 208 178,232 206,242 244"/>'
      '<path d="M160 258 C 118 268,96 296,88 332"/><path d="M160 258 C 202 268,224 296,232 332"/>'
      '<path d="M160 348 C 128 358,110 384,104 414"/><path d="M160 348 C 192 358,210 384,216 414"/>'
      '</g></g></svg></div>')

# ---- Slide templates ----
def cover(pal, name, brand, title, subtitle, vertical=False, tsize=82):
    p=PAL[pal]; size='st' if vertical else 'sq'
    ph = 900 if vertical else 600
    return (f'<div class="canvas {size} stack" data-name="{name}" data-omit="true" style="{pvars(p)};background:none">'
      f'<div class="pz" style="height:{ph}px;background:none"></div>'
      f'<div class="stack spread grow" style="background:var(--blk);padding:64px 80px">'
      f'<div class="kick" style="color:var(--mist)">{brand}</div>'
      f'<h1 class="disp" style="color:var(--bi);font-size:{tsize}px">{title}</h1>'
      f'<p class="bodyf" style="color:var(--mist);font-style:italic;font-size:30px;max-width:760px">{subtitle}</p>'
      f'</div></div>')

def content(pal, name, badge, headline, body, num, alt=False, hsize=74):
    p=PAL[pal]; bg = p['ga'] if alt else p['g']
    return (f'<div class="canvas sq stack spread pad" data-name="{name}" style="{pvars(p)};background:{bg}">'
      f'<div class="bignum">{num}</div>{leaf(p["blk"],0.13,0.28,300)}'
      f'<div class="badge" style="position:relative;z-index:2">{badge}</div>'
      f'<div class="stack grow" style="justify-content:center;position:relative;z-index:2">'
      f'<h2 class="disp" style="font-size:{hsize}px;color:var(--blk)">{headline}</h2></div>'
      f'<p class="bodyf" style="position:relative;z-index:2;max-width:850px;font-size:34px">{body}</p></div>')

def detail(pal, name, kicker, title, rows, cta, vertical=False):
    p=PAL[pal]; size='st' if vertical else 'sq'
    r=''.join(f'<div class="dline"><span class="dlabel" style="color:var(--mist);width:230px">{a}</span>'
              f'<span class="bodyf" style="color:var(--bi);font-size:34px">{b}</span></div>' for a,b in rows)
    return (f'<div class="canvas {size} stack pad" data-name="{name}" style="{pvars(p)};background:var(--blk)">'
      f'{leaf(p["mist"],0.16,0.30,340,"right:-60px;top:-90px")}'
      f'<div class="stack grow spread" style="position:relative;z-index:2">'
      f'<div class="stack"><div class="kick" style="color:var(--mist)">{kicker}</div>'
      f'<hr class="ruleacc" style="background:var(--mist);margin:28px 0 34px">'
      f'<h2 class="disp" style="color:var(--bi);font-size:74px">{title}</h2></div>'
      f'<div class="stack" style="gap:20px;margin:20px 0">{r}</div>'
      f'<div class="cta" style="background:var(--bi);color:var(--blk)">{cta}</div></div></div>')

def statement(pal, name, kicker, headline, sub, footer, hsize=104):
    # photo-frame single: transparent photo top, solid block bottom with big statement
    p=PAL[pal]
    return (f'<div class="canvas sq stack" data-name="{name}" data-omit="true" style="{pvars(p)};background:none">'
      f'<div class="pz" style="height:470px;background:none"></div>'
      f'<div class="stack grow spread" style="background:var(--blk);padding:70px 80px">'
      f'<div class="kick" style="color:var(--mist)">{kicker}</div>'
      f'<h1 class="disp" style="color:var(--bi);font-size:{hsize}px;line-height:1.02">{headline}</h1>'
      f'<p class="bodyf" style="color:var(--mist);font-style:italic;font-size:36px">{sub}</p>'
      f'<div class="kick" style="color:var(--mist);opacity:.85">{footer}</div></div></div>')

def cta_slide(pal, name, headline, sub, cta):
    p=PAL[pal]
    return (f'<div class="canvas sq stack spread pad ctr" data-name="{name}" style="{pvars(p)};background:var(--ga)">'
      f'<div></div><div class="stack ctr">'
      f'<h2 class="disp" style="font-size:82px;color:var(--blk)">{headline}</h2>'
      f'<hr class="ruleacc" style="margin:40px 0">'
      f'<p class="bodyf" style="max-width:760px;font-size:34px">{sub}</p>'
      f'<div class="cta" style="background:var(--blk);color:var(--bi);margin-top:52px;align-self:center">{cta}</div>'
      f'</div><div class="kick">Center for Balanced Living</div></div>')

def choose(pal, name, prog, kicker, statement_txt):
    p=PAL[pal]
    return (f'<div class="canvas sq stack spread pad" data-name="{name}" style="{pvars(p)};background:{p["g"]}">'
      f'<div style="position:absolute;top:60px;right:64px" class="kick">{prog}</div>{leaf(p["blk"],0.12,0.26,280)}'
      f'<div class="stack grow" style="justify-content:center;position:relative;z-index:2">'
      f'<div class="kick">{kicker}</div><hr class="ruleacc" style="margin:36px 0">'
      f'<p class="disp" style="font-size:56px;color:var(--blk);max-width:900px;line-height:1.16">{statement_txt}</p></div>'
      f'<div class="kick" style="opacity:.7">CFBL Institute</div></div>')

def page(fname, slides):
    open(fname,'w').write(HEAD + '\n'.join(slides) + '\n</body></html>')

# ================= MON — Institute Foundations (green/cream) =================
mon=[cover('inst','01','CFBL Institute','Five Signs Your Trauma Framework May Be Too Modality-Dependent',
     'A strong model should guide your thinking—not replace it.', tsize=68)]
signs=[('Every presentation leads to the same intervention','When the treatment plan is determined primarily by the modality you know, formulation can become secondary.'),
 ('You struggle when the client does not respond as expected','A broader framework helps you consider readiness, stabilization, context, relationship, and treatment fit.'),
 ('You collect techniques without a clear sequence','More interventions do not necessarily create a coherent treatment plan.'),
 ('You know what to do, but not always why','Clinical reasoning should explain why an intervention is indicated now, for this client, in this context.'),
 ('You feel uncertain when modalities conflict','A trans-theoretical framework helps you evaluate competing recommendations rather than defaulting to one preferred model.')]
words=['ONE','TWO','THREE','FOUR','FIVE']
for i,(h,b) in enumerate(signs):
    mon.append(content('inst',f'{i+2:02d}',f'Sign {words[i]}',h,b,str(i+1),alt=(i%2==0)))
mon.append(detail('inst','07','Foundations of Trauma Therapy','Two-Day Live Virtual Intensive',
  [('Dates','September 18–19, 2026'),('Time','9:00 AM–5:00 PM ET'),('Credits','12 NBCC CE hours'),('Beta cohort','$200')],'Reserve Your Seat'))
page('m_mon.html',mon)

# ================= TUE — CFBL Evaluations (navy/white) =================
tue=[cover('cfbl','01','Center for Balanced Living','Not Every Psychological Evaluation Answers the Same Question',
     'The referral question shapes everything that follows.', tsize=64)]
evals=[('Educational Evaluation','Examines cognitive and academic functioning and may help inform IEP, 504, and school accommodations. It does not necessarily result in a clinical diagnosis.'),
 ('Psychological Evaluation','Examines emotional, behavioral, personality, and functional concerns to support diagnosis and treatment planning.'),
 ('Neuropsychological Evaluation','Examines brain–behavior relationships: attention, memory, language, executive functioning, visual-spatial, motor skills, and intelligence.'),
 ('Neurodevelopmental Evaluation','Examines developmental patterns and may help clarify autism, ADHD, developmental delays, and adaptive functioning.')]
for i,(h,b) in enumerate(evals):
    tue.append(content('cfbl',f'{i+2:02d}',f'Type 0{i+1}',h,b,f'0{i+1}',alt=(i%2==0),hsize=66))
tue.append(cta_slide('cfbl','06','The right evaluation begins with the right referral question.',
  'Read the full blog to understand which evaluation fits your question.','Read the Blog'))
page('m_tue.html',tue)

# ================= THU — CFBL Parenting recruitment (navy/white) =================
thu=[detail('cfbl','poster','Parenting With Purpose · Center for Balanced Living','A monthly virtual support group for parents of children & teens',
  [('Begins','Friday, August 21 · 5:00–6:00 PM'),('Meets','Virtually, once a month'),('Cost','Free to attend'),
   ('Facilitator','Brianna, Associate Counselor'),('Session One','Understanding Children’s & Teens’ Emotions')],'Contact CFBL to Register')]
# photo-frame version too
thu.append(statement('cfbl','frame','Parenting With Purpose','Strengthen How You Parent.',
  'A free monthly virtual support group. Begins August 21.','Center for Balanced Living', hsize=88))
page('m_thu.html',thu)

# ================= SAT — CFBL Community (navy/white) =================
sat=[statement('cfbl','frame','Center for Balanced Living','Parenting Is Personal.',
  'It does not have to be isolating.','Parenting With Purpose begins August 21', hsize=112)]
page('m_sat.html',sat)

# ================= SUN — Institute Comparison (green/cream) =================
sun=[cover('inst','01','CFBL Institute','Which CFBL Institute Training Is Right for You?','Two trainings. Two different clinical needs.', tsize=70)]
sun.append(choose('inst','02','01 / EMDR','Choose Nature-Based EMDR if…','You are already EMDR-trained and want to integrate nature more intentionally while strengthening clinical decision-making.'))
sun.append(detail('inst','03','Option One · Nature-Based EMDR','Nature-Based EMDR',
  [('Date','August 21, 2026'),('Time','12:00–3:00 PM ET'),('Format','Live via Zoom'),('Credits','3 EMDRIA Credits')],'Register'))
sun.append(choose('inst','04','02 / FOUNDATIONS','Choose Foundations of Trauma Therapy if…','You want a stronger framework for formulation and clinical decision-making across trauma modalities.'))
sun.append(detail('inst','05','Option Two · Foundations','Foundations of Trauma Therapy',
  [('Dates','September 18–19, 2026'),('Time','9:00 AM–5:00 PM ET'),('Credits','12 NBCC CE hours'),('Beta cohort','$200')],'Register'))
sun.append(content('inst','06','The Difference','Nature-Based EMDR deepens application. Foundations strengthens the framework.',
  'Nature-Based EMDR deepens a specific area of application. Foundations strengthens the framework beneath your broader trauma work.','·',alt=True,hsize=58))
sun.append(cta_slide('inst','07','Two trainings. Two different clinical needs.','Review both programs and choose the one that fits the clinical question you need answered.','Review Both'))
page('m_sun.html',sun)

# ================= FRI — Institute Reel frames (9:16, green) =================
fri=[cover('inst','hook','CFBL Institute','Before bringing nature into EMDR, ask three clinical questions.','', vertical=True, tsize=92)]
fri.append(detail('inst','endcard','Nature-Based EMDR','August 21',
  [('Time','12:00–3:00 PM ET'),('Format','Live via Zoom'),('Credits','3 EMDRIA Credits')],'Register Today', vertical=True))
page('m_fri.html',fri)

print("generated: m_mon m_tue m_thu m_sat m_sun m_fri")
