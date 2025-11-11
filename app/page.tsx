import ServerData from "./components/ServerData";
import CounterClient from "./components/CounterClient";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Next.js Practice Project</h1>

      {/* Server Component */}
      <ServerData />

      {/* Client Component */}
      <CounterClient />
    </div>
  );
}
