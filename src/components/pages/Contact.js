import React from 'react'
import '../../assets/css/Contact.css'

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let contactForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(contactForm)
  }
  return (
    <div className="container">
      <h2 className="heading">Contact me </h2>
      <form onSubmit={onSubmit}>
        <div className="heading">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-text" type="text" id="name" required />
        </div>
        <div className="heading">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-text" type="email" id="email" required />
        </div>
        <div className="heading">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-text" id="message" required />
        </div>
        <button className="btn btn-red" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
