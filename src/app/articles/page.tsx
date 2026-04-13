import { Metadata } from 'next'
import ArticlesList from './ArticlesList'

export const metadata: Metadata = {
  title: 'Articles & Health Insights | Dr. Debashis Das',
  description: 'Evidence-based health articles on diabetes, metabolic disorders, and general medicine by Dr. Debashis Das — Consultant Physician & Diabetologist, AIIMS New Delhi.',
}

const articles = [
  { slug: 'understanding-hba1c', title: 'Understanding HbA1c: what your number really means', category: 'DIABETES', date: '12 Mar 2025', desc: 'HbA1c is the gold-standard measure of long-term blood sugar control. Here is what the number actually means and why it matters.' },
  { slug: 'metformin-2025', title: 'Metformin in 2025: what the new clinical evidence tells us', category: 'PHARMACOLOGY', date: '28 Feb 2025', desc: 'A review of the latest trials on metformin safety, efficacy, and emerging indications beyond Type 2 Diabetes.' },
  { slug: 'glycaemic-index-vs-load', title: 'Glycaemic index vs glycaemic load — a practical guide', category: 'NUTRITION', date: '14 Feb 2025', desc: 'The difference between GI and GL matters enormously for meal planning in diabetes. A clear, practical breakdown.' },
]

export default function ArticlesPage() {
  return <ArticlesList articles={articles} />
}
