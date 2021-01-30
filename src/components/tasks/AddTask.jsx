import React, { Component } from "react";

class AddTask extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "40px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            {" "}
            <h4 className="text-warning">Add a task</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="task">Task:</label>
            <input
              type="task"
              className="form-control"
              id="task"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save task
          </button>
        </form>
      </>
    );
  }
}

export default AddTask;
