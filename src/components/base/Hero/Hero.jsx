import React from "react";
import Search from "../Search/Search";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between md:space-x-5 w-full mt-10  md:mt-20 md:px-20 px-5">
      <div className="flex flex-col w-full md:w-[45%]  ">
        <h2 className="text-4xl lg:text-5xl text-primaryText font-bold">
          Your Favorite Food <br />
          Delivery Partner
        </h2>
        <p className="text-primaryText font-[400] mt-3 text:sm md:text-base  lg:text-lg ">
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.{" "}
        </p>

        <div className="mt-4 w-full  md:w-[50%]">
          <Search
            type="text"
            placeholder="Enter your delivery location"
            btnText="Order Now"
            clickHandler={() => alert("I'M CLICKE OOOOO")}
          />
        </div>

        <div className="flex  space-x-5 md:mt-10 mt-5">
          <img src="/assets/image/apple.svg" className="cursor-pointer" />
          <img src="/assets/image/google.svg" className="cursor-pointer" />
        </div>
      </div>

      <div className="bg-[#F2EBDA] mt-5 md:w-1/2  flex  w-full justify-center items-end rounded-3xl">
        <img src="/assets/image/delivery.svg" />
      </div>
    </section>
  );
}

export default Hero;
