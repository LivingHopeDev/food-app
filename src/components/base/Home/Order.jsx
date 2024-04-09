import OrderCard from "../Card/Ordercard";
const Order = () => {
  const howTo = [
    {
      id: 1,
      name: "Choose your location",
      link: "#",
      image: "/assets/image/location.png",
    },
    {
      id: 2,
      name: "Choose what to eat",
      link: "#",
      image: "/assets/image/toEat.png",
    },
    {
      id: 3,
      name: "May your first order",
      link: "#",
      image: "/assets/image/hamburger.png",
    },
    {
      id: 4,
      name: "Now! Your food in way",
      link: "#",
      image: "/assets/image/home.png",
    },
  ];
  return (
    <section className="mt-5 md:mt-[10rem] md:px-20 px-5">
      <div>
        <h1 className=" font-[600] text-[45px] text-center">How To Order?</h1>
        <div className="grid gap-1 grid-cols-2 md:grid-cols-4 w-full">
          {howTo.map((item) => (
            <div key={item.id} className="p-2 mb-[15rem] md:mb-20">
              <OrderCard
                orderImage={item.image}
                id={item.id}
                text={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
