import React from "react";
import RenderStudentTable from "../RenderStudentsTable";

class DynamoBatchGet extends React.Component {
  constructor(props) {
    super();
    this.state = { students: [], loading: true };

    fetch(props.API_URL + "/students/ids")
      .then(response => response.json())
      .then(data => {
        this.setState({
          students: JSON.parse(data.body, null, 2),
          loading: false
        });
      });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      <RenderStudentTable students={this.state.students.Responses.Students} />
    );

    return (
      <div className="container">
        <h3>Batch Get</h3>
        {contents}
      </div>
    );
  }
}

export default DynamoBatchGet;
