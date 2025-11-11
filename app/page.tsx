import ServerData from "./components/ServerData";
import CounterClient from "./components/CounterClient";
import UserCRUD from "./components/UserCRUD";

export default function Home() {
  return (

    
    <div style={{ padding: "20px" }}>
      <h1>Next.js Practice Project</h1>

      {/* Server Component */}
      <ServerData />

      {/* Client Component */}
      <CounterClient />
       <h1>Simple CRUD App (Next.js + TS)</h1>
      <UserCRUD />
    </div>
  );
}
