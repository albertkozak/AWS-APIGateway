import React from "react";
import DynamoScan from "./dynamo/DynamoScan";
import DynamoGet from "./dynamo/DynamoGet";
import DynamoBatchGet from "./dynamo/DynamoBatchGet";
import DynamoPut from "./dynamo/DynamoPut";

export default function Dynamo() {
  const API_INVOKE_URL =
    "https://dkxqoemo14.execute-api.us-east-1.amazonaws.com/prod";

  return (
    <div>
      <h1>Dynamo DB</h1>
      <DynamoScan API_URL={API_INVOKE_URL} />
      <DynamoGet API_URL={API_INVOKE_URL} />
      <DynamoBatchGet API_URL={API_INVOKE_URL} />
      <DynamoPut API_URL={API_INVOKE_URL} />
    </div>
  );
}
