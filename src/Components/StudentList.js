import React from "react";
import logo from "./../assets/winc-logo.png";
import StudentLi from "./StudentLi";
import { Link } from "react-router-dom";

const StudentList = (props) => {
  const students = Object.values(props.students);
  const studentList = students.map((item) => {
    return (
      <StudentLi name={item.nawFiles.name} lastName={item.nawFiles.lastName} />
    );
  });

  return (
    <div className="student-list-container">
      <img className="logo" src={logo} alt="Winc Logo" />
      <ul className="student-list">
        <Link to="/">
          <li>All Results</li>
        </Link>
        {studentList}
      </ul>
    </div>
  );
};

export default StudentList;
