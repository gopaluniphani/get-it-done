import React, { Fragment } from "react";

const Contact = (props) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col m10 offset-m1 s12">
            <h2 className="center-align">Get In Touch</h2>
            <div className="row">
              <p className="col m8 offset-m2 left-align">
                Do you have any questions? Please do not hesitate to call us
                directly. Our team will come back to you within no time.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="col m8 offset-m2 s12"
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input id="name" type="text" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="email" type="email" className="form-input" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea
                      id="message"
                      className="materialize-textarea"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col m12">
                    <p className="right-align">
                      <button
                        className="btn btn-large waves-effect waves-light"
                        type="button"
                        name="action"
                      >
                        Send Message
                      </button>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
