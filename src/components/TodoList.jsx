const TodoList = ({ todos }) => {
  return (
    <div className="mx-auto mt-4 max-w-xl space-y-10 bg-slate-200">
      {todos.map(todo => {
        return (
          <div className="rounded p-4" key={todo.id}>
            <input
              type="checkbox"
              className="size-4"
              checked={todo.completed}
            />
            <span className="px-2">{todo.title}</span>
            <span className="p-2 rounded-full cursor-pointer">
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
