import React from 'react';
import StepListItemContainer from './step_list_item_container'

class StepListItem extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.removeStep(props.step.id)
    }
    //need a button to toggle
    render () {
        return (
            <>
                <li>Title: {this.props.step.title}</li>
                <li>Body: {this.props.step.body}</li>
                <button onClick={this.handleClick}>Delete</button>
            </>
        )
    }
}

export default StepListItem;