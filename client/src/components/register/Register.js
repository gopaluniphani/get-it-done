import React, { Fragment, useState, useEffect } from "react";
import M from "materialize-css";

import RegisterLawyer from "./RegisterLawyer";
import RegisterDoctor from "./RegisterDoctor";

const Register = (props) => {
  const [option, setOption] = useState(0);

  let renderForm = null;
  if (option === "1") renderForm = <RegisterLawyer />;
  else if (option === "2") renderForm = <RegisterDoctor />;

  useEffect(() => {
    let elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  return (
    <Fragment>
      <br /> <br />
      <div className="row">
        <form>
          <div className="input-field col s12 m6 push-m3">
            <select value={option} onChange={(e) => setOption(e.target.value)}>
              <option value="0" disabled>
                Choose a value
              </option>
              <option value="1">Lawyer</option>
              <option value="2">Doctor</option>
            </select>
            <label>I'm a </label>
          </div>
        </form>
      </div>
      {renderForm}
    </Fragment>
  );
};

export default Register;
