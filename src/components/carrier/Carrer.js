import React from "react";
import "./Carrer.css";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { BiTimeFive } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaArtstation } from "react-icons/fa";
const Carrer = () => {
  return (
    <div className="career">
      <div className="career__content">
        <div className="job__list">
          <h3>Job List</h3>
          <h1>Search Our Joblist</h1>
          <p>
            if you are looking for a job and want to join our group, we are
            constatly recruiting new employees for the indicated positions.
          </p>
        </div>
      </div>
      <div className="first__container">
        <div className="heading__css">
          <VscDebugBreakpointData className="react__icons" />
          <p>Management</p>
        </div>
        <h6>Professional Gym Manager</h6>
        <div className="fullTime__job">
          <BiTimeFive />
          <p>Full Time Job</p>
        </div>
        <div className="fullTime__job">
          <GoLocation />
          <p>New York Station</p>
        </div>
        <div className="station">
          <FaArtstation />
          <h3>Gym Station</h3>
        </div>
      </div>
      <div className="three__css1">
        <div className="heading__css">
          <VscDebugBreakpointData className="react__icons" />
          <p>Management</p>
        </div>
        <h6>Senior Personal Trainer</h6>
        <div className="fullTime__job2">
          <BiTimeFive />
          <p>Full Time Job</p>
        </div>
        <div className="fullTime__job2">
          <GoLocation />
          <p>New York Station</p>
        </div>
      </div>
      <div className="four__css1">
        <div className="heading__css">
          <VscDebugBreakpointData className="react__icons" />
          <p>Healthy</p>
        </div>
        <h6>Diets Personal</h6>
        <div className="fullTime__job3">
          <BiTimeFive />
          <p>Full Time Job</p>
        </div>
        <div className="fullTime__job3">
          <GoLocation />
          <p>New York Station</p>
        </div>
      </div>
    </div>
  );
};

export default Carrer;
