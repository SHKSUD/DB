'use client'
import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import { Activity, Brain, Microscope, Beaker, GradCap, Shield, Check } from '@/components/Icons'
import { CONDITIONS, SERVICES } from '@/data/conditions'

const NeuralCanvas = dynamic(() => import('@/components/NeuralCanvas'), { ssr: false })

function ConditionCard({ emoji, category, col, tagBg, tagText, items }: any) {
  const { t } = useTheme()
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: '26px 24px', border: `1px solid ${hov ? col + '0.4)' : t.BORDER}`, background: hov ? col + '0.05)' : t.BG2, borderRadius: 10, transition: 'all .28s', position: 'relative', overflow: 'hidden' }}>
      {hov && <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: `linear-gradient(90deg,transparent,${col}0.55),transparent)` }} />}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 20 }}>{emoji}</span>
        <span style={{ ...t.mono, fontSize: 9, background: tagBg, color: tagText, padding: '3px 10px', borderRadius: 20, letterSpacing: '0.1em' }}>{category.toUpperCase()}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {items.map((c: string) => (
          <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <span style={{ marginTop: 1, flexShrink: 0 }}><Check s={12} c={hov ? col + '0.85)' : t.TXT2} /></span>
            <span style={{ fontSize: 13, color: hov ? t.TXT : t.TXT2, lineHeight: 1.45, transition: 'color .2s' }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ title, desc, tag }: any) {
  const { t } = useTheme()
  const [hov, setHov] = useState(false)
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: '28px 24px', border: `1px solid ${hov ? 'rgba(245,158,11,0.45)' : t.BORDER}`, background: hov ? t.CARDGLOW : t.BG2, transition: 'all .28s', position: 'relative', overflow: 'hidden' }}>
      {hov && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(245,158,11,0.55),transparent)' }} />}
      <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', marginBottom: 10 }}>{tag}</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: t.TXT, marginBottom: 8, letterSpacing: '-0.01em' }}>{title}</div>
      <div style={{ fontSize: 13, color: t.TXT2, lineHeight: 1.65 }}>{desc}</div>
    </div>
  )
}

function HomePage() {
  const { t } = useTheme()
  return (
    <div style={{ background: t.BG, color: t.TXT, minHeight: '100vh', position: 'relative', overflowX: 'hidden', fontFamily: 'system-ui,sans-serif', transition: 'background .45s, color .3s' }}>
      <NeuralCanvas alpha={t.CANVASALPHA} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        {/* HERO */}
        <section id="practice" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '130px 5% 90px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ ...t.mono, fontSize: 10, color: t.MONOCOLOR, letterSpacing: '0.3em', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'inline-block', width: 28, height: 1, background: t.A }} />
                AIIMS NEW DELHI · MD CLINICAL PHARMACOLOGY
              </div>
              <h1 style={{ fontSize: 'clamp(48px,5.5vw,76px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 8, fontFamily: 'Georgia,serif' }}>
                <span style={{ color: t.TXT, display: 'block' }}>Consultant</span>
                <span style={{ color: t.A, display: 'block' }}>Physician &</span>
                <span style={{ color: t.TXT, display: 'block' }}>Diabetologist.</span>
              </h1>
              <p style={{ fontSize: 15, color: t.TXT2, lineHeight: 1.85, maxWidth: 460, margin: '22px 0 42px', fontFamily: 'Georgia,serif', fontStyle: 'italic' }}>
                AIIMS-trained specialist helping patients control diabetes, manage metabolic disorders, and navigate complex internal medicine — with evidence, precision, and care.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/book" style={{ ...t.mono, padding: '14px 32px', background: t.A, color: '#1a0a00', fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none' }}>BOOK CONSULTATION →</Link>
                <a href="#conditions" style={{ ...t.mono, padding: '14px 26px', background: 'transparent', border: `1px solid ${t.BORDER}`, color: t.TXT2, fontSize: 11, letterSpacing: '0.14em', borderRadius: 2, textDecoration: 'none' }}>WHO SHOULD CONSULT?</a>
              </div>
            </div>
            <div style={{ border: `1px solid ${t.BORDER}`, borderRadius: 8, background: t.BG2, padding: 40, position: 'relative', transition: 'background .4s' }}>
              <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.1em', position: 'absolute', top: 16, right: 16 }}>SECURE PROFILE</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
                <div style={{ width: 90, height: 90, borderRadius: '50%', border: '2px solid rgba(245,158,11,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(245,158,11,0.07)' }}>
                  <span style={{ fontSize: 24, fontFamily: 'Georgia,serif', fontWeight: 700, color: t.A }}>DD</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 21, fontWeight: 800, color: t.TXT, letterSpacing: '-0.02em', fontFamily: 'Georgia,serif' }}>Dr. Debashis Das</div>
                  <div style={{ ...t.mono, fontSize: 10, color: t.MONOCOLOR, letterSpacing: '0.13em', marginTop: 6 }}>MD · CONSULTANT PHYSICIAN & DIABETOLOGIST</div>
                </div>
                {[{ label: 'INSTITUTION', val: 'AIIMS New Delhi' }, { label: 'SPECIALITY', val: 'Diabetology & Internal Medicine' }, { label: 'PHARMACOLOGY', val: 'Clinical Pharmacology (MD)' }, { label: 'MODE', val: 'Video · In-person · Report review' }].map(({ label, val }) => (
                  <div key={label} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${t.BORDER}`, paddingBottom: 10 }}>
                    <span style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED, letterSpacing: '0.14em' }}>{label}</span>
                    <span style={{ fontSize: 12, color: t.TXT2, textAlign: 'right', maxWidth: '55%' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ borderTop: `1px solid ${t.BORDER}`, borderBottom: `1px solid ${t.BORDER}`, background: t.BG3 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: t.BORDER }}>
            {[{ n: '12+', l: 'Years in Practice' }, { n: 'AIIMS', l: 'Institution' }, { n: '4.9 ★', l: 'Patient Rating' }, { n: '500+', l: 'Cases Resolved' }].map(({ n, l }) => (
              <div key={l} style={{ padding: '36px 24px', background: t.BG, textAlign: 'center', transition: 'background .4s' }}>
                <div style={{ fontSize: 30, fontWeight: 900, color: t.A, letterSpacing: '-0.03em', fontFamily: 'Georgia,serif' }}>{n}</div>
                <div style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED, letterSpacing: '0.15em', marginTop: 6 }}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONDITIONS */}
        <section id="conditions" style={{ padding: '100px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.3em', marginBottom: 12 }}>// WHO SHOULD CONSULT DR. DAS?</div>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', color: t.TXT, fontFamily: 'Georgia,serif', marginBottom: 12 }}>
              Can Dr. Das help <span style={{ color: t.A }}>you?</span>
            </h2>
            <p style={{ fontSize: 15, color: t.TXT2, lineHeight: 1.8, maxWidth: 620, marginBottom: 52, fontFamily: 'Georgia,serif', fontStyle: 'italic' }}>
              If you or someone you know is dealing with any of the conditions below, a consultation could provide clarity, a precise diagnosis, or a better treatment plan.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {CONDITIONS.map((c, i) => <ConditionCard key={i} {...c} />)}
            </div>
            <div style={{ marginTop: 36, padding: '22px 28px', border: '1px solid rgba(245,158,11,0.22)', borderRadius: 8, background: 'rgba(245,158,11,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: t.TXT, marginBottom: 4 }}>Not sure if Dr. Das is the right specialist?</div>
                <div style={{ fontSize: 13, color: t.TXT2 }}>Book a brief ₹ 300 triage call — 10 minutes to assess if a full consultation is right for you.</div>
              </div>
              <Link href="/book" style={{ ...t.mono, padding: '12px 26px', background: t.A, color: '#1a0a00', fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none', whiteSpace: 'nowrap' }}>ASK FIRST →</Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ padding: '80px 5%', borderTop: `1px solid ${t.BORDER}`, background: t.BG3, transition: 'background .4s' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.3em', marginBottom: 12 }}>// CLINICAL PORTFOLIO</div>
            <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-0.04em', color: t.TXT, fontFamily: 'Georgia,serif', marginBottom: 48 }}>Services & <span style={{ color: t.A }}>Expertise</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: t.BORDER }}>
              {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
            </div>
          </div>
        </section>

        {/* ARTICLES PREVIEW */}
        <section id="articles" style={{ padding: '100px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.3em', marginBottom: 12 }}>// PHYSICIAN&apos;S DESK</div>
                <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-0.04em', color: t.TXT, fontFamily: 'Georgia,serif' }}>Articles & <span style={{ color: t.A }}>Insights</span></h2>
              </div>
              <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.1em', border: `1px solid ${t.BORDER}`, padding: '6px 14px', borderRadius: 2 }}>POWERED BY SANITY CMS</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
              {[{ tag: 'DIABETES', title: 'Understanding HbA1c: what your number really means', date: '12 Mar 2025', read: '4 min' }, { tag: 'PHARMACOLOGY', title: 'Metformin in 2025: what the new clinical evidence tells us', date: '28 Feb 2025', read: '6 min' }, { tag: 'NUTRITION', title: 'Glycaemic index vs glycaemic load — a practical guide', date: '14 Feb 2025', read: '5 min' }].map(({ tag, title, date, read }) => (
                <Link key={title} href="/articles" style={{ padding: '26px 22px', border: `1px solid ${t.BORDER}`, background: t.BG2, borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer', textDecoration: 'none', transition: 'border-color .2s' }}>
                  <span style={{ ...t.mono, fontSize: 9, background: 'rgba(245,158,11,0.1)', color: t.A, padding: '3px 10px', borderRadius: 20, letterSpacing: '0.1em', alignSelf: 'flex-start' }}>{tag}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: t.TXT, lineHeight: 1.5, fontFamily: 'Georgia,serif' }}>{title}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED }}>{date}</span>
                    <span style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR }}>{read} read</span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 28, textAlign: 'center' }}>
              <Link href="/articles" style={{ ...t.mono, background: 'transparent', border: `1px solid ${t.BORDER}`, color: t.TXT2, padding: '12px 32px', borderRadius: 2, fontSize: 10, letterSpacing: '0.15em', textDecoration: 'none', display: 'inline-block' }}>ALL ARTICLES →</Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '48px 5%', borderTop: `1px solid ${t.BORDER}`, background: t.FOOTERBG, transition: 'background .4s' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 40, marginBottom: 40 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: t.TXT, fontFamily: 'Georgia,serif', marginBottom: 6 }}>Dr. Debashis Das</div>
                <div style={{ ...t.mono, fontSize: 9, color: t.A, letterSpacing: '0.1em' }}>CONSULTANT PHYSICIAN & DIABETOLOGIST</div>
                <div style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED, letterSpacing: '0.08em', marginTop: 4 }}>AIIMS NEW DELHI</div>
              </div>
              {[{ heading: 'PRACTICE', links: [['About', '/about'], ['Services', '/services/diabetology'], ['Credentials', '/about']] }, { heading: 'CONDITIONS', links: [['Diabetes', '/conditions/diabetes'], ['Metabolic', '/conditions/metabolic-disorders'], ['Hypertension', '/conditions/hypertension']] }, { heading: 'CONSULT', links: [['Book a Session', '/book'], ['Articles', '/articles'], ['Privacy Policy', '/']] }].map(({ heading, links }) => (
                <div key={heading}>
                  <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', marginBottom: 14 }}>{heading}</div>
                  {links.map(([l, href]) => (<Link key={l} href={href} style={{ display: 'block', fontSize: 12, color: t.TXT2, marginBottom: 8, textDecoration: 'none' }}>{l}</Link>))}
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: t.BORDER, marginBottom: 24 }} />
            <div style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED, letterSpacing: '0.1em', textAlign: 'center' }}>© 2025 DR. DEBASHIS DAS · ALL RIGHTS RESERVED · SECURE · EVIDENCE-BASED · PRIVATE</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default function Home() {
  return <ThemeProvider><HomePage /></ThemeProvider>
}
