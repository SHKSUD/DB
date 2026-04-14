import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Debashis Das | MBBS, MD AIIMS, PGP Diabetology — Medicare Hospital Marol Naka',
  description: 'Dr. Debashis Das — MBBS, MD Pharmacology (AIIMS New Delhi), PGP Diabetology (USA), MBA (UK). Consultant Physician & Diabetologist at Medicare Hospital, Marol Naka.',
}

export default function About() {
  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 12 }}>// MEDICARE HOSPITAL · MAROL NAKA</div>
        <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'Georgia,serif', marginBottom: 8 }}>
          Dr. Debashis <span style={{ color: '#f59e0b' }}>Das</span>
        </h1>
        <p style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(245,158,11,0.6)', letterSpacing: '0.1em', marginBottom: 52 }}>
          CONSULTANT PHYSICIAN & DIABETOLOGIST
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fafafa', fontFamily: 'Georgia,serif', marginBottom: 24 }}>Qualifications</h2>
            {[
              { year: 'MBBS',  title: 'Bachelor of Medicine & Surgery',     sub: 'Medical degree — foundation of clinical practice' },
              { year: 'MD',    title: 'MD — Pharmacology',                  sub: 'All India Institute of Medical Sciences, New Delhi' },
              { year: 'PGP',   title: 'PGP Diabetology',                    sub: 'Postgraduate Programme — United States of America' },
              { year: 'MBA',   title: 'Master of Business Administration',  sub: 'United Kingdom' },
            ].map(({ year, title, sub }) => (
              <div key={year} style={{ display: 'flex', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#f59e0b', letterSpacing: '0.1em', minWidth: 44, paddingTop: 2 }}>{year}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fafafa' }}>{title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(200,200,200,0.5)', marginTop: 4 }}>{sub}</div>
                </div>
              </div>
            ))}

            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fafafa', fontFamily: 'Georgia,serif', marginBottom: 16, marginTop: 8 }}>Practice</h2>
            <div style={{ padding: '18px 20px', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, background: 'rgba(245,158,11,0.04)' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#fafafa', marginBottom: 4 }}>Medicare Hospital</div>
              <div style={{ fontSize: 13, color: 'rgba(200,200,200,0.6)', lineHeight: 1.7 }}>
                Marol Naka, next to HP Petrol Pump<br />
                Andheri East, Mumbai
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fafafa', fontFamily: 'Georgia,serif', marginBottom: 16 }}>The Approach</h2>
            <p style={{ fontSize: 14, color: 'rgba(200,200,200,0.7)', lineHeight: 1.9, marginBottom: 20 }}>
              Medicine, at its most rigorous, is the art of transforming data into decisions. Every consultation begins not with assumptions, but with measurement — pharmacogenomic profiles, biomarker panels, and longitudinal health data that reduce uncertainty at each step.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(200,200,200,0.7)', lineHeight: 1.9, marginBottom: 20 }}>
              The AIIMS training framework instilled a singular principle: the physician&apos;s duty is to the truth of a patient&apos;s biology, not to convention. Complex cases deserve complex thinking.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(200,200,200,0.7)', lineHeight: 1.9 }}>
              A postgraduate specialisation in Diabetology from the USA and an MBA from the UK add dimensions of both clinical depth and systematic care design — ensuring patients receive not just the right diagnosis, but the right plan.
            </p>

            <a href="/book" style={{ display: 'inline-block', marginTop: 36, fontFamily: 'monospace', padding: '14px 32px', background: '#f59e0b', color: '#1a0a00', fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none' }}>
              BOOK A CONSULTATION →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
