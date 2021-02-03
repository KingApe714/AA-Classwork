import React from 'react'
import { StepList } from '../step_list/step_list';

export const TodoDetailView = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.removeTodo(props.todo.id)
    }

    return (
        <div>
            <ul>
                <li>{props.todo.body}</li>
                <li>{props.todo.done.toString()}</li>
                <button onClick={handleClick}>Delete</button>
            </ul>

            {/* this is where my code is breaking currently */}
            <StepList todo={props.todo.id}/>
        </div>
    )
}