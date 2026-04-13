'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import dynamic from 'next/dynamic'
import { CONSULT_TYPES } from '@/data/conditions'
import { Activity } from '@/components/Icons'

const NeuralCanvas = dynamic(() => import('@/components/NeuralCanvas'), { ssr: false })

declare global { interface Window { Razorpay: any } }

function BookPage() {
  const { t } = useTheme()
  const router = useRouter()
  const [activeType, setActiveType] = useState('video')
  const [form, setForm] = useState({ name: '', phone: '', concern: '', slot: '' })
  const [loading, setLoading] = useState(false)

  const selected = CONSULT_TYPES.find(x => x.id === activeType)!

  const inputStyle: React.CSSProperties = {
    background: t.INPUTBG, border: `1px solid ${t.INPUTBORDER}`,
    color: t.TXT, padding: '12px 16px', borderRadius: 4,
    width: '100%', fontSize: 14, outline: 'none', fontFamily: 'system-ui,sans-serif',
  }

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selected.amount, consultType: selected.label }),
      })
      const order = await res.json()
      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: selected.amount,
        currency: 'INR',
        name: 'Dr. Debashis Das',
        description: selected.label,
        order_id: order.id,
        handler: () => router.push('/thank-you'),
        prefill: { name: form.name, contact: form.phone },
        theme: { color: t.A },
      })
      rzp.open()
    } catch {
      alert('Payment could not be initiated. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ background: t.BG, color: t.TXT, minHeight: '100vh', position: 'relative', overflowX: 'hidden', fontFamily: 'system-ui,sans-serif', transition: 'background .45s' }}>
      <NeuralCanvas alpha={t.CANVASALPHA} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <section style={{ padding: '130px 5% 100px' }}>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.3em', marginBottom: 12 }}>// SECURE PORTAL</div>
            <h1 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', color: t.TXT, fontFamily: 'Georgia,serif', marginBottom: 12 }}>
              Book a <span style={{ color: t.A }}>Session</span>
            </h1>
            <p style={{ fontSize: 13, color: t.TXT2, marginBottom: 36 }}>
              Strictly confidential. Payment processed via Razorpay (UPI · Card · Netbanking).
            </p>

            <div style={{ padding: 44, background: t.BG2, border: `1px solid ${t.BORDER}`, borderRadius: 4, position: 'relative', overflow: 'hidden', transition: 'background .4s' }}>
              <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)' }} />

              <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {/* Step 1 */}
                <div>
                  <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', marginBottom: 12 }}>01 — SELECT TYPE</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {CONSULT_TYPES.map(item => (
                      <div key={item.id} onClick={() => setActiveType(item.id)}
                        style={{ padding: '15px 20px', border: `2px solid ${activeType === item.id ? t.A : t.BORDER}`, borderRadius: 8, cursor: 'pointer', background: activeType === item.id ? 'rgba(245,158,11,0.07)' : t.BG2, transition: 'all .2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: t.TXT }}>{item.label}</div>
                          <div style={{ ...t.mono, fontSize: 9, color: t.TXT2, marginTop: 3 }}>{item.sub}</div>
                        </div>
                        <div style={{ fontSize: 17, fontWeight: 800, color: activeType === item.id ? t.A : t.TXT2, fontFamily: 'Georgia,serif' }}>{item.fee}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ height: 1, background: t.BORDER }} />

                {/* Step 2 */}
                <div>
                  <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', marginBottom: 14 }}>02 — YOUR DETAILS</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    {[{ k: 'name', lbl: 'FULL NAME', ph: 'Dr. / Mr. / Ms.' }, { k: 'phone', lbl: 'CONTACT', ph: '+91 —' }].map(({ k, lbl, ph }) => (
                      <div key={k}>
                        <label style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', display: 'block', marginBottom: 7 }}>{lbl}</label>
                        <input placeholder={ph} value={(form as any)[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} required style={inputStyle} />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', display: 'block', marginBottom: 7 }}>PRIMARY CONCERN</label>
                    <textarea rows={3} placeholder="Describe your concern briefly..." value={form.concern} onChange={e => setForm(f => ({ ...f, concern: e.target.value }))} required style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <div>
                    <label style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', display: 'block', marginBottom: 7 }}>PREFERRED SLOT</label>
                    <select value={form.slot} onChange={e => setForm(f => ({ ...f, slot: e.target.value }))} required style={{ ...inputStyle, color: form.slot ? t.TXT : t.TXT2 }}>
                      <option value="" disabled>Select time window</option>
                      <option>Morning · 09:00 – 12:00</option>
                      <option>Afternoon · 14:00 – 17:00</option>
                      <option>Evening · 18:00 – 20:00</option>
                    </select>
                  </div>
                </div>

                <div style={{ height: 1, background: t.BORDER }} />

                {/* Step 3 */}
                <div>
                  <div style={{ ...t.mono, fontSize: 9, color: t.MONOCOLOR, letterSpacing: '0.2em', marginBottom: 14 }}>03 — PAY & CONFIRM</div>
                  <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)', borderRadius: 6, padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 13, color: t.TXT }}>{selected.label}</div>
                      <div style={{ ...t.mono, fontSize: 9, color: t.MONOMUTED, marginTop: 3 }}>RAZORPAY · UPI · CARD · NETBANKING</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: t.A, fontFamily: 'Georgia,serif' }}>{selected.fee}</div>
                  </div>
                  <button type="submit" disabled={loading}
                    style={{ ...t.mono, width: '100%', padding: '16px', background: t.A, color: '#1a0a00', border: 'none', fontSize: 11, fontWeight: 900, letterSpacing: '0.18em', borderRadius: 2, cursor: loading ? 'wait' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'OPENING PAYMENT...' : 'PAY & CONFIRM →'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function Book() {
  return <ThemeProvider><BookPage /></ThemeProvider>
}
