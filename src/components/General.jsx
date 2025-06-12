import { useState } from "react";

function General() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <>
      <h2>Personal Details</h2>
      <div>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">
          Email
          <span style={{ color: "gray", fontSize: "0.9em" }}> recommended</span>
        </label>
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
        <label htmlFor="phoneNumber">
          Phone number{" "}
          <span style={{ color: "gray", fontSize: ".9em" }}> recommended</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="address">
          Address
          <span style={{ color: "gray", fontSize: ".9em" }}> recommended</span>
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onchange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
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
