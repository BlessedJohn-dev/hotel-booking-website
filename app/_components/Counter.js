"use client";

import { useState } from "react";

export default function Counter({ userData }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>

      <ul>
        {userData.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </>
  );
}
