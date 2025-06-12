import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function Education() {
  return (
    <>
      <h2>
        <FaGraduationCap /> Education
      </h2>

      <button>
        <IoMdAdd />
        Education
      </button>
    </>
  );
}

function AddSchool() {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");

  const [location, setLocation] = useState("");
  return (
    <>
      <div>
        <label htmlFor="schoolName">School</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          placeholder="Enter School Name"
        />
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Ex: Master's Degree in Math"
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
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

export default Education;
