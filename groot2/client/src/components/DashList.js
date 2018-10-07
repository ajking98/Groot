import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./DashList.css";
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export class DashList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
              placeholder="Add Item">
            </input>
            <button type="submit" className="btn-success">add</button>
          </form>
        </div>
        <div className="answer">
          <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
      </div>
    );
  }
}
