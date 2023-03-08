import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../assets/images/articles/posts/img1.jpg";
import Unsplash from "../assets/images/unsplash.jpg";
import Author from "../author";

const Hero = () => {
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
};

function Slide() {
  return (
    <div className="grid grid-cols-2">
      <div className="image">
        <Link to={"/"}>
          <img
            src={Img1}
            className="rounded-md shadow-md shadow-gray-500"
            width={600}
            height={600}
            alt="blog_image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link to={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link to={"/"}>
            <a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link to={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
export default Hero;
