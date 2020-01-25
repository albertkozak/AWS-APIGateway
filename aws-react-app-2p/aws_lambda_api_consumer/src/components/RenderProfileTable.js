import React from "react";

export default function RenderProfileTable(props) {
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
        {props.profiles.map(profile => (
          <tr key={profile.id}>
            <td>{profile.id}</td>
            <td>{profile.fname}</td>
            <td>{profile.lname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
