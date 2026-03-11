import developer from "../assets/developer.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* TEXT */}

        <div className="hero-text">

          <h1>Sanjay</h1>

          <p>Full Stack Developer | MERN | Java | Python</p>

          <p className="hero-desc">
            I build scalable web applications using modern technologies
            like React, Node.js, Spring Boot and MongoDB.
          </p>

        </div>

        {/* IMAGE */}

        <div className="hero-image">
          <img src={developer} alt="Developer working" />
        </div>

      </div>

    </section>
  );
}