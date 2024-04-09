import React from "react";
import ListCard from "../Card/ListCard";

function Dishes() {
  const foods = [
    {
      id: 1,
      name: "Pizza",
      link: "#",
      image: "/assets/image/pizza.png",
    },
    {
      id: 2,
      name: "Burger",
      link: "#",
      image: "/assets/image/burger.png",
    },
    {
      id: 3,
      name: "Sushi",
      link: "#",
      image: "/assets/image/pizza.png",
    },
  ];

  const moreFood = [
    {
      id: 1,
      name: "Pasta",
      link: "#",
      image: "/assets/image/pizza.png",
    },
    {
      id: 2,
      name: "Salad",
      link: "#",
      image: "/assets/image/burger.png",
    },
    {
      id: 3,
      name: "Deserts",
      link: "#",
      image: "/assets/image/pizza.png",
    },
  ];
  return (
    <section className="md:px-20 px-5">
      <div className=" flex justify-center flex-col text-center mt-5 md:mt-10 ">
        <h2 className=" text-primaryText text-3xl md:text-5xl">
          More Than <span className="text-[#FF5331]">10, 000</span> Dishes
          <br /> To Order!
        </h2>
        <p className="text-primaryText mt-5 font-medium text-lg">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>

        <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center md:space-x-20 md:space-y-0 space-y-10 ">
          <div className="grid gap-1 grid-cols-2 md:grid-cols-3 w-full md:w-[100%]">
            {foods.map((item) => (
              <div key={item.id}>
                <ListCard listImage={item.image} title={item.name} />
              </div>
            ))}
          </div>

          <div className="bg-secondary w-full rounded-2xl h-56 p-4 relative">
            <h3 className="text-primaryText text-xl">
              Find <span className="text-[#FF5331]">deals</span>,
              <span className="text-[#009B00]">free delivery</span>, and more
              <br /> from our restaurant partners.
            </h3>

            <div className="absolute right-0 bottom-0">
              <img src="/assets/image/bike.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row mt-10 justify-between items-center md:space-x-20 md:space-y-0 space-y-1 ">
          <div className=" w-full rounded-2xl h-56 p-4 relative md:w-2/5">
            <img src="/assets/image/quote.png" alt="" />

            <p className=" mt-10 md:mt-20 text-primaryText text-start">
              Lorem ipsum dolor sit amet, consectetur <b />
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid gap-1 grid-cols-2 md:grid-cols-3 w-full md:w-3/4">
            {moreFood.map((item) => (
              <div key={item.id}>
                <ListCard listImage={item.image} title={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dishes;
