import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { programmeModules } from "../../types/interfaces"

const Demo: React.FC<programmeModules> = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
        {props.modules.map((module, index) => (
        <tr key={index}>
          <td>{module.name}</td>
          <td>{module.noLectures}</td>
          <td>{module.noPracticals}</td>
        </tr>
        ))}
          <tr>
            <td>{props.modules[1].name}</td>
            <td>{props.modules[1].noLectures}</td>
            <td>{props.modules[1].noPracticals}</td>
          </tr>
          <tr>
            <td>{props.modules[2].name}</td>
            <td>{props.modules[2].noLectures}</td>
            <td>{props.modules[2].noPracticals}</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};

export default Demo;