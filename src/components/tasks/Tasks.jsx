import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <h4>Tasks</h4>
        <table className="table table-dark table-hover">
          <caption>List of tasks</caption>
          <thead>
            <tr className="text-info">
              <th scope="col">Tasks</th>
              <th scope="col">Added On</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks: tasks,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "tasks",
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
