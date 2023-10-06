import React from 'react';
import logo from '../logo.svg';

export default function MainPage() {
    return (

        <>
         <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
    <h1 class="display-5 fw-bold text-body-emphasis">Landing Page</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">All pages are styled using Bootstrap </p>
    </div>
  </div>
        </>
    );
}
