import axios from "axios";

async function getData() {
  const res = await fetch("http://localhost:3000/api/todos");
  console.log(res);
  return res.json();
}

export default async function TodoList() {
  const { todos } = await getData();
  console.log(todos);

  return (
    <div>
      <div> Test RCC </div>
      {todos.map((todo) => (
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
