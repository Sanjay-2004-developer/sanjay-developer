const skills = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C++",
  "React",
  "Node.js",
  "Express.js",
  "Django",
  "Spring Boot",
  "MongoDB",
  "MySQL",
  "Git",
  "Postman",
  "Figma"
];

export default function Skills() {
  return (
    <section id="skills">

      <div className="container">

        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="box skill-box" key={index}>
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}