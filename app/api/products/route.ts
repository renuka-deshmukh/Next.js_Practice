import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
  ];

  return NextResponse.json(products);
}
