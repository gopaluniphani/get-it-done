import React, { Fragment, useState } from "react";

import RegisterLawyer from "./RegisterLawyer";
import RegisterDoctor from "./RegisterDoctor";

const Register = (props) => {
  const [option, setOption] = useState(0);

  let renderForm = null;
  if (option === "1") renderForm = <RegisterLawyer />;
  else if (option === "2") renderForm = <RegisterDoctor />;

  return (
    <Fragment>
      <br /> <br />
      <div className="row" onChange={(e) => setOption(e.target.value)}>
        <div className="input-field col col s12 m6 push-m3">
          <select defaultValue="0">
            <option value="0" disabled>
              Choose a value
            </option>
            <option value="1">Lawyer</option>
            <option value="2">Doctor</option>
          </select>
          <label>I'm a </label>
        </div>
      </div>
      {renderForm}
    </Fragment>
  );
};

export default Register;
