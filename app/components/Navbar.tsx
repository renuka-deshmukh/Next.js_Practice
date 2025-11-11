"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#f1f1f1",
        display: "flex",
        gap: "20px",
        fontSize: "18px",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>

    </nav>
  );
}
