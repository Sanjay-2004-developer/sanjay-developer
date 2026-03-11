export default function Projects() {

  const projects = [
    {
      title: "ServiceMate",
      tech: "React.js, Java, Spring Boot, MySQL",
      desc: "Developed a service management platform where users can request and manage services. Built frontend with React and backend REST APIs using Spring Boot and MySQL."
    },
    {
      title: "E-commerce Website",
      tech: "React.js, Node.js, Express.js, MongoDB",
      desc: "Full-featured e-commerce platform with product listings, authentication, and admin dashboard."
    },
    {
      title: "Chat and Quiz App",
      tech: "React.js, Node.js, MongoDB, Socket.io",
      desc: "Real-time chat application integrated with quiz functionality."
    },
    {
      title: "Face Detection Attendance System",
      tech: "Python, OpenCV, Machine Learning",
      desc: "Face recognition system to automate attendance tracking."
    }
  ];

  return (
    <section id="projects">

      <div className="container">

        <h2 className="section-title">Projects</h2>

        <div className="grid-cards">

          {projects.map((project, index) => (
            <div key={index} className="box project-card">

              <h3>{project.title}</h3>

              <p><strong>Tech:</strong> {project.tech}</p>

              <p>{project.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}