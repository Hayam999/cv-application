import styles from "../styles/Resume.module.css";

function Contact({ email, phoneNumber, website }) {
  return (
    <>
      <div>
        {/* [ ] ADD Phone Icon */}
        <h3>Contact</h3>
      </div>
      <div>
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
      <div>
        <h1>{fullName}</h1>
      </div>
      <Contact email={email} phoneNumber={phoneNumber} website={website} />
    </div>
  );
}

// Separate Content Components

function Experience({ experiences }) {
  return (
    <div>
      <div>
        <h3>Professional Experience</h3>
      </div>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <h4>{exp.positionTitle}</h4>
          <h5>{exp.companyName}</h5>
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
    <div>
      <div>
        <h3>Education</h3>
      </div>
      {schools && schools.length > 0 ? (
        schools.map((school) => (
          <div>
            <h4>{school.degree}</h4>
            <h5>{school.schoolName}</h5>
            <p>
              {school.schoolStartDate} - {school.schoolEndDate}
            </p>
            {school.schoolLocation && <p>{school.schoolLocation}</p>}
          </div>
        ))
      ) : (
        <div></div>
      )}
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
      />
      <Content experiences={resumeData.companys} schools={resumeData.schools} />
    </div>
  );
}

export default Resume;
