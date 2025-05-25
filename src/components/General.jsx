import { useState } from "react";

function General() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  return (
    <>
      <h1>General Information</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <Contacts />
    </>
  );
}

function Contacts() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user-name@example.com"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="website">Website:</label>
        <input
          type="url"
          id="website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://www.example.com"
        />
      </div>
    </>
  );
}

export default General;
