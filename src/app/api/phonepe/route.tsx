import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { amount } = body

  // TODO: Integrate real PhonePe merchant API here
  // For now, a dummy payment link
  const paymentUrl = `https://www.phonepe.com/donate?amount=${amount}`

  return NextResponse.json({ paymentUrl })
}
