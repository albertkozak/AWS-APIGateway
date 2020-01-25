import React from "react";
import RenderStudentTable from "../RenderStudentsTable";

class DynamoGet extends React.Component {
  constructor(props) {
    super();
    this.state = { students: [], loading: true };

    fetch(props.API_URL + "/students/id")
      .then(response => response.json())
      .then(data => {
        this.setState({
          students: JSON.parse(data.body),
          loading: false
        });
      });
  }

  render() {
    console.log(this.state.students);
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.students.studentId}</td>
            <td>{this.state.students.firstName}</td>
            <td>{this.state.students.lastName}</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <div className="container">
        <h3>Get ID</h3>
        {contents}
      </div>
    );
  }
}

export default DynamoGet;
