export default async function ServerData() {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store"
    });

    const products = await res.json();

    return (
        <div>
            <h2>Product List (Server Component)</h2>
            <ul>
                {products.map((item: any) => (
                    <li key={item.id}>
                        {item.name} - Rs {item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}