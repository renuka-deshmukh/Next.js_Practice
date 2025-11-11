

export default async function Product({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic User Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
