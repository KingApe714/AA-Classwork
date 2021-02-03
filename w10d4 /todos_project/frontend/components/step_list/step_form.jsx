import React from 'react'
import { uniqueId } from '../../util/utils'
class StepForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: uniqueId(),
            title: '',
            body: '',
            done: false,
            todo_id: uniqueId() //might need to change
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.updateDone = this.updateDone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }
    updateBody(e) {
        this.setState({ body: e.target.value })
    }
    updateDone(e) {
        let bool = false
        if (e.target.value === "true") {
            bool = true
        }
        this.setState({ done: bool })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveStep(this.state)
        this.setState({ id: uniqueId(), title: '', body: '', done: false})
    }

    //need a way to connect the todo_id to this particular step

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Step</h2>
                <label>Title
                    <input onChange={this.updateTitle} type="text" value={this.state.title}/>
                </label>
                <label>Body
                    <input onChange={this.updateBody} type="text" value={this.state.body}/>
                </label>
                <label>Done?
                    <label>True
                        <input onChange={this.updateDone} type="radio" name="done" value="true"/>
                    </label>
                    <label>False
                        <input onChange={this.updateDone} type="radio" name="done" value="false"/>
                    </label>
                </label>
                <button>Create Step</button>
            </form>
        )
    }
}

export default StepForm;