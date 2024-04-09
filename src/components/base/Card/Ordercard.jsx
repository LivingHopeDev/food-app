const OrderCard = ({ id, orderImage, text }) => {
  return (
    <div className="relative">
      <h1 className="text-[#FF5331] text-[3rem] font-[600] "> 0{id}</h1>

      <div className="w-full md:w-[168px] h-60 bg-[#FAFAFA] rounded-3xl flex flex-col justify-center items-center absolute top-12">
        <div className="bg-white rounded-[0.5rem] ">
          <img src={orderImage} alt="" />
        </div>
        <p className="mt-5 text-primaryText text-[24px] font-medium text-center p-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
