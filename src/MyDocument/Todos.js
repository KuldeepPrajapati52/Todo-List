import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let todoStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }
    return (
        <div className="container my-3" style={todoStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    console.log(todo.srno);
                    return (<TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} />)
                })
            }
        </div>
    )
}
