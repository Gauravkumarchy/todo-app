import React, { useState } from "react";

const Todo = ({ todo, handleDelete, updateTodo }) => {
  const [status, setStatus] = useState(todo.status);
  const handleChange = (id) => {
    updateTodo(id, status);
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        minWidth: "200px",
        width: "auto",
        height: "130px",
        borderRadius: "5px",
        margin: "10px auto",
        background: "aqua",
        padding: "10px",
      }}
    >
      <h3
        style={{
          color: status ? "green" : "red",
          fontSize: "20px",
          fontFamily: "fantasy",
          textDecoration: status ? "line-through" : "none",
        }}
      >
        {todo.title}
        <span onClick={() => handleChange(todo.id)}>
          <input
            type="checkbox"
            checked={status === true}
            onChange={() => setStatus(!status)}
          />
        </span>
      </h3>
      <button
        style={{
          background: "red",
          margin: "10px auto",
          width: "80px",
          height: "30px",
          border: "none",
          borderRadius: "10px",
        }}
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
