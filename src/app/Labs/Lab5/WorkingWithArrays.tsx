"use client";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary mb-3" href={API}>
        Get Todos
      </a>
      <hr />
      
      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end mb-3" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <Form.Control id="wd-todo-id" value={todo.id} className="w-50 mb-3" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <div style={{ clear: "both" }}></div>
      <hr />
      
      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary mb-3" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr />
      
      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className="btn btn-primary mb-3" href={`${API}/create`}>
        Create Todo
      </a>
      <hr />
      
      <h4>Deleting from an Array</h4>
      <a id="wd-delete-todo-with-id" className="btn btn-danger float-end mb-3" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <Form.Control value={todo.id} className="w-50 mb-3" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <div style={{ clear: "both" }}></div>
      <hr />
      
      <h4>Updating an Item in an Array</h4>
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end mb-3" id="wd-update-todo-title">
        Update Todo Title
      </a>
      <Form.Control value={todo.id} className="w-25 float-start me-2 mb-3" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <Form.Control value={todo.title} className="w-50 float-start mb-3" onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <div style={{ clear: "both" }}></div>
      <hr />
      
      <h4>Update Description</h4>
      <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end mb-3" id="wd-update-todo-description">
        Update Description
      </a>
      <Form.Control value={todo.description} className="w-75 mb-3" onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
      <div style={{ clear: "both" }}></div>
      <hr />
      
      <h4>Update Completed Status</h4>
      <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary float-end mb-3" id="wd-update-todo-completed">
        Update Completed
      </a>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="wd-todo-completed" checked={todo.completed} onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        <label className="form-check-label" htmlFor="wd-todo-completed">
          Completed
        </label>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr />
    </div>
  );
}