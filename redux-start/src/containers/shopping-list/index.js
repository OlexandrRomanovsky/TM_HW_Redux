import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, toggleItem, deleteItem } from "../../actions/shopping.actions";
import "./shopping-list.css";

export class ShoppingList extends Component {
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
      this.props.addItem(text);
      this.setState({ inputText: "" });
    }
  };

  handleToggle = id => {
    this.props.toggleItem(id);
  };

  handleDelete = id => {
    this.props.deleteItem(id);
  };

  renderItems() {
    const { items } = this.props;
    if (items.length === 0) {
      return <p className="shopping-empty">No items yet. Add one above!</p>;
    }
    return (
      <ul className="shopping-list">
        {items.map(item => (
          <li key={item.id} className={`shopping-item ${item.completed ? "completed" : ""}`}>
            <span
              className="shopping-text"
              onClick={() => this.handleToggle(item.id)}
            >
              {item.text}
            </span>
            <button
              className="shopping-delete-btn"
              onClick={() => this.handleDelete(item.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const remaining = this.props.items.filter(i => !i.completed).length;
    return (
      <div className="shopping-container">
        <h2>Shopping List</h2>
        <form className="shopping-form" onSubmit={this.handleAdd}>
          <input
            className="shopping-input"
            type="text"
            placeholder="Add a shopping item..."
            value={this.state.inputText}
            onChange={this.handleInputChange}
          />
          <button className="shopping-add-btn" type="submit">
            Add
          </button>
        </form>
        <div className="shopping-count">
          {remaining} item{remaining !== 1 ? "s" : ""} remaining
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.shopping.items
});

export default connect(
  mapStateToProps,
  { addItem, toggleItem, deleteItem }
)(ShoppingList);
