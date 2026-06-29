import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../../actions/todo.actions";
import "./todo-list.css";

export class TodoList extends Component {
  state = {
    inputText: ""
  };

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleAdd = e => {
    e.preventDefault();
    const text = this.state.inputText.trim();
    if (text) {
      this.props.addTodo(text);
      this.setState({ inputText: "" });
    }
  };

  handleToggle = id => {
    this.props.toggleTodo(id);
  };

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  renderTodos() {
    const { todos } = this.props;
    if (todos.length === 0) {
      return <p className="todo-empty">No todos yet. Add one above!</p>;
    }
    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span
              className="todo-text"
              onClick={() => this.handleToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button
              className="todo-delete-btn"
              onClick={() => this.handleDelete(todo.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const remaining = this.props.todos.filter(t => !t.completed).length;
    return (
      <div className="todo-container">
        <h2>Todo List</h2>
        <form className="todo-form" onSubmit={this.handleAdd}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add a new todo..."
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
          <button className="todo-add-btn" type="submit">
            Add
          </button>
        </form>
        <div className="todo-count">
          {remaining} item{remaining !== 1 ? "s" : ""} remaining
        </div>
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(TodoList);
