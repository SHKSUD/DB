import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  try {
    const { amount, consultType } = await req.json()
    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      notes: { consultType },
    })
    return NextResponse.json(order)
  } catch (error) {
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 })
  }
}
