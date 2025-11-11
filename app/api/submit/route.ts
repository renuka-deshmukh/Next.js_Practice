import { NextResponse } from "next/server";

// This runs on the server (no need for "use server")
export async function POST(req: Request) {
  try {
    // Parse incoming form data (JSON)
    const data = await req.json();
    console.log("Received Data:", data);

    // Normally you'd save to a DB or send an email here
    return NextResponse.json({ message: "Form submitted successfully!", received: data });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  }
}
