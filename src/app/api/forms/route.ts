import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwtEgQ_Q09Raz9nBenz0bY9CwUffODvdoG-SVnDa-l-oahKvK1E_Vym6Vej4QVWx41B9A/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const resultText = await response.text();
    console.log("Google Script response:", resultText);

    return NextResponse.json({ success: true, googleResponse: resultText });
  } catch (err: any) {
    console.error("Error in API route:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
