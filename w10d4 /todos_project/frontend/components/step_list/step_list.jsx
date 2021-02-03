import React from 'react';
import StepListItem from '../step_list/step_list_item' //maybe import from the container
import StepForm from '../step_list/step_form'

export const StepList = (props) => {
    return (
        <div>
            <h2>All Steps</h2>
            <ul>
                {props.stepsByTodoID.map((step) => {
                    return (
                        <StepListItem key={step.id} step={step} //maybe pass it to StepListItemContainer??
                        receiveStep={props.receiveStep}
                        removeStep={props.removeStep}/>
                    )
                })}
            </ul>
            <StepForm todo_id={ props.todo_id }receiveStep={props.receiveStep}/>
        </div>
    )
}