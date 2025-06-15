import { useState } from "react";
import { MdWork } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";

export function Form({ setters }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibs, setMainResponsibs] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const [foldExperience, setFoldExperience] = useState(false);
  const [foldEducation, setFoldEducation] = useState(false);

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

  function Experience() {
    function AddExperience() {
      return (
        <>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="positionTitle">Position Title</label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              placeholder="Enter Position Title"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              placeholder="Enter Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="Enter End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.setEndDate)}
            />
          </div>
          <div>
            <label htmlFor="location">
              Location{" "}
              <span style={{ color: "gray", fontSize: ".9em" }}> optional</span>
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mainResponsibs">
              Main Responsibilites{" "}
              <span style={{ color: "gray", fontSize: ".9em" }}> optional</span>
            </label>
            <textarea
              id="mainResponsibs"
              name="mainResponsibs"
              rows={5}
              cols={20}
              placeholder="Describe your Main Responsibilities at that position"
              value={mainResponsibs}
              onChange={(e) => setMainResponsibs(e.target.value)}
            />
          </div>
          <div>
            <button>
              <MdDelete /> Delete
            </button>
            <button>
              <MdCancel /> Cancel
            </button>
            <button>
              <FaCheckCircle /> Save
            </button>
          </div>
        </>
      );
    }
    return (
      <>
        {/** [ ] Add Expereiences with visibility functionality */}

        <button>
          <IoMdAdd /> Experience
        </button>
      </>
    );
  }
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
  function Education() {
    function AddSchool() {
      return (
        <>
          <div>
            <label htmlFor="schoolName">School</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              placeholder="Enter School Name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Ex: Master's Degree in Math"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <GraduationInput />
          <div>
            <label htmlFor="location">
              Location{" "}
              <span style={{ color: "gray", fontSize: ".9em" }}> optional</span>
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <button>
              <MdDelete /> Delete
            </button>
            <button>
              <MdCancel /> Cancel
            </button>
            <button>
              <FaCheckCircle /> Save
            </button>
          </div>
        </>
      );
    }

    function GraduationInput() {
      const [isStudying, setIsStudying] = useState(false);
      const [graduationYear, setGraduationYear] = useState("");

      return (
        <div>
          <label>
            <input
              type="checkbox"
              checked={isStudying}
              onChange={(e) => setIsStudying(e.target.checked)}
            />
            Still studying
          </label>

          {!isStudying && (
            <div>
              <label htmlFor="graduationYear">Year of graduation</label>
              <input
                type="number"
                id="graduationYear"
                name="graduationYear"
                value={graduationYear}
                onChange={(e) => setGraduationYear(parseInt(e.target.value))}
                min="1900"
                max="2030"
                placeholder="Enter Graduation year"
              />
            </div>
          )}

          {isStudying && (
            <p style={{ color: "gray", fontSize: "0.9em" }}>
              You can enter your expected graduation year if you'd like.
            </p>
          )}
        </div>
      );
    }

    return (
      <>
        <button>
          <IoMdAdd />
          Education
        </button>
      </>
    );
  }

  function handleFoldExp() {
    setFoldExperience(!foldExperience);
  }
  function handleFoldEdu() {
    setFoldEducation(!foldEducation);
  }

  return (
    <form action={handleSubmit}>
      <General />
      <div>
        <button onClick={handleFoldExp}>
          <div>
            <h2>
              <MdWork /> Experiences
            </h2>
            <BiSolidDownArrow />
          </div>
        </button>
        {foldExperience && <Experience />}
      </div>
      <div>
        <button onClick={handleFoldEdu}>
          <div>
            <h2>
              <FaGraduationCap /> Education
            </h2>
            <BiSolidDownArrow />
          </div>
        </button>
        {foldEducation && <Education />}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
