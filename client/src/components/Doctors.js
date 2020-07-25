import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDoctors } from "../actions/retrieve";

const Doctors = (props) => {
  const doctors = useSelector((store) => store.retrieve.doctors);
  const doctorsLoaded = useSelector((store) => store.retrieve.doctorsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!doctorsLoaded) getDoctors()(dispatch);
  });

  return (
    <Fragment>
      <br />
      <div className="row">
        <div className="col s12 m6 push-m3">
          <table className="striped centered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td>{doctor.first_name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phone}</td>
                  <td>{doctor.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Doctors;
