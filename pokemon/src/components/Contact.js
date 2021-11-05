import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact__container">
      <h2 className="contact">Contact us</h2>
      <form className="contact__form">
        <div className="contact__name">
          <label for="fName" id="nameLabel">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="contact__fName"
          />

          <label for="lName">Last name</label>
          <input type="text" id="lastName" className="contact__lName" />
        </div>
        <div>
          <label for="email">Email</label>

          <input
            type="email"
            name="email"
            id="email"
            className="contact__email"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea
            placeholder="Start typing..."
            className="contact__message"
            name="message"
          ></textarea>
          <button type="submit" className="contact__send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
