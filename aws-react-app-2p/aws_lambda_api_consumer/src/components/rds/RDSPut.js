import React from "react";
import RenderProfileTable from "../RenderProfileTable";

class RDSPut extends React.Component {
  constructor(props) {
    super();
    this.state = { profiles: [], loading: true };

    fetch(props.API_URL + "/profile/put")
      .then(response => response.json())
      .then(data => {
        this.setState({
          profiles: data,
          loading: false
        });
      });
    fetch(props.API_URL + "/profile/getall")
      .then(response => response.json())
      .then(data => {
        this.setState({
          profiles: data,
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
      <RenderProfileTable profiles={this.state.profiles} />
    );

    return (
      <div className="container">
        <h3>Put</h3>
        {contents}
      </div>
    );
  }
}

export default RDSPut;
