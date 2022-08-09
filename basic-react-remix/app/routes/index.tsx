export default function Index() {
  return (
    <div>
      <h1>Basic React Remix</h1>

      <form method="post" action="/contacts">
        <label htmlFor="username">Username</label>
        <input name="username" type="text" placeholder="Full Name" />

        <button type="submit">Save contact</button>
      </form>
    </div>
  );
}
