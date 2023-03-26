import React from "react";
import "../index.css";
import del from "../assets/imgs/del.jpg";
import van from "../assets/imgs/van.jpg";
import pack from "../assets/imgs/pack.jpg";
const Post = () => {
  return (
    <>
      <section className="facilities" id="post">
        <h1>Our Facilities</h1>
        <p> To take cognizance of social, ethical and environmental issues.</p>
        <div className="row">
          <div className="f-col">
            <img src={del} alt="" />
            <h3>Onplace Service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              sequi deleniti placeat doloremque? Quos, veniam?
            </p>
          </div>
          <div className="f-col">
            <img src={van} alt="" />
            <h3>Transportation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              sequi deleniti placeat doloremque? Quos, veniam?
            </p>
          </div>
          <div className="f-col">
            <img src={pack} alt="" />
            <h3>Packaging</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              sequi deleniti placeat doloremque? Quos, veniam?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
