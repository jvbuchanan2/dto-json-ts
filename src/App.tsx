import React from 'react';
import {Api} from "./Api";



// This should be in a different file.
export const MyApi = new Api({
  baseURL: 'https://fakerestapi.azurewebsites.net'
});

export default function App() {

  async function sendMyRequest() {
    const response = await MyApi.api
    .v1ActivitiesCreate({
      id: 1,
      dueDate: new Date().toISOString(),
      completed: true,
      title: 'Chop down the cherry tree.'
    });
    console.log(response.data);
  }


  return (
    <div>
      <h1>Welcome to my Web Request Demo</h1>
      <button onClick={() => sendMyRequest()}>Send my POST request</button>
    </div>
  );
}


