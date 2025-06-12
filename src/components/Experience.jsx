import { useState } from "react";
import { MdWork } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <>
      <h2>
        <MdWork /> Experiences
      </h2>

      {/** [ ] Add Expereiences with visibility functionality */}

      <button>
        <IoMdAdd /> Experience
      </button>
    </>
  );
}

function AddExperience() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibs, setMainResponsibs] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter Company Name"
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={positionTitle}
          onChange={(e) => setPositionTitle(e.target.value)}
          placeholder="Enter Position Title"
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={startDate}
          placeholder="Enter Start Date"
          onChange={(e) => setStartDate(e.target.value)}
          max={endDate}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          placeholder="Enter End Date"
          onChange={(e) => setEndDate(e.target.value)}
          min={startDate}
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
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
          value={mainResponsibs}
          rows={5}
          cols={20}
          onChange={(e) => setMainResponsibs(e.target.value)}
          placeholder="Describe your Main Responsibilities at that position"
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

export default Experience;
