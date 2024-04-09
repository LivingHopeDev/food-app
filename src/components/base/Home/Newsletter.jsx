import Search from "../Search/Search";
const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center md:flex-row px-2 gap-10 md:justify-around items-center w-full bg-[#FFEFEC] mt-[20rem] mb-10 h-[50vh] ">
      <div className="text-center">
        <h2 className="font-[600] text-[30px] sm:text-[44px] md:[40px]">
          Subscribe our newsletter
        </h2>
        <p>
          Browse local restaurants and businesses for delivery by entering your
          address blow.
        </p>
      </div>
      <div className="w-[400px]   ">
        <Search
          type={"text"}
          placeholder={"Enter your email address..."}
          btnText={"Send "}
          clickHandler={""}
        />
      </div>
    </section>
  );
};

export default Newsletter;
