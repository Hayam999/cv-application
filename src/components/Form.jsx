import { useState } from "react";
import { MdWork } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import styles from "../styles/Form.module.css";

// Separated General component
function General({
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
  website,
  setWebsite,
}) {
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
          placeholder="user-name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          placeholder="(555) 123-4567"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          type="text"
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
  setCompanys,
  addExperienceVisiblity,
  setAddExperienceVisibility,
  currentCoId,
  setCurrentCoId,
}) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibs, setMainResponsibs] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  function resetExp() {
    if (currentCoId !== "") {
      setCompanys(companys.filter((co) => co.id !== currentCoId));
      setCurrentCoId("");
    }
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
    if (currentCoId === "") {
      setCompanys([
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
    } else {
      const currentCo = Object.values(companys).find(
        (item) => item.id === currentCoId,
      );
      currentCo.companyName = coInfo.companyName;
      currentCo.positionTitle = coInfo.positionTitle;
      currentCo.companyStartDate = coInfo.companyStartDate;
      currentCo.companyEndDate = coInfo.companyEndDate;
      currentCo.companyLocation = coInfo.companyLocation;
      currentCo.mainResponsibs = coInfo.mainResponsibs;
      setCurrentCoId("");
    }

    resetExp();
    setAddExperienceVisibility(false);
  }

  if (!addExperienceVisiblity) {
    return (
      <>
        <button
          onClick={() => setAddExperienceVisibility(!addExperienceVisiblity)}
        >
          <IoMdAdd /> Experience
        </button>
        {companys.map((co) => {
          return (
            <div
              key={co.id}
              onClick={() => {
                setAddExperienceVisibility(!addExperienceVisiblity);
                setCurrentCoId(co.id);
                setCompanyName(co.companyName);
                setPositionTitle(co.positionTitle);
                setMainResponsibs(co.mainResponsibs);
                setCompanyStartDate(co.companyStartDate);
                setCompanyEndDate(co.companyEndDate);
                setCompanyLocation(co.companyLocation);
              }}
            >
              <h3>{co.companyName}</h3>
            </div>
          );
        })}
      </>
    );
  } else {
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
            updateSchools({
              schoolName,
              degree,
              schoolStartDate,
              schoolEndDate,
              schoolLocation,
            });
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
  setSchools,
  addSchoolVisiblity,
  setAddSchoolVisiblity,
  currentScId,
  setCurrentScId,
}) {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");

  function resetSchool() {
    if (currentScId !== "") {
      setSchools(schools.filter((sc) => sc.id !== currentScId));
      setCurrentScId("");
    }
    setSchoolName("");
    setDegree("");
    setSchoolStartDate("");
    setSchoolEndDate("");
    setSchoolLocation("");
  }

  function handleCancelSchool() {
    setAddSchoolVisiblity(false);
  }

  function updateSchools(schoolInfo) {
    if (currentScId === "") {
      setSchools([
        ...schools,
        {
          resumeId: crypto.randomUUID(),
          id: crypto.randomUUID(),
          schoolName: schoolInfo.schoolName,
          degree: schoolInfo.degree,
          schoolStartDate: schoolInfo.schoolStartDate,
          schoolEndDate: schoolInfo.schoolEndDate,
          schoolLocation: schoolInfo.schoolLocation,
        },
      ]);
    } else {
      const currentSc = Object.values(schools).find(
        (item) => item.id === currentScId,
      );
      currentSc.id = schoolInfo.id;
      currentSc.resumeId = schoolInfo.resumeId;
      currentSc.schoolName = schoolInfo.schoolName;
      currentSc.degree = schoolInfo.degree;
      currentSc.schoolStartDate = schoolInfo.schoolStartDate;
      currentSc.schoolEndDate = schoolInfo.schoolEndDate;
      currentSc.schoolLocation = schoolInfo.schoolLocation;
      setCurrentScId("");
    }
    resetSchool();
    setAddSchoolVisiblity(false);
  }

  if (!addSchoolVisiblity) {
    return (
      <>
        <button
          type="button"
          onClick={() => setAddSchoolVisiblity(!addSchoolVisiblity)}
        >
          <IoMdAdd />
          Education
        </button>
        {schools.map((sc) => {
          return (
            <div
              key={sc.id}
              onClick={() => {
                setAddSchoolVisiblity(!addSchoolVisiblity);
                setCurrentScId(sc.id);
                setSchoolName(sc.schoolName);
                setDegree(sc.degree);
                setSchoolStartDate(sc.schoolStartDate);
                setSchoolEndDate(sc.schoolEndDate);
                setSchoolLocation(sc.schoolLocation);
              }}
            >
              <h3>{sc.schoolName}</h3>
            </div>
          );
        })}
      </>
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

export function Form({ setters, submittedData }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [tempCompanys, setTempCompanys] = useState([]);
  const [tempSchools, setTempSchools] = useState([]);
  const [currentCoId, setCurrentCoId] = useState("");
  const [currentScId, setCurrentScId] = useState("");
  const [showEditBtn, setShowEditBtn] = useState(true);

  const [foldExperience, setFoldExperience] = useState(false);
  const [foldEducation, setFoldEducation] = useState(false);
  const [addExperienceVisiblity, setAddExperienceVisibility] = useState(false);

  const [addSchoolVisiblity, setAddSchoolVisiblity] = useState(false);

  function editResume() {
    setShowEditBtn(false);
    setFullName(submittedData.fullName);
    setEmail(submittedData.email);
    setAddress(submittedData.address);
    setWebsite(submittedData.website);
    setPhoneNumber(submittedData.phoneNumber);
    setTempCompanys(submittedData.companys);
    setTempSchools(submittedData.schools);
  }
  function clearResume() {
    setters.setFullName("");
    setters.setEmail("");
    setters.setAddress("");
    setters.setWebsite("");
    setters.setPhoneNumber("");
    setters.setCompanys([]);
    setters.setSchools([]);

    setFullName("");
    setEmail("");
    setAddress("");
    setWebsite("");
    setPhoneNumber("");
    setTempCompanys([]);
    setTempSchools([]);
  }

  function handleSubmit(formData) {
    setters.setFullName(formData.get("fullName"));
    setters.setEmail(formData.get("email"));
    setters.setAddress(formData.get("address"));
    setters.setWebsite(formData.get("website"));
    setters.setPhoneNumber(formData.get("phoneNumber"));
    setters.setCompanys(tempCompanys);
    setters.setSchools(tempSchools);

    setShowEditBtn(true);
  }

  function handleFoldExp() {
    setFoldExperience(!foldExperience);
  }

  function handleFoldEdu() {
    setFoldEducation(!foldEducation);
  }

  // Sample tempCompanys array with 2 fake experiences
  const sampleCompanys = [
    {
      id: crypto.randomUUID(),
      companyName: "Tech Solutions Inc",
      positionTitle: "Senior Software Developer",
      companyStartDate: "2022-01-15",
      companyEndDate: "2024-08-30",
      companyLocation: "Cairo, Egypt",
      mainResponsibs:
        "Developed and maintained web applications using React and Node.js. Led a team of 3 junior developers and collaborated with cross-functional teams to deliver high-quality software solutions. Implemented automated testing procedures that reduced bug reports by 40%.",
    },
    {
      id: crypto.randomUUID(),
      companyName: "Digital Marketing Agency",
      positionTitle: "Frontend Developer",
      companyStartDate: "2020-06-01",
      companyEndDate: "2021-12-31",
      companyLocation: "Giza, Egypt",
      mainResponsibs:
        "Created responsive web interfaces for client websites using HTML, CSS, and JavaScript. Worked closely with designers to implement pixel-perfect designs and ensured cross-browser compatibility. Optimized website performance resulting in 25% faster load times.",
    },
  ];

  // Sample tempSchools array with 2 fake educations
  const sampleSchools = [
    {
      resumeId: crypto.randomUUID(),
      id: crypto.randomUUID(),
      schoolName: "Cairo University",
      degree: "Bachelor's Degree in Computer Science",
      schoolStartDate: "2016-09-01",
      schoolEndDate: 2020,
      schoolLocation: "Cairo, Egypt",
    },
    {
      resumeId: crypto.randomUUID(),
      id: crypto.randomUUID(),
      schoolName: "American University in Cairo",
      degree: "Diploma in Web Development",
      schoolStartDate: "2019-01-15",
      schoolEndDate: 2019,
      schoolLocation: "New Cairo, Egypt",
    },
  ];

  // Updated loadExample function
  function loadExample() {
    setters.setFullName("Hayam Kamal");
    setters.setEmail("hayammhmd90@gmail.com");
    setters.setAddress("Giza, Egypt");
    setters.setWebsite("www.example.com");
    setters.setPhoneNumber("+201050879165");
    setters.setCompanys(sampleCompanys);
    setters.setSchools(sampleSchools);

    setFullName("Hayam Kamal");
    setEmail("hayammhmd90@gmail.com");
    setAddress("Giza, Egypt");
    setWebsite("www.example.com");
    setPhoneNumber("+201050879165");
    setTempCompanys(sampleCompanys);
    setTempSchools(sampleSchools);
  }

  return (
    <div className={styles.form}>
      <button onClick={loadExample}>Load Example</button>
      <button onClick={clearResume}>Clear Resume</button>
      <form action={handleSubmit}>
        <General
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          address={address}
          setAddress={setAddress}
          website={website}
          setWebsite={setWebsite}
        />
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
              companys={tempCompanys}
              setCompanys={setTempCompanys}
              addExperienceVisiblity={addExperienceVisiblity}
              setAddExperienceVisibility={setAddExperienceVisibility}
              currentCoId={currentCoId}
              setCurrentCoId={setCurrentCoId}
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
              schools={tempSchools}
              setSchools={setTempSchools}
              addSchoolVisiblity={addSchoolVisiblity}
              setAddSchoolVisiblity={setAddSchoolVisiblity}
              currentScId={currentScId}
              setCurrentScId={setCurrentScId}
            />
          )}
        </div>
        <button type="submit">Submit</button>

        {showEditBtn && (
          <button type="button" onClick={editResume}>
            Edit Resume
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
