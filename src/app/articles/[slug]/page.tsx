import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Replace with Sanity fetch when live: const article = await getArticleBySlug(params.slug)
  return {
    title: `Article | Dr. Debashis Das`,
    description: 'Health article by Dr. Debashis Das — Consultant Physician & Diabetologist, AIIMS New Delhi.',
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'Georgia,serif' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 32 }}>DR. DEBASHIS DAS · AIIMS NEW DELHI</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 48, color: '#fafafa' }}>
          {/* Replace with article.title when Sanity is connected */}
          Article content will load from Sanity CMS
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(220,220,220,0.7)', lineHeight: 1.9 }}>
          Connect Sanity CMS and call <code>getArticleBySlug(&apos;{params.slug}&apos;)</code> to render the full article here.
          Use <code>next-sanity</code>&apos;s <code>PortableText</code> component to render the body blocks.
        </p>
      </div>
    </div>
  )
}
