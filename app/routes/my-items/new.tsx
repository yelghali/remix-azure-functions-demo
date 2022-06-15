import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  console.log("New-item action function", request.url);
  return redirect("/my-items");
};

const inputClassName = `focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-2 ring-1 ring-slate-200 shadow-sm`;
export default function NewItem() {
  const errors = useActionData();
  return (
    <div>
      <h1>New Item</h1>
      <Form method="post">
        <input type="text" name="name" placeholder="Your name" />
        <input type="submit" value="Submit" />
      </Form>
    </div>
  );
}
