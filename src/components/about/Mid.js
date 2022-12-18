import React from "react";
import "./Mid.css";
import { GoStar } from "react-icons/go";
import { HiArrowSmRight } from "react-icons/hi";
import { BsFileCheckFill } from "react-icons/bs";
const Mid = () => {
  return (
    <div className="mid">
      <div className="about__mid">
        <div className="one__css">
          <BsFileCheckFill className="react__icon" />
          <h6>1400+</h6>
          <div className="stars">
            <GoStar />
            <GoStar />
            <GoStar />
            <GoStar />
            <GoStar />
          </div>
          <h1>Satisfied Customers</h1>
          <p>
            Many people have already trsuted us.This number is constantly
            growing thanks to the positive feedback from our customers.
          </p>
          <div className="a_tag">
            <a href="#">Read more</a>
            <HiArrowSmRight />
          </div>
        </div>
        <div className="two__css">
          <div className="about_img"></div>
          <h2>Get in shape and training at the gym or home.</h2>
          <p>
            We have been creating and implementing projects for many years all
            over the world,we have hundred of satisfied customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mid;
