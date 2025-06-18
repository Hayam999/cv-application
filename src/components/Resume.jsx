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
function Profile() {
  return (
    <div>
      <div>
        {/* [ ]Add Profile icon */}
        <h3>Profile</h3>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          incidunt perspiciatis possimus alias corrupti unde quam culpa qui
          tempora laborum, doloribus suscipit eos a, quisquam ab voluptate.
          Nostrum, ratione quidem!
        </p>
      </div>
    </div>
  );
}

function Experience({ experiences }) {
  return (
    <div>
      <div>
        {/*[ ] Add Experience icon */}
        <h3>Experience</h3>
      </div>
      {experiences && experiences.length > 0 ? (
        experiences.map((exp) => (
          <div key={exp.id}>
            <h4>{exp.positionTitle}</h4>
            <h5>{exp.companyName}</h5>
            <p>
              {exp.companyStartDate} - {exp.companyEndDate}
            </p>
            {exp.companyLocation && <p>{exp.companyLocation}</p>}
            {exp.mainResponsibs && <p>{exp.mainResponsibs}</p>}
          </div>
        ))
      ) : (
        <div>
          <h4>Senior Graphic Designer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            reiciendis. Dolore error ipsum quos, doloremque neque iure
            explicabo?{" "}
          </p>
        </div>
      )}
    </div>
  );
}

function Education({ schools }) {
  return (
    <div>
      <div>
        <h3>{/*[ ] Add Education Icon */} Education</h3>
      </div>
      {schools && schools.length > 0 ? (
        schools.map((school) => (
          <div key={school.id}>
            <h4>{school.degree}</h4>
            <h5>{school.schoolName}</h5>
            <p>
              {school.schoolStartDate} - {school.schoolEndDate}
            </p>
            {school.schoolLocation && <p>{school.schoolLocation}</p>}
          </div>
        ))
      ) : (
        <div>
          <h4>Bachelor of Fine Arts in Graphic Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ipsam, amet veritatis
          </p>
        </div>
      )}
    </div>
  );
}

function Content({ experiences, schools }) {
  return (
    <div className={styles.content}>
      <Profile />
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
      <Content
        experiences={resumeData.experiences}
        schools={resumeData.schools}
      />
    </div>
  );
}

export default Resume;
