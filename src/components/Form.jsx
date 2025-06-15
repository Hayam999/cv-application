import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

export function Form({ setters }) {
  function extractData(formData) {
    setters.setFullName(formData.get("fullName"));
    setters.setEmail(formData.get("email"));
    setters.setAddress(formData.get("address"));
    setters.setWebsite(formData.get("website"));
    setters.setPhoneNumber(formData.get("phoneNumber"));
  }
  return (
    <form action={extractData}>
      <General />
      <Education />
      <Experience />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
