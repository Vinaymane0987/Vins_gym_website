import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__details">
        <div className="contact__img"></div>
        <form action="">
          <div className="details">
            <div className="name">
              <input
                className="inputfield"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="name">
              <input className="inputfield" type="email" placeholder="email" />
            </div>
            <div className="name">
              <input
                className="inputfield"
                type="number"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message here"
          >
            Message
          </textarea>
        </form>
        <div className="attachment">
          <h2>Atttachment</h2>
          <p>
            Please attach your document with your CV. Please remember that the
            file should be best in the .PDF document and should not be larger
            than [2MB]
          </p>
          <input className="input__file" type="file" placeholder="Your file" />
          <div>
            <input className="chaeckbox__input" type="checkbox" name="" id="" />
            <span>I agree to the Privacy Policy</span>
          </div>
          <button type="submit">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
