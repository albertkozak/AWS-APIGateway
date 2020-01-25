import React from "react";
import RDSGetAll from "./rds/RDSGetAll";
import RDSGetId from "./rds/RDSGetID";
import RDSPut from "./rds/RDSPut";

export default function RDS() {
  const API_INVOKE_URL =
    "https://dkxqoemo14.execute-api.us-east-1.amazonaws.com/prod";

  return (
    <div>
      <h1 className="rds-title">RDS Profile DB</h1>
      <RDSGetAll API_URL={API_INVOKE_URL} />
      <RDSGetId API_URL={API_INVOKE_URL} />
      <RDSPut API_URL={API_INVOKE_URL} />
    </div>
  );
}
