"use client";
import { useState } from "react";

export default function TodoInput() {
  const [todo, setTodo] = useState("");
  return <input type="texr" onChange={(e) => setTodo(e.target.value)} />;
}
