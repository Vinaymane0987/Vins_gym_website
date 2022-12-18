import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <h2>Discover our nutrition posts and blog tips</h2>
      <p>
        We can been creating and implementing projects for many years all over
        the world, we have hundereds of satisfied customers.
      </p>
      <div className="blog__mid">
        <div className="blog__img"></div>
      </div>
      <div className="mid__content">
        <h3>Healthy food</h3>
        <p>
          Proper nutrition provides our body with the complex of vitamins it
          needs and makes us feel better. In this article we'll show you what to
          look for.
        </p>
      </div>
      <div className="bottom__content">
        <div className="btm__onecontent">
          <div className="bottom__img1"></div>
          <div className="bottom__content1">
            <h5>Training</h5>
            <h2>How to stay fit in winter?</h2>
            <p>
              In this article, we will show you tips on how to stay in shape
              during the winter. check and share!
            </p>
          </div>
        </div>
        <div className="btm__twocontent">
          <div className="bottom__img2"></div>
          <div className="bottom__content2">
            <h5>Healthy food</h5>
            <h2>Required for Dinner</h2>
            <p>
              A recipe for quick and effective preparation of dinner. in this
              article, you will learn some recipes for delicious dinner dishes.
              For work or maybe at home? Take them with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
