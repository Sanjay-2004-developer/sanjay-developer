export default function About() {
  return (
    <section id="about">
      <div className="container">

        <h2 className="section-title">About Me</h2>

        <div className="box about-main">

          <p>
            I am a Full Stack Developer with experience in Python, Java, and
            MERN stack development. I specialize in building responsive web
            applications using modern frontend technologies like HTML, CSS,
            JavaScript, and React.
          </p>

          <p>
            On the backend, I work with Node.js, Express.js, Django, and
            Spring Boot to build scalable REST APIs and secure authentication
            systems while integrating databases like MongoDB and MySQL.
          </p>

          <p>
            I enjoy solving real-world problems, building scalable
            applications, and continuously improving my development skills.
          </p>

        </div>

        <div className="about-cards">

          <div className="box">
            <h3>💻 Full Stack Development</h3>
            <p>Building scalable web apps using MERN, Django, and Spring Boot.</p>
          </div>

          <div className="box">
            <h3>⚡ API Development</h3>
            <p>Designing RESTful APIs with authentication and CRUD operations.</p>
          </div>

          <div className="box">
            <h3>🚀 Problem Solving</h3>
            <p>Strong debugging and algorithmic problem solving skills.</p>
          </div>

          <div className="box">
            <h3>🌍 Career Goal</h3>
            <p>Become a highly skilled software engineer building impactful products.</p>
          </div>

        </div>

      </div>
    </section>
  );
}