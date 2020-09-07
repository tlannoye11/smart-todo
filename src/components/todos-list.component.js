import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Todo from './todo.component';

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
    }

    getTodoList() {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.getTodoList();
    }

    componentDidUpdate() {
        this.getTodoList();
    }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>List of Todos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
