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
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibs, setMainResponsibs] = useState("");
  {
    /*const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
/*const [location, setLocation] = useState("");*/
  }
  const setters = {
    setFullName,
    setEmail,
    setPhoneNumber,
    setAddress,
    setWebsite,
    setSchoolName,
    setDegree,
    setCompanyName,
    setPositionTitle,
    setMainResponsibs,
  };

  const resumeData = {
    fullName,
    email,
    phoneNumber,
    address,
    website,
    schoolName,
    degree,
    companyName,
    positionTitle,
    mainResponsibs,
  };

  return (
    <div className={styles.app}>
      <Form setters={setters} resumeData={resumeData} />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default App;
