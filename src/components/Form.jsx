import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

export function Form({ setters }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  function handleSubmit(formData) {
    setters.setFullName(formData.get("fullName"));
    setters.setEmail(formData.get("email"));
    setters.setAddress(formData.get("address"));
    setters.setWebsite(formData.get("website"));
    setters.setPhoneNumber(formData.get("phoneNumber"));

    {
      /*reset form input cells */
    }
    setFullName("");
    setEmail("");
    setAddress("");
    setEmail("");
    setAddress("");
    setWebsite("");
    setPhoneNumber("");
  }
  return (
    <form action={handleSubmit}>
      <General />
      <Education />
      <Experience />
      <button type="submit">Submit</button>
    </form>
  );
  function General() {
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
            <span style={{ color: "gray", fontSize: "0.9em" }}>
              {" "}
              recommended
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user-name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">
            Phone number{" "}
            <span style={{ color: "gray", fontSize: ".9em" }}>
              {" "}
              recommended
            </span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="(555) 123-4567"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">
            Address
            <span style={{ color: "gray", fontSize: ".9em" }}>
              {" "}
              recommended
            </span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://www.example.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </>
    );
  }
}

export default Form;
