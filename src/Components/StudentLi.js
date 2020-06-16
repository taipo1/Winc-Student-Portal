import React from "react";
import { Link } from "react-router-dom";

const StudentLi = (props) => {
  const link = props.name + "-" + props.lastName;
  return (
    <Link to={link}>
      <li>
        {props.name}
        &nbsp; {props.lastName}
      </li>
    </Link>
  );
};

export default StudentLi;
