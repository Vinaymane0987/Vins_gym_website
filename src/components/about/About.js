import React from "react";
import "./About.css";
import { GoStar } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import { IoIosNutrition } from "react-icons/io";
import { HiArrowSmRight } from "react-icons/hi";
import Price from "./Price";
import AboutUs from "./AboutUs";
import Mid from "./Mid";

const About = () => {
  return (
    <div className="about">
      <div className="grid__css1">
        <div id="grid__container__content1">
          <GoStar className="react__icon" />
          <h7>Experience</h7>
          <p>
            Our Specialists take care of your form and they will check and talk
            to you if you have any questions during the execution of the
            exercise plans.
          </p>
          <div className="a_tag">
            <a href="#">Read more</a>
            <HiArrowSmRight />
          </div>
        </div>
        <div id="grid__container__content1">
          <MdContactPage className="react__icon" />
          <h7>Coach Trainer</h7>
          <p>
            Our personal trainers are available for you, you can send an inquiry
            at any time or call your trainer. Use the price list and choose the
            right plan for you.
          </p>
          <div className="a_tag">
            <a href="#">Read more</a>
            <HiArrowSmRight />
          </div>
        </div>
        <div id="grid__container__content1">
          <IoIosNutrition className="react__icon" />
          <h7>Nutrition diet</h7>
          <p>
            You will also get access to a premium account, thanks to which you
            will have access to articles with advice and tips for cooking.
          </p>
          <div className="a_tag">
            <a href="#">Read more</a>
            <HiArrowSmRight />
          </div>
        </div>
      </div>
      {/* mid section */}
      <Mid />
      {/* price section */}
      <Price />
      {/* aboutus section */}
      <AboutUs />
    </div>
  );
};

export default About;
