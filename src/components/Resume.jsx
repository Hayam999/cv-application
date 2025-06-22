import styles from "../styles/Resume.module.css";

function Contact({ email, phoneNumber, website }) {
  return (
    <>
      <div
        style={{
          marginBottom: ".75em",
          textAlign: "left",
        }}
      >
        {/* [ ] ADD Phone Icon */}
        <h2>Contact</h2>
      </div>
      <div className={styles.contactInfo}>
        <div>
          <h5>Email</h5>
          <p>{email}</p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>{phoneNumber}</p>
        </div>
        <div>
          <h5>Website</h5>
          <p>{website}</p>
        </div>
      </div>
    </>
  );
}

function Header({ fullName, email, phoneNumber, website }) {
  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <h1>{fullName}</h1>
      </div>
      <Contact email={email} phoneNumber={phoneNumber} website={website} />
    </div>
  );
}

// Separate Content Components

function Experience({ experiences }) {
  return (
    <div className={styles.experiences}>
      <div className={styles.eHead}>
        <h1>Professional Experience</h1>
      </div>
      {experiences.map((exp) => (
        <div className={styles.eUnit} key={exp.id}>
          <h2>{exp.positionTitle}</h2>
          <h3>{exp.companyName}</h3>
          <p>
            {exp.companyStartDate} - {exp.companyEndDate}
          </p>
          {exp.companyLocation && <p>{exp.companyLocation}</p>}
          {exp.mainResponsibs && <p>{exp.mainResponsibs}</p>}
        </div>
      ))}
    </div>
  );
}

function Education({ schools }) {
  return (
    <div className={styles.educations}>
      <div className={styles.eHead}>
        <h1>Education</h1>
      </div>
      {schools.map((school) => (
        <div className={styles.eUnit} key={school.resumeId}>
          <h2>{school.degree}</h2>
          <h3>{school.schoolName}</h3>
          <p>
            {school.schoolStartDate} - {school.schoolEndDate}
          </p>
          {school.schoolLocation && <p>{school.schoolLocation}</p>}
        </div>
      ))}
    </div>
  );
}

function Content({ experiences, schools }) {
  return (
    <div className={styles.content}>
      <Experience experiences={experiences} />
      <Education schools={schools} />
    </div>
  );
}

// Main Resume Component
function Resume({ resumeData }) {
  return (
    <div className={styles.resume}>
      <Header
        fullName={resumeData.fullName}
        email={resumeData.email}
        phoneNumber={resumeData.phoneNumber}
        website={resumeData.website}
        className={styles.header}
      />
      <Content experiences={resumeData.companys} schools={resumeData.schools} />
    </div>
  );
}

export default Resume;
