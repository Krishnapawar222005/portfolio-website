import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      alert(data.message)

      setFormData({
        name: "",
        email: "",
        message: "",
      })

    } catch (error) {
      console.log(error)
      alert("Error sending message")
    }
  }

  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Contact Me</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
    </section>
  )
}

export default Contact