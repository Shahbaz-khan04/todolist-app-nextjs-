"use client";

import React, { useState } from "react";

export default function Todo() {
  const [todoList, settodoList] = useState([
    { todoText: "Todo 1", completed: false },
    { todoText: "Todo 2", completed: false },
    { todoText: "Todo 3", completed: true },
    { todoText: "Todo 4", completed: true },
  ]);
  const [todo, setTodo] = useState("");

  const onChangeHandler = (element: any) => {
    const newTodos = todoList.map((todo) => {
      if (todo.todoText === element.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    settodoList(newTodos);
  };

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todoList, newTodo];
    settodoList(newTodos);
  };

  const deleteTodo = (element: any) => {
    const newTodo = todoList.filter((todo) => {
      if (todo.todoText === element.todoText) {
        return false;
      }
      return true;
    });
    settodoList(newTodo);
  };

  return (
    <>
      <div>Todo</div>
      <input
        placeholder="add todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((element) => {
          return (
            <li
              style={{
                color: element.completed ? "green" : "red",
                fontStyle: "italic",
                listStyle: "none",
              }}
              key={element.todoText}
            >
              <input
                type="checkbox"
                checked={element.completed}
                onChange={() => {
                  onChangeHandler(element);
                }}
              />
              {element.todoText}
              <button
                onClick={() => {
                  deleteTodo(element);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
