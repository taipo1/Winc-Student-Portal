import React from "react";
import Home from "./Home";
import StudentList from "./StudentList";
import studentData from "./../studentData";
import StudentProfile from "./StudentProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Container extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  students = Object.values(studentData);
  dynamiclink = this.students.map((student) => {
    const studentLink =
      "/" + student.nawFiles.name + "-" + student.nawFiles.lastName;
    return (
      <Route
        path={studentLink}
        component={() => <StudentProfile info={student} />}
      />
    );
  });
  render() {
    return (
      <div className="container">
        <Router>
          <StudentList students={studentData} />
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Home chart={this.students} />}
            />
            {this.dynamiclink}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Container;
