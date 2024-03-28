import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      
      <Header />
      <br></br>
      <div className="col-lg-6 col-sm-12 offset-lg-3">
        <form action="/notice?content=Thank%20you%20for%20your%20submission">
          <div className="form-group">
            <label htmlFor="InputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="InputFName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="InputFName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputLName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="InputLName"
              placeholder="Last Name"
            />
          </div>
          <label htmlFor="InputTextarea">Comment</label>
          <textarea
            className="form-control"
            id="InputTextarea"
            rows={3}
            defaultValue={""}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
