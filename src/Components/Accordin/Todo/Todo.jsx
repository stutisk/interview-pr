import { useCallback, useEffect, useState } from "react";
import { SingleTodo } from "./SingleTodo";

export const Todo = () => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todo");
        return saved ? JSON.parse(saved) : [];
      });
      
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  const enterTodos = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, isSelected: false }]);
    setInput(" ");
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("todos"));
//     if (saved) setTodos(saved);
//   }, []);

  const toggleCheckBox = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isSelected: !todo.isSelected } : todo
      )
    );
  }, []);

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const filterTodos = todos.filter((singleTodo) => {
    if (filter === "active") return !singleTodo.isSelected;
    if (filter === "completed") return singleTodo.isSelected;
    return true;
  });

  const activeTodo = todos.filter((todo) => !todo.isSelected).length;

  return (
    <div>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        <button onClick={enterTodos}>Enter</button>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <p>Active Todos : {activeTodo}</p>
      </div>
      {filterTodos?.map((singleTodo) => (
        <SingleTodo
          key={singleTodo.id}
          singleTodo={singleTodo}
          toggleCheckBox={toggleCheckBox}
          DeleteTodo={DeleteTodo}
        />
      ))}
    </div>
  );
};
