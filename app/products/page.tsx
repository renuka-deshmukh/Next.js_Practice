import Link from "next/link";

export default function Products() {
  const productIds = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products List</h1>
      <ul>
        {productIds.map((id) => (
          <li key={id}>
            <Link href={`/products/${id}`}>View Product {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
