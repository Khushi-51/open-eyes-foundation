import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { amount } = body

  // Generate PhonePe payment link here
  const paymentUrl = `https://www.phonepe.com/donate?amount=${amount}`

  return NextResponse.json({ paymentUrl })
}
