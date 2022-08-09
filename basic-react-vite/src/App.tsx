import { useState } from "react";

export default function App() {
  const [interestsCount, setInterestsCount] = useState<number>();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // With only string
    // const data = Object.fromEntries(new FormData(event.currentTarget));

    // With check data type
    const data = Object.fromEntries(
      [...formData].map(([key, value]) => {
        return [key, !isNaN(Number(value)) ? Number(value) : value];
      })
    );

    const interests = formData.getAll("interest");
    Object.assign(data, {
      ...data,
      interests,
      interestsCount: interests.length,
    });

    console.log(data);

    if (data.interestsCount) {
      setInterestsCount(Number(data.interestsCount));
    }
  }

  return (
    <div>
      <h1>Basic React</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact name</legend>

          <div>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="First name"
              aria-description="First name"
              type="text"
              autoComplete="on"
              minLength={1}
              maxLength={20}
              size={30}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Last name"
              aria-description="Last name"
              type="text"
              autoComplete="on"
              minLength={1}
              maxLength={20}
              size={30}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Contact details</legend>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="on"
              maxLength={50}
              size={30}
            />
          </div>

          <div>
            <label htmlFor="number">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="17"
              min={17}
              max={100}
              inputMode="numeric"
            />
          </div>

          <div>
            <label htmlFor="healthPoint">Health Point</label>
            <input
              type="range"
              name="healthPoint"
              id="healthPoint"
              min={0}
              max={100}
              step={10}
              list="healthPointTickmarks"
            />
            <datalist id="healthPointTickmarks">
              <option value="0" label="0%" />
              <option value="10" />
              <option value="20" />
              <option value="30" />
              <option value="40" />
              <option value="50" label="50%" />
              <option value="60" />
              <option value="70" />
              <option value="80" />
              <option value="90" />
              <option value="100" label="100%" />
            </datalist>
          </div>

          <div>
            <label htmlFor="pet-select">Pet:</label>
            <select name="pet" id="pet-select">
              <option value="">--Choose an option--</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Hamster">Hamster</option>
              <option value="Parrot">Parrot</option>
              <option value="Spider">Spider</option>
              <option value="Gold Fish">Goldfish</option>
            </select>
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols={30}
              rows={5}
              placeholder="What do you think you are?"
            />
          </div>

          {/* <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="***"
              minLength={10}
            />
          </div> */}
        </fieldset>

        <fieldset>
          <legend>Choose your interests</legend>
          <div>
            <input type="checkbox" id="coding" name="interest" value="Coding" />
            <label htmlFor="coding">Coding</label>
          </div>
          <div>
            <input type="checkbox" id="music" name="interest" value="Music" />
            <label htmlFor="music">Music</label>
          </div>
          <div>
            <input type="checkbox" id="art" name="interest" value="Art" />
            <label htmlFor="art">Art</label>
          </div>
          <div>
            <input type="checkbox" id="sports" name="interest" value="Sports" />
            <label htmlFor="sports">Sports</label>
          </div>
          <div>
            <input
              name="interest"
              id="interestOther"
              type="checkbox"
              value="Other"
            />
            <label htmlFor="interestOther">Other</label>
            <input type="text" id="interestOther" name="interestOther" />
          </div>

          {interestsCount && (
            <output name="interests-result" htmlFor="interest">
              {interestsCount} interests
            </output>
          )}
        </fieldset>

        <button type="submit">Save contact</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
