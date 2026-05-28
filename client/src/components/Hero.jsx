function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "#38bdf8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        KP
      </div>

      <h1>
        Hello, I'm Krishna Pawar 👋
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Full Stack Developer
      </h2>

      <p>
        Building modern web applications 🚀
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="https://github.com/"
          target="_blank"
        >
          <button>GitHub</button>
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
        >
          <button>LinkedIn</button>
        </a>

        <button>
          Download Resume
        </button>
      </div>
    </section>
  )
}

export default Hero