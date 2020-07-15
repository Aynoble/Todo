import React from "react";
import TodoItems from "./TodoItems.js";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todo.map((todos) => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }

        return todos;
      });
      return {
        todo: updatedTodos,
      };
    });
  }

  render() {
    const styles = {
      color: "grey",
      textDecoration: "line-through",
      fontStyle: "italic",
    };

    const todoComponents = this.state.todo.map((Items) => (
      <TodoItems
        key={Items.id}
        myItem={Items}
        handleChange={this.handleChange}
        myStyles={styles}
      />
    ));

    return <div className="main">{todoComponents}</div>;
  }
}
export default App;
