import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

function Form() {
  return (
    <form>
      <General />
      <Education />
      <Experience />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
