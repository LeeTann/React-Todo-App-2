import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, task } = this.props.todo
        return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {" "}
                { task }
                <button onClick={this.props.deleteItem.bind(this, id)} style={btnStyle}>X</button>

            </p>
        </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '2px 5px',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem
