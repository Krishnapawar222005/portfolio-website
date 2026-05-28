function Projects() {
  return (
    <section id="projects">
      <h1 style={{ textAlign: "center" }}>
        Projects
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        <div className="project-card">
          <h2>Portfolio Website</h2>

          <p>
            Built using React.js and CSS.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h2>Weather App</h2>

          <p>
            Weather app using API integration.
          </p>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <h2>Todo App</h2>

          <p>
            Task management app using JavaScript.
          </p>

          <button>View Project</button>
        </div>
      </div>
    </section>
  )
}

export default Projects