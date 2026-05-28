function Skills() {
  return (
    <section id="skills">
      <h1 style={{ textAlign: "center" }}>
        Skills
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        <div className="card">HTML</div>
        <div className="card">CSS</div>
        <div className="card">JavaScript</div>
        <div className="card">React.js</div>
        <div className="card">Node.js</div>
        <div className="card">MongoDB</div>
      </div>
    </section>
  )
}

export default Skills