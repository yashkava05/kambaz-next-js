"use client";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./ToDoForm";
import TodoItem from "./ToDoItem";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={(id) => dispatch(deleteTodo(id))}
            setTodo={(todo) => dispatch(setTodo(todo))}
          />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}