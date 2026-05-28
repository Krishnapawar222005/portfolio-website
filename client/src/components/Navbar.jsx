function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        backgroundColor: "#111",
        color: "white",
        position: "sticky",
        top: "0",
      }}
    >
      <h1 style={{ color: "#38bdf8" }}>
        Krishna Portfolio
      </h1>

      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar