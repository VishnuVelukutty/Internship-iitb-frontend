import React from 'react';
import logo from '../logo.svg';

export default function MainPage() {
  return (

    <>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
        <h1 className="display-5 fw-bold text-body-emphasis">Landing Page</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">All pages are styled using Bootstrap </p>
        </div>
      </div>
    </>
  );
}
