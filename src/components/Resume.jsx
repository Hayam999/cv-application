function Resume() {
  return (
    <>
      <Header />
      <Experience />
      <Education />
      <Portfolio />
    </>
  );
}

function Header() {
  return (
    <>
      <div>
        <h1>Hayam Kamal</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <Contact />
      <Skills />
      <Interests />
    </>
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
          <p>hayammhmd90@gmail.com</p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>+201050879165</p>
        </div>
        <div>
          <h5>Website</h5>
          <p>hayamkamal.com</p>
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
export default Resume;
