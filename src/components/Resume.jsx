import styles from "../styles/Resume.module.css";

function Resume({ resumeData }) {
  function Header() {
    return (
      <div className={styles.header}>
        <div>
          <h1>{resumeData.fullName}</h1>
        </div>
        <Contact />
        <Skills />
        <Interests />
      </div>
    );
  }

  function Contact() {
    return (
      <>
        <div>
          {/* [ ] ADD Phone Icon */}
          <h3>Contact</h3>
        </div>
        <div>
          <div>
            <h5>Email</h5>
            <p>{resumeData.email}</p>
          </div>
          <div>
            <h5>Phone</h5>
            <p>{resumeData.phoneNumber}</p>
          </div>
          <div>
            <h5>Website</h5>
            <p>{resumeData.website}</p>
          </div>
        </div>
      </>
    );
  }

  function Skills() {
    return (
      <>
        <div>
          {/* [ ]Add skills icon */}
          <h3>Skills</h3>
        </div>
        <div>
          <div>
            <p>JavaScript</p>
          </div>
          <div>
            <p>React</p>
          </div>
          <div>
            <p>Git, Github</p>
          </div>
        </div>
      </>
    );
  }

  function Interests() {
    return (
      <>
        <div>
          {/* [ ] Add interests icon*/}
          <h3>Interests</h3>
        </div>
        <div>
          <p>Medetation</p>
          <p>Yoga</p>
          <p>Nay</p>
        </div>
      </>
    );
  }

  function Content() {
    return (
      <div className={styles.content}>
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
        <div>
          <div>
            {/*[ ] Add Experience icon */}
            <h3>Experience</h3>
          </div>
          <div>
            <h4>Senior Graphic Designer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              reiciendis. Dolore error ipsum quos, doloremque neque iure
              explicabo?{" "}
            </p>
          </div>
          <div>
            <h4>Graphic Designer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              reiciendis. Dolore error ipsum quos, doloremque neque iure
              explicabo?{" "}
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3>{/*[ ] Add Education Icon */} Education</h3>
          </div>
          <div>
            <h4>Bachelor of Fine Arts in Graphic Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ipsam, amet veritatis
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.resume}>
      <Header />
      <Content />
    </div>
  );
}

export default Resume;
