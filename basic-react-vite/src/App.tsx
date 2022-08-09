export default function App() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log(data);
  }

  return (
    <div>
      <h1>Basic HTML and JS</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact name</legend>

          <div>
            <label htmlFor="firstName">First name</label>
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              autoComplete="on"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              autoComplete="on"
              required
            />
          </div>

          <div>
            <label>Test A</label>
            <input name="testA" type="text" defaultValue="Test A" />
          </div>

          <div>
            <label>Test B</label>
            <input name="testB" type="text" defaultValue="Test B" />
          </div>

          <div>
            <label>Test C</label>
            <input name="testC" type="text" defaultValue="Test C" />
          </div>
        </fieldset>

        <button type="submit">Save contact</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
