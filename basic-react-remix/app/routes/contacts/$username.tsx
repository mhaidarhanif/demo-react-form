import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
  const { username } = params;
  return json({ username });
}

export default function ContactUsername() {
  const data = useLoaderData();

  return (
    <div>
      <h1>{data.username}</h1>
    </div>
  );
}
