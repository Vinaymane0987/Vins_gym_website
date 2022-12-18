import React from "react";
import "./Price.css";
import { BsCheck } from "react-icons/bs";
const Price = () => {
  return (
    <div className="price">
      <div className="price__css">
        <div id="price__content">
          <h3>standard</h3>
          <div className="rate">
            <h1>$30</h1>
            <h7>/Month</h7>
          </div>
          <p>
            Package for beginners and less demanding customers. You can upgrade
            to a higher package at any time
          </p>
          <div className="personal_trainer">
            <BsCheck />
            <h4>personal trainer</h4>
          </div>
          <div className="personal_trainer">
            <BsCheck />
            <h4>Dedicated training plan</h4>
          </div>
        </div>
        <div id="price__content2">
          <h3>Premium</h3>
          <div className="rate">
            <h1>$49</h1>
            <h7>/Month</h7>
          </div>
          <p>
            Advanced package for demanding customers.You can switch to a lower
            package at any time.
          </p>
          <div className="personal_trainer">
            <BsCheck />
            <h4>personal trainer</h4>
          </div>
          <div className="personal_trainer">
            <BsCheck />
            <h4>Dedicated training plan</h4>
          </div>
          <div className="personal_trainer">
            <BsCheck />
            <h4>Premium support for Diets</h4>
          </div>
          <div className="personal_trainer">
            <BsCheck />
            <h4>Access to nutrients</h4>
          </div>
        </div>
        <div id="price__content">
          <h3>Medium</h3>
          <div className="rate">
            <h1>$39</h1>
            <h7>/Month</h7>
          </div>
          <p>
            Package for beginners and less demanding customers. You can upgrade
            to a higher package at any time
          </p>
          <div className="personal_trainer">
            <BsCheck />
            <h4>personal trainer</h4>
          </div>
          <div className="personal_trainer">
            <BsCheck />
            <h4>Dedicated training plan</h4>
          </div>
          <div className="personal_trainer">
            <BsCheck />
            <h4>Premium support for Diets</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
