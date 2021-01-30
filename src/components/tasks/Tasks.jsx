import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <>
    <div className="container" style={{marginTop: "50px"}}>
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
            <Task />
        </tbody>
      </table>
    </div>
      
    </>
  );
};

export default Tasks;
