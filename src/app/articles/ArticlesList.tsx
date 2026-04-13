'use client'
import Link from 'next/link'
import { useState } from 'react'

type Article = {
  slug: string
  title: string
  category: string
  date: string
  desc: string
}

function ArticleRow({ article }: { article: Article }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      href={`/articles/${article.slug}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '28px 32px',
        background: hov ? 'rgba(245,158,11,0.03)' : '#02040f',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 24,
        textDecoration: 'none',
        transition: 'background .2s',
      }}
    >
      <div style={{ flex: 1 }}>
        <span style={{
          fontFamily: 'monospace', fontSize: 9,
          background: 'rgba(245,158,11,0.1)', color: '#f59e0b',
          padding: '3px 10px', borderRadius: 20, letterSpacing: '0.1em',
          display: 'inline-block', marginBottom: 10,
        }}>
          {article.category}
        </span>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#fafafa', lineHeight: 1.4, fontFamily: 'Georgia,serif', marginBottom: 8 }}>
          {article.title}
        </div>
        <div style={{ fontSize: 13, color: 'rgba(220,220,220,0.55)', lineHeight: 1.6 }}>
          {article.desc}
        </div>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(200,200,200,0.35)', whiteSpace: 'nowrap', paddingTop: 4 }}>
        {article.date}
      </div>
    </Link>
  )
}

export default function ArticlesList({ articles }: { articles: Article[] }) {
  return (
    <div style={{ background: '#02040f', color: '#fafafa', minHeight: '100vh', padding: '130px 5% 100px', fontFamily: 'system-ui,sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(245,158,11,0.55)', letterSpacing: '0.3em', marginBottom: 12 }}>
          // PHYSICIAN&apos;S DESK
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', fontFamily: 'Georgia,serif', marginBottom: 52 }}>
          Articles & <span style={{ color: '#f59e0b' }}>Insights</span>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'rgba(245,158,11,0.1)' }}>
          {articles.map(a => <ArticleRow key={a.slug} article={a} />)}
        </div>
      </div>
    </div>
  )
}
