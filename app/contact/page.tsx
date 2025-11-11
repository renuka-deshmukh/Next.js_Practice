"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [message, setMessage] = useState("");

  // ✅ Load saved data from localStorage when page loads
  useEffect(() => {
    const savedData = localStorage.getItem("userFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // ✅ Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("userFormData", JSON.stringify(formData));

    // Optional: Send to API route
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  // ✅ Retrieve stored data manually (for demo)
  const showStoredData = () => {
    const saved = localStorage.getItem("userFormData");
    if (saved) {
      const parsed = JSON.parse(saved) as FormData;
      alert(`Saved Name: ${parsed.name}, Email: ${parsed.email}`);
    } else {
      alert("No data found in localStorage!");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Contact Form (TypeScript)</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <hr style={{ margin: "20px 0" }} />
      <button onClick={showStoredData}>Show Stored Data</button>
    </div>
  );
}
