import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <h1 className="text-center text-6xl py-4">Todoアプリ</h1>
        <Todo />
      </main>
    </>
  )
}

export default App
