"use client";

import axios from "axios";
import { useEffect, useState } from "react";

async function getData() {
  const res = await axios.get("http://localhost:3000/api/todos");
  return res;
}

export default function ClientTodoList() {
  const [todos, setTodos] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { todos } = await getData();

      setTodos(todos);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div> Test RCC </div>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between p-4 mb-2 bg-gray-800 rounded-lg"
        >
          <div>{todo.content}</div>
          <div className="px-2 py-1 text-sm bg-blue-600 rounded"></div>
        </li>
      ))}
    </div>
  );
}
