import React from "react";
import Page1 from "../Page1";

const BusinessApp = () => {
  return (
    <div>
      <Page1 />
      <div className="row top-row">
        <img src="water1.jpg" className="web-home-pg-img" />
        <div className="left-side">
          <h1 className="main-heading">
            The Best Way to Manage Water, Milk, Tiffin, Bakery or any Delivery
            Business
          </h1>
          <div className="btn-group">
            <button className="button" id="google-play-btn">
              <b>Download on Google Play</b>
              <img src="playstore-icon.png" className="download-link" />
            </button>
            <button className="button button-apple-icon" id="apple-store-btn">
              <b>Download on Apple Store</b>
              <img src="apple-icon.png" className="download-link" />
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default BusinessApp;
