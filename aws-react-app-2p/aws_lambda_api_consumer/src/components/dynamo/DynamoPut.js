import React from "react";
import RenderStudentTable from "../RenderStudentsTable";

class DynamoPut extends React.Component {
  constructor(props) {
    super();
    this.state = { students: [], loading: true };

    fetch(props.API_URL + "/students/put")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          students: JSON.parse(data.body),
          loading: false
        });
      });
    fetch(props.API_URL + "/students/scan")
      .then(response => response.json())
      .then(data => {
        this.setState({
          students: JSON.parse(data.body),
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
      <RenderStudentTable students={this.state.students} />
    );

    return (
      <div className="container">
        <h3>Put</h3>
        {contents}
      </div>
    );
  }
}

export default DynamoPut;
