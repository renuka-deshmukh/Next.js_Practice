// app/products/[id]/page.tsx

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
  const product = await getProduct(id);

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
