import { MdWork } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

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

export default Experience;
