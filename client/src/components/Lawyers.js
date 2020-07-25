import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getLawyers } from "../actions/retrieve";

const Lawyers = (props) => {
  const lawyers = useSelector((store) => store.retrieve.lawyers);
  const lawyersLoaded = useSelector((store) => store.retrieve.lawyersLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lawyersLoaded) getLawyers()(dispatch);
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
                <th>Expertise</th>
              </tr>
            </thead>
            <tbody>
              {lawyers.map((lawyer) => (
                <tr key={lawyer._id}>
                  <td>{lawyer.first_name}</td>
                  <td>{lawyer.email}</td>
                  <td>{lawyer.phone}</td>
                  <td>{lawyer.expertise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Lawyers;
