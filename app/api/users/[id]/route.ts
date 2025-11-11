import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Renuka", email: "renuka@example.com" },
  { id: 2, name: "Rohit", email: "rohit@example.com" },
];

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const id = Number(params.id);

  users = users.map((user) =>
    user.id === id ? { ...user, ...body } : user
  );

  const updatedUser = users.find((u) => u.id === id);

  return NextResponse.json(updatedUser);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  users = users.filter((user) => user.id !== id);

  return NextResponse.json({ message: "User deleted", id });
}
