"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserCRUD() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch("/api/users", { cache: "no-store" });
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add new user
  const handleAdd = async () => {
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    setName("");
    setEmail("");
    fetchUsers();
  };

  // Edit user
  const handleEdit = async () => {
    if (!editId) return;

    await fetch(`/api/users/${editId}`, {
      method: "PUT",
      body: JSON.stringify({ name, email }),
    });

    setEditId(null);
    setName("");
    setEmail("");
    fetchUsers();
  };

  // Delete user
  const handleDelete = async (id: number) => {
    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    fetchUsers();
  };

  // Select user for edit
  const selectForEdit = (user: User) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div>
      <h2>User CRUD (Next.js + TypeScript)</h2>

      {/* Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        {editId ? (
          <button onClick={handleEdit}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>

      {/* Table */}
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            {user.name} - {user.email}

            <button
              onClick={() => selectForEdit(user)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(user.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
