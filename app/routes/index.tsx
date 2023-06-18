import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  console.log("Index action function", request.url);
  return redirect("/my-items");
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>here i'm calling the result of calling the API Function, exposed through Private endpoint in the Vnet </h1>
  
      
      <h1>Welcome to Remix</h1>

    </div>
  );
}
