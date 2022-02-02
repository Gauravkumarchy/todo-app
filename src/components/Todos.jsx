import React, { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Default Todo",
      status: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random() * 10 + 1,
        title,
        status: false,
      },
    ]);
  };

  const handleDelete = (id) => {
    const deletedTodo = todos.filter((item) => item.id != id);
    setTodos(deletedTodo);
  };

  const updateTodo = (id, status) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, status: status } : item
    );
    setTodos(updated);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <h1>Todo List</h1>
      <input
        style={{
          width: "200px",
          height: "30px",
          border: "1px solid black",
          margin: "auto",
        }}
        value={title}
        name="title"
        placeholder="Enter your todo..."
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        onClick={addTodo}
        style={{
          margin: "10px auto",
          width: "120px",
          height: "50px",
          background: "green",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Add Todo
      </button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
