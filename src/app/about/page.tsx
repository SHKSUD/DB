import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Debashis Das | Consultant Physician & Diabetologist — AIIMS',
  description: 'Learn about Dr. Debashis Das — MD in Clinical Pharmacology from AIIMS New Delhi, specialising in Diabetology and Internal Medicine.',
}

export default function About() {
  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 12 }}>// ABOUT</div>
        <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'Georgia,serif', marginBottom: 48 }}>
          Dr. Debashis <span style={{ color: '#f59e0b' }}>Das</span>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fafafa', fontFamily: 'Georgia,serif', marginBottom: 16 }}>Academic Formation</h2>
            {[
              { year: 'AIIMS', title: 'MD — Clinical Pharmacology', sub: 'All India Institute of Medical Sciences, New Delhi' },
              { year: 'MBBS', title: 'Bachelor of Medicine & Surgery', sub: 'Premier Medical Institution' },
              { year: 'RES.', title: 'Residency — Internal Medicine', sub: 'Advanced Clinical Training Programme' },
            ].map(({ year, title, sub }) => (
              <div key={year} style={{ display: 'flex', gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(245,158,11,0.1)' }}>
                <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#f59e0b', letterSpacing: '0.1em', minWidth: 40, paddingTop: 2 }}>{year}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fafafa' }}>{title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(200,200,200,0.5)', marginTop: 4 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#fafafa', fontFamily: 'Georgia,serif', marginBottom: 16 }}>The Approach</h2>
            <p style={{ fontSize: 14, color: 'rgba(200,200,200,0.7)', lineHeight: 1.9, marginBottom: 20 }}>
              Medicine, at its most rigorous, is the art of transforming data into decisions. Every consultation begins not with assumptions, but with measurement — pharmacogenomic profiles, biomarker panels, and longitudinal health data that reduce uncertainty at each step.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(200,200,200,0.7)', lineHeight: 1.9 }}>
              The AIIMS training framework instilled a singular principle: the physician&apos;s duty is to the truth of a patient&apos;s biology, not to convention. Complex cases deserve complex thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
