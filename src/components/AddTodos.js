import React, { Component } from 'react'

export class AddTodos extends Component {
    state = {
        task: ''
    }

    onSubmit = (event) => {
        //want to prevent from submitting to the actual file
        event.preventDefault()
        this.props.addTodo(this.state.task)
        this.setState({ task: '' }) //clear the field back to nothing after submitted.
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value})
    //can use on any input field as long as you set name to value

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', }}>
                <input 
                    text="text"
                    name="task"
                    style={{ flex: '10' }}
                    placeholder="Add Todo..." 
                    value={this.state.task}   
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: '1', padding: '10px' }}
                />
            </form>
        )
    }
}

export default AddTodos
