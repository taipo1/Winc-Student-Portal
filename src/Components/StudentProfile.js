import React from "react";
import MainChart from "./Chart";

class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="Student-profile">
        <h1>
          {this.props.info.nawFiles.name} {this.props.info.nawFiles.lastName}
        </h1>
        <MainChart chart={this.props.info} />
      </div>
    );
  }
}

export default StudentProfile;
