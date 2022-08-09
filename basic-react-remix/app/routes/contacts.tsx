import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export default function Contacts() {
  return (
    <div>
      <h1>Contacts</h1>
      <Outlet />
    </div>
  );
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const data = Object.fromEntries(
    [...formData].map(([key, value]) => {
      return [key, !isNaN(Number(value)) ? Number(value) : value];
    })
  );

  return redirect(`/contacts/${data.username}`);
}
