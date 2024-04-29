import React from "react";
import Slider from "react-slick";
import { autoplayCarouselSettings } from "../../config/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const array = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="home-wrapper">
      <div className="carousel flex flex-col gap-10">
        <img className="h-screen w-screen object-cover" src="./assets/carousel.png" alt="" />
        <div className="buy-now text-center">
          <p className="text-2xl">Collection New Year</p>
          <button className="rounded-md bg-black text-3xl font-bold px-10 py-2 mt-5 text-white">Buy Now</button>
        </div>
      </div>
      <div className="trending px-10">
        <p className="font-bold underline text-3xl tracking-wider mb-10">Trending Outfit!</p>
        <div className="images">
          <Slider {...autoplayCarouselSettings}>
            {array.map((idx, val) => (
              <div className="card flex flex-col ">
                <img src="./assets/example.jpeg" className="h-96 rounded-t-lg" alt="" />
                <div className="text">
                  <div className="name font-semibold">Polo Country</div>
                  <div className="price font-bold">IDR 1.200.000</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div class="product px-10 mt-10">
        <div class="font-bold underline text-3xl tracking-wider mb-10">#jXbfit</div>
        <div className="card flex flex-row flex-wrap">
          <img src="./assets/example.jpeg" className="w-1/2 h-72 object-cover pr-5" alt="" />
          <img src="./assets/example.jpeg" className="w-1/2 h-72 object-cover" alt="" />
        </div>
      </div>
      <div className="join-us px-10 mt-10">
        <div class="font-bold  text-3xl  mb-10">Join Us</div>
        <div className="flex flex-row flex-wrap ">
          {array.map((element) => {})}
          <img src="./assets/example.jpeg" className="w-1/3 h-96 object-cover" alt="" />
          <img src="./assets/example.jpeg" className="w-1/3 h-96 object-cover" alt="" />
          <img src="./assets/example.jpeg" className="w-1/3 h-96 object-cover" alt="" />
        </div>
        <div class="gallery mt-10">
          {array.map((element) => {})}
          <div class="flex flex-wrap justify-center gap-10">
            <div class="cover w-[13.4vw] h-[28vh] flex justify-center">
              <img src="./assets/example.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <div class="cover w-[13.4vw] h-[28vh] flex justify-center">
              <img src="./assets/example.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <div class="cover w-[13.4vw] h-[28vh] flex justify-center">
              <img src="./assets/example.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <div class="cover w-[13.4vw] h-[28vh] flex justify-center">
              <img src="./assets/example.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <div class="cover w-[13.4vw] h-[28vh] flex justify-center">
              <img src="./assets/example.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
            <div class="cover w-[13.4vw] h-[28vh] flex justify-center">
              <img src="./assets/example.jpeg" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="payment-infop">
        <div class="text">
          <p>At low prices, you can get the most cozy outfit</p>
          <p>JBL</p>
          <button>Join Now</button>
        </div>
        <div class="payment">
          <p>Payment method</p>
          <ul class="logo">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div class="info">
          <div class="help"></div>
          <div class="about"></div>
          <div class="find-us"></div>
          <div class="join-member"></div>
        </div>
      </div>
    </div>
  );
}
