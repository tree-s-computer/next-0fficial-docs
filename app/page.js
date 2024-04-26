import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import ClientTodoList from "./components/ClientTodoList";

export default async function Home() {
  {
    /*rsc */
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>Test Todo Component Page</h1>

      <TodoInput />
      <ClientTodoList />
      {/*rcc*/}
      <TodoList />
      {/*rsc */}
    </main>
  );
}
{
  /* rcc는 자식으로 rsc를 가질수없다.
  현재는 rsc가 rcc와 rsc를 가지고 있고, 
  rsc인 TodoInput은 rsc를 자식으로 가질수없다. */
}
