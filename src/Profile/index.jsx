import React from "react";
import "./style.css";
import App from "../App";
import img_bg from "../imgs/bg-pattern-card.svg";
import logo from "../imgs/image-victor.jpg";
// IMG_TOP_AND_BOTTOM_BACKGROUND
import img_top from "../imgs/bg-pattern-top.svg";
import img_bottom from "../imgs/bg-pattern-bottom.svg";

export default function Profile() {
  return (
    <div className="container">
      <div className="Profile_Section">
        <div className="bg_and_avatar">
          <div className="logo_user">
            <img id="logo_rounded" src={logo}></img>
          </div>
        </div>
        <div className="name_and_location">
          <p id="name_age">
            Victor Crest <span id="age"> 26</span>
          </p>
          <p id="location">London</p>
        </div>
        <div className="followers_div">
          <div className="box_followers">
            <p className="amount">80K</p>
            <p className="type_amount">Followers</p>
          </div>
          <div className="box_followers">
            <p className="amount">803K</p>
            <p className="type_amount">Likes</p>
          </div>
          <div className="box_followers">
            <p className="amount">1.5K</p>
            <p className="type_amount">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
