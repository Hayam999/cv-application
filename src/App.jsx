import { StrictMode, useState } from "react";

import Form from "./components/Form";
import Resume from "./components/Resume";
import styles from "./styles/App.module.css";

import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [schools, setSchools] = useState([]);
  const [companys, setCompanys] = useState([]);

  {
    /* const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibs, setMainResponsibs] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  {
    /*
  const [startDate, setStartDate] = useState("");
/*const [location, setLocation] = useState("");*/
  }
  const setters = {
    setFullName,
    setEmail,
    setPhoneNumber,
    setAddress,
    setWebsite,
    setSchools,
    setCompanys,
    /* setSchoolName,
    setDegree,
    setCompanyName,
    setPositionTitle,
    setMainResponsibs,
    setCompanyStartDate,
    setCompanyEndDate,
    setCompanyLocation, */
  };

  const resumeData = {
    fullName,
    email,
    phoneNumber,
    address,
    website,
    schools,
    companys,
    /*schoolName,
    degree,
    companyName,
    positionTitle,
    mainResponsibs,
    companyStartDate,
    companyEndDate,
    companyLocation,*/
  };

  return (
    <div className={styles.app}>
      <Form
        setters={setters}
        resumeData={resumeData}
        companys={companys}
        schools={schools}
      />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default App;
