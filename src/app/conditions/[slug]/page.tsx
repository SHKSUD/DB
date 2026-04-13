import { Metadata } from 'next'
import { CONDITIONS } from '@/data/conditions'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const condition = CONDITIONS.find(c => c.slug === params.slug)
  return {
    title: `${condition?.category ?? 'Condition'} Specialist Delhi | Dr. Debashis Das — AIIMS`,
    description: `Dr. Debashis Das treats ${condition?.category.toLowerCase() ?? 'this condition'} with AIIMS-grade precision. Consult online or in-person.`,
  }
}

export async function generateStaticParams() {
  return CONDITIONS.map(c => ({ slug: c.slug }))
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
  const condition = CONDITIONS.find(c => c.slug === params.slug)
  if (!condition) return <div>Not found</div>

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: condition.items.map(item => ({
      '@type': 'Question',
      name: `Does Dr. Das treat ${item}?`,
      acceptedAnswer: { '@type': 'Answer', text: `Yes. Dr. Das is an AIIMS-trained Consultant Physician and Diabetologist who provides expert consultation for ${item}. Book an appointment to discuss your specific situation.` },
    })),
  }

  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'system-ui,sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 12 }}>// CONDITIONS TREATED</div>
        <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'Georgia,serif', marginBottom: 48 }}>
          <span style={{ fontSize: 36 }}>{condition.emoji}</span> {condition.category}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(245,158,11,0.08)', marginBottom: 48 }}>
          {condition.items.map(item => (
            <div key={item} style={{ padding: '18px 24px', background: '#02040f', fontSize: 14, color: 'rgba(220,220,220,0.75)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: '#f59e0b', fontSize: 10 }}>✓</span> {item}
            </div>
          ))}
        </div>
        <a href="/book" style={{ display: 'inline-block', fontFamily: 'monospace', padding: '14px 32px', background: '#f59e0b', color: '#1a0a00', fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none' }}>
          BOOK CONSULTATION →
        </a>
      </div>
    </div>
  )
}
