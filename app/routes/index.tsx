import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState, useEffect } from "react";

export const action: ActionFunction = async ({ request }) => {
  console.log("Index action function", request.url);
  return redirect("/my-items");
};




export default function Index() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("https://swademoyaya.azurewebsites.net/api/HttpTrigger1?name=toto")
      .then(response => response.json())
      .then(data => setResponse(data));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        Here I'm calling the result of calling the API Function, exposed through
        Private endpoint in the Vnet. 
      </h1>
      {response && <p>reponse</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      <h1>Welcome to Remix</h1>
    </div>
  );
}
/*
export default function Index() {
  <script> let response = fetch ("https://swademoyaya.azurewebsites.net/api/HttpTrigger1").then ((response) => response.json ()).then ((response) => console.log (response)); </script> 

  // insert call to api
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>here i'm calling the result of calling the API Function, exposed through Private endpoint in the Vnet </h1>
  


      
      <h1>Welcome to Remix</h1>

    </div>
  );
}
*/
