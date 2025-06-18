import { useState } from "react";
import { MdWork } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";

// Move AddExperience component outside as well to prevent cursor loss
function AddExperience({
  companyName,
  setCompanyName,
  positionTitle,
  setPositionTitle,
  companyStartDate,
  setCompanyStartDate,
  companyEndDate,
  setCompanyEndDate,
  companyLocation,
  setCompanyLocation,
  mainResponsibs,
  setMainResponsibs,
  updateCompanys,
  onReset,
  onCancel,
}) {
  return (
    <div>
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
        <label htmlFor="companyStartDate">Start Date</label>
        <input
          id="companyStartDate"
          name="companyStartDate"
          type="date"
          placeholder="Enter Start Date"
          value={companyStartDate}
          onChange={(e) => setCompanyStartDate(e.target.value)}
        />
        <label htmlFor="companyEndDate">End Date</label>
        <input
          type="date"
          id="companyEndDate"
          name="companyEndDate"
          placeholder="Enter End Date"
          value={companyEndDate}
          onChange={(e) => setCompanyEndDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="companyLocation">
          Location{" "}
          <span style={{ color: "gray", fontSize: ".9em" }}> optional</span>
        </label>
        <input
          type="text"
          name="companyLocation"
          id="companyLocation"
          placeholder="Enter companyLocation"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mainResponsibs">
          Main Responsibilities{" "}
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
        <button type="button" onClick={onReset}>
          <MdDelete /> Delete
        </button>
        <button type="button" onClick={onCancel}>
          <MdCancel /> Cancel
        </button>
        <button
          onClick={() =>
            updateCompanys({
              companyName,
              positionTitle,
              companyStartDate,
              companyEndDate,
              companyLocation,
              mainResponsibs,
            })
          }
        >
          <FaCheckCircle /> Save
        </button>
      </div>
    </div>
  );
}

// Move Experience component outside of Form
function Experience({
  companys,
  setters,
  addExperienceVisiblity,
  setAddExperienceVisibility,
}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibs, setMainResponsibs] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  function resetExp() {
    setCompanyName("");
    setPositionTitle("");
    setCompanyStartDate("");
    setCompanyEndDate("");
    setCompanyLocation("");
    setMainResponsibs("");
  }

  function handleCancelbtn() {
    resetExp();
    setAddExperienceVisibility(false);
  }

  function updateCompanys(coInfo) {
    setters.setCompanys([
      ...companys,
      {
        id: crypto.randomUUID(),
        companyName: coInfo.companyName,
        positionTitle: coInfo.positionTitle,
        companyStartDate: coInfo.companyStartDate,
        companyEndDate: coInfo.companyEndDate,
        companyLocation: coInfo.companyLocation,
        mainResponsibs: coInfo.mainResponsibs,
      },
    ]);

    resetExp();

    setAddExperienceVisibility(false);
  }

  if (!addExperienceVisiblity) {
    return (
      <button
        onClick={() => setAddExperienceVisibility(!addExperienceVisiblity)}
      >
        <IoMdAdd /> Experience
      </button>
    );
  }

  return (
    <AddExperience
      companyName={companyName}
      setCompanyName={setCompanyName}
      positionTitle={positionTitle}
      setPositionTitle={setPositionTitle}
      companyStartDate={companyStartDate}
      setCompanyStartDate={setCompanyStartDate}
      companyEndDate={companyEndDate}
      setCompanyEndDate={setCompanyEndDate}
      companyLocation={companyLocation}
      setCompanyLocation={setCompanyLocation}
      mainResponsibs={mainResponsibs}
      setMainResponsibs={setMainResponsibs}
      updateCompanys={updateCompanys}
      onReset={resetExp}
      onCancel={handleCancelbtn}
    />
  );
}

// Move AddSchool component outside as well
function AddSchool({
  schoolName,
  setSchoolName,
  degree,
  setDegree,
  schoolStartDate,
  setSchoolStartDate,
  schoolEndDate,
  setSchoolEndDate,
  schoolLocation,
  setSchoolLocation,
  updateSchools,
  onReset,
  onCancel,
}) {
  return (
    <div>
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
        <label htmlFor="schoolStartDate">Start Date</label>
        <input
          type="date"
          id="schoolStartDate"
          name="schoolStartDate"
          value={schoolStartDate}
          onChange={(e) => setSchoolStartDate(e.target.value)}
        />
      </div>
      <GraduationInput
        schoolEndDate={schoolEndDate}
        setSchoolEndDate={setSchoolEndDate}
      />
      <div>
        <label htmlFor="schoolLocation">
          Location{" "}
          <span style={{ color: "gray", fontSize: ".9em" }}> optional</span>
        </label>
        <input
          type="text"
          name="schoolLocation"
          id="schoolLocation"
          placeholder="Enter location"
          value={schoolLocation}
          onChange={(e) => setSchoolLocation(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onReset}>
          <MdDelete /> Delete
        </button>
        <button onClick={onCancel}>
          <MdCancel /> Cancel
        </button>
        <button
          onClick={() => {
            updateSchools(
              schoolName,
              degree,
              schoolStartDate,
              schoolEndDate,
              schoolLocation,
            );
          }}
        >
          <FaCheckCircle /> Save
        </button>
      </div>
    </div>
  );
}

// Move Education component outside of Form as well
function Education({
  schools,
  setters,
  addSchoolVisiblity,
  setAddSchoolVisiblity,
}) {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");

  function resetSchool() {
    setSchoolName("");
    setDegree("");
    setSchoolStartDate("");
    setSchoolEndDate("");
    setSchoolLocation("");
  }

  function handleCancelSchool() {
    resetSchool();
    setAddSchoolVisiblity(false);
  }

  function updateSchools(schoolInfo) {
    setters.setSchools([
      ...schools,
      {
        id: crypto.randomUUID(),
        schoolName: schoolInfo.schoolName,
        degree: schoolInfo.degree,
        schoolStartDate: schoolInfo.schoolStartDate,
        schoolEndDate: schoolInfo.schoolEndDate,
        schoolLocation: schoolInfo.schoolLocation,
      },
    ]);
    resetSchool();
    setAddSchoolVisiblity(false);
  }

  if (!addSchoolVisiblity) {
    return (
      <button
        type="button"
        onClick={() => setAddSchoolVisiblity(!addSchoolVisiblity)}
      >
        <IoMdAdd />
        Education
      </button>
    );
  }

  return (
    <AddSchool
      schoolName={schoolName}
      setSchoolName={setSchoolName}
      degree={degree}
      setDegree={setDegree}
      schoolStartDate={schoolStartDate}
      setSchoolStartDate={setSchoolStartDate}
      schoolEndDate={schoolEndDate}
      setSchoolEndDate={setSchoolEndDate}
      schoolLocation={schoolLocation}
      setSchoolLocation={setSchoolLocation}
      updateSchools={updateSchools}
      onReset={resetSchool}
      onCancel={handleCancelSchool}
    />
  );
}

function GraduationInput({ schoolEndDate, setSchoolEndDate }) {
  const [isStudying, setIsStudying] = useState(false);

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
          <label htmlFor="schoolEndDate">Year of graduation</label>
          <input
            type="number"
            id="schoolEndDate"
            name="schoolEndDate"
            value={schoolEndDate}
            onChange={(e) => setSchoolEndDate(parseInt(e.target.value))}
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

export function Form({ setters, companys, schools }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  const [foldExperience, setFoldExperience] = useState(false);
  const [foldEducation, setFoldEducation] = useState(false);
  const [addExperienceVisiblity, setAddExperienceVisibility] = useState(false);
  const [addSchoolVisiblity, setAddSchoolVisiblity] = useState(false);

  function handleSubmit(formData) {
    setters.setFullName(formData.get("fullName"));
    setters.setEmail(formData.get("email"));
    setters.setAddress(formData.get("address"));
    setters.setWebsite(formData.get("website"));
    setters.setPhoneNumber(formData.get("phoneNumber"));

    // Reset form input cells
    setFullName("");
    setEmail("");
    setAddress("");
    setWebsite("");
    setPhoneNumber("");
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
        <button type="button" onClick={handleFoldExp}>
          <div>
            <h2>
              <MdWork /> Experiences
            </h2>
            <BiSolidDownArrow />
          </div>
        </button>
        {foldExperience && (
          <Experience
            companys={companys}
            setters={setters}
            addExperienceVisiblity={addExperienceVisiblity}
            setAddExperienceVisibility={setAddExperienceVisibility}
          />
        )}
      </div>
      <div>
        <button type="button" onClick={handleFoldEdu}>
          <div>
            <h2>
              <FaGraduationCap /> Education
            </h2>
            <BiSolidDownArrow />
          </div>
        </button>
        {foldEducation && (
          <Education
            schools={schools}
            setters={setters}
            addSchoolVisiblity={addSchoolVisiblity}
            setAddSchoolVisiblity={setAddSchoolVisiblity}
          />
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
