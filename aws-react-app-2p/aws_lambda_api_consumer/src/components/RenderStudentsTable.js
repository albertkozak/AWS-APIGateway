import React from "react";

export default function RenderStudentsTable(props) {
  console.log(props.students);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map(student => (
          <tr key={student.studentId}>
            <td>{student.studentId}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
