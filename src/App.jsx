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
  const [loadExample, setLoadExample] = useState(true);

  const setters = {
    setFullName,
    setEmail,
    setPhoneNumber,
    setAddress,
    setWebsite,
    setSchools,
    setCompanys,
  };

  const resumeData = {
    fullName,
    email,
    phoneNumber,
    address,
    website,
    schools,
    companys,
  };

  return (
    <div className={styles.app}>
      <Form
        setters={setters}
        submittedData={resumeData}
        useExample={loadExample}
        setUseExample={setLoadExample}
      />
      <Resume resumeData={resumeData} />
    </div>
  );
}

export default App;
