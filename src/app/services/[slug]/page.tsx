import { Metadata } from 'next'
import { SERVICES } from '@/data/conditions'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find(s => s.slug === params.slug)
  return {
    title: `${service?.title ?? 'Service'} | Dr. Debashis Das — AIIMS New Delhi`,
    description: service?.desc ?? 'Specialist medical service by Dr. Debashis Das.',
  }
}

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug)
  if (!service) return <div>Service not found</div>
  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 12 }}>{service.tag}</div>
        <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'Georgia,serif', marginBottom: 24 }}>
          {service.title}
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(220,220,220,0.7)', lineHeight: 1.9, maxWidth: 560 }}>{service.desc}</p>
        <a href="/book" style={{ display: 'inline-block', marginTop: 40, fontFamily: 'monospace', padding: '14px 32px', background: '#f59e0b', color: '#1a0a00', fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', borderRadius: 2, textDecoration: 'none' }}>
          BOOK THIS CONSULTATION →
        </a>
      </div>
    </div>
  )
}
