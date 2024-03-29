import React from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.jpg";
import hill1 from "../public/hill1.png";
import hill2 from "../public/hill2.png";
import hill3 from "../public/hill3.png";
import hill4 from "../public/hill4.png";
import hill5 from "../public/hill5.png";
import tree from "../public/tree.png";
import leaf from "../public/leaf.png";
import plant from "../public/plant.png";
import { useRef } from "react";
import { useEffect } from "react";


const Animation = () => {
  useEffect(function mount() {
    let text1 = document.getElementById("val");
    let leaf = document.getElementById("leaf");
    let hill1 = document.getElementById("hill1");
    let hill4 = document.getElementById("hill4");
    let hill5 = document.getElementById("hill5");

    function onScroll() {
      let value = window.scrollY;

      ref.current.style.marginTop = value * 2.5 + "px";
      leaf.style.top = value * -1.5 + "px";
      leaf.style.left = value * 1.5 + "px";
      hill5.style.left = value * 1.5 + "px";
      hill4.style.left = value * -1.5 + "px";
      hill1.style.top = value * -0.4 + "px";
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const ref = useRef(null);
  return (
    <div className="bg-dark-teal relative h-screen">
      {" "}
      <section>
        <div className=" bg-gradient-to-r from-dark-teal to-teal-500  absolute flex justify-center align-middle h-full z-50 w-full">
          <ul className=" z-50 mb-40 w-full mt-10">
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
           
          </ul>
          
          <h4
            ref={ref}
            className=" top-20 absolute -z-10 text-6xl font-bold text-dark-teal"
            id="val"
          >
            Hey! I am Sakshi Shah
          </h4>
          <Image 
          className="-z-30 flex justify-center items-center mr-50 w-20 h-20 rounded-full"
          src={profile}
          alt="hill"></Image>
          <Image
            id="hill1"
            className="-z-30 absolute top-0 left-0 w-full pointer-events-none"
            src={hill1}
            alt="hill"
          />
          <Image
            id="hill2"
            className="absolute top-0 left-0 w-full pointer-events-none"
            src={hill2}
            alt="hill"
          />
          <Image
            id="hill3"
            className="absolute top-0 left-0 w-full pointer-events-none"
            src={hill3}
            alt="hill"
          />
          <Image
            id="hill4"
            className="absolute top-0 left-0 w-full pointer-events-none"
            src={hill4}
            alt="hill"
          />
          <Image
            id="hill5"
            className="absolute top-0 left-0 w-full pointer-events-none"
            src={hill5}
            alt="hill"
          />
          <Image
            id="tree"
            className="absolute top-0 left-0 w-full pointer-events-none"
            src={tree}
            alt="hill"
          />
          <Image
            id="leaf"
            className=" absolute top-0 left-0 w-full pointer-events-none"
            src={leaf}
            alt="hill"
          />
          <Image
            id="plant"
            className="absolute top-0 left-0 w-full pointer-events-none"
            src={plant}
            alt="hill"
          />
        </div>
      </section>
      
    </div>
  );
};

export default Animation;
