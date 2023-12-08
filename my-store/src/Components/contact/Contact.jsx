import { useState } from "react";
import "../../assets/styles/contact.css";

export default function Contact() {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <div className="contact_container">
        <div className="content">
          <h2>Contact Us</h2>
          <div className="form">
            <form method="POST">
              <input
                type="text"
                name="Name"
                value={user.Name}
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
                onChange={data}
              ></input>
              <input
                type="email"
                name="Email"
                value={user.Email}
                placeholder="Enter Your Email address"
                autoComplete="off"
                onChange={data}
              ></input>
              <input
                type="text"
                name="Subject"
                value={user.Subject}
                placeholder="Enter Your Subject"
                autoComplete="off"
                onChange={data}
              ></input>
              <textarea
                name="Message"
                value={user.Message}
                placeholder="Your Message"
                autoComplete="off"
                onChange={data}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
