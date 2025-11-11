"use client";

import { useState } from "react";

export default function CounterClient() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Counter (Client Component)</h2>
      <p>Value: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "10px 20px" }}
      >
        Decrease
      </button>
    </div>
  );
}
