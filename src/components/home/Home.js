import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <nav>
          <a href="#">home</a>
          <a href="#about">about</a>
          <a href="#career">career</a>
          <a href="#blog">blog</a>
          <a href="#contact">contact</a>
        </nav>
        <h3>Vins Club</h3>
        <div className="discription">
          <h5>Gym Station</h5>
          <p>Take Care Your Health With Our Excercise plans.</p>
        </div>
        <div className="discription2">
          <p>
            we have been creating and implementing project for many years all
            over the world, we have hundreds of satisfied customers.
          </p>
        </div>
        <div className="button__css">
          <a href="#">Read More</a>
        </div>
        <div className="bottom__img"></div>
      </div>
    </div>
  );
};

export default Home;
