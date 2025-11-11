import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Renuka", email: "renuka@example.com" },
  { id: 2, name: "Rohit", email: "rohit@example.com" },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);

  return NextResponse.json(newUser);
}
