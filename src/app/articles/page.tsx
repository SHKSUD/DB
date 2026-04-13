import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Articles & Health Insights | Dr. Debashis Das',
  description: 'Evidence-based health articles on diabetes, metabolic disorders, and general medicine by Dr. Debashis Das — Consultant Physician & Diabetologist, AIIMS New Delhi.',
}

export default async function ArticlesPage() {
  // Replace with: const articles = await getArticles() when Sanity is live
  const articles = [
    { slug: 'understanding-hba1c', title: 'Understanding HbA1c: what your number really means', category: 'DIABETES', date: '12 Mar 2025', desc: 'HbA1c is the gold-standard measure of long-term blood sugar control. Here is what the number actually means and why it matters.' },
    { slug: 'metformin-2025', title: 'Metformin in 2025: what the new clinical evidence tells us', category: 'PHARMACOLOGY', date: '28 Feb 2025', desc: 'A review of the latest trials on metformin safety, efficacy, and emerging indications beyond Type 2 Diabetes.' },
    { slug: 'glycaemic-index-vs-load', title: 'Glycaemic index vs glycaemic load — a practical guide', category: 'NUTRITION', date: '14 Feb 2025', desc: 'The difference between GI and GL matters enormously for meal planning in diabetes. A clear, practical breakdown.' },
  ]

  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 12 }}>// PHYSICIAN&apos;S DESK</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'Georgia,serif', marginBottom: 52 }}>
          Articles & <span style={{ color: '#f59e0b' }}>Insights</span>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(245,158,11,0.1)' }}>
          {articles.map(a => (
            <Link key={a.slug} href={`/articles/${a.slug}`}
              style={{ padding: '28px 32px', background: '#02040f', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,158,11,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = '#02040f')}
            >
              <div style={{ flex: 1 }}>
                <span style={{ fontFamily: 'monospace', fontSize: 9, background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '3px 10px', borderRadius: 20, letterSpacing: '0.1em', display: 'inline-block', marginBottom: 10 }}>{a.category}</span>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#fafafa', lineHeight: 1.4, fontFamily: 'Georgia,serif', marginBottom: 8 }}>{a.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(220,220,220,0.55)', lineHeight: 1.6 }}>{a.desc}</div>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(200,200,200,0.35)', whiteSpace: 'nowrap', paddingTop: 4 }}>{a.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
