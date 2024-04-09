const Feedback = () => {
  return (
    <section className="md:px-20 px-5 md:mt-[15rem]">
      <div className=" text-center">
        <h1 className=" font-[700] md:text-[44px] text-[30px] ">
          Our Clients Feedback
        </h1>
        <p className="font[400] mt-4">
          The food at your doorstep. Why starve when you have us. You hunger{" "}
          <br />
          partner. Straight out of the oven to your doorstep.
        </p>
      </div>
      <div className=" mt-10 md:mt-20 rounded-2xl h-[18rem] text-center">
        <img
          src="/assets/image/quote2.png"
          alt="quote-icon"
          className="text-center mx-auto"
        />

        <p className="text-[24px] italic mt-10 md:mt-20 text-primaryText  font-[500]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          <br /> ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi”
        </p>
        <div className="mt-5">
          <h2 className="font-[600] text-[18px]">Mitchell Marsh</h2>
          <h3 className="font-[400] text-[14px] text-[#616161]">
            CEO, Bexon Agency
          </h3>
          <div className=" flex justify-center space-x-5 mt-5 mb-10">
            <div className="rounded-full bg-[#E2E2E2] p-5">
              <img src="/assets/image/leftAngle.png" alt="" />
            </div>
            <div className="rounded-full bg-[#FF5331] p-5">
              <img src="/assets/image/rightAngle.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
