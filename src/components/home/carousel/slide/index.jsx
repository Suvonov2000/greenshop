const Slide = ({
  title,
  subTitle,
  description,
  buttonText,
  bigImage,
  smallImage,
}) => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[48px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">{subTitle}</h5>
        <h1 className="text-[70px] font-black text leading-[70px] uppercase">
          {title} <span className="text-[#46A358]">Planet</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%] text-[#727272]">{description}</p>
        <button
          type="button"
          className="w-[100px] h-[35px] bg-[#46A358] flex gap-2 items-center justify-center rounded-[6px] text-white mt-[48px] "
        >
          {buttonText}
        </button>
      </div>
      <div className="w-[40%] flex items-center justify-center relative">
        <img src={bigImage} alt="flower-1" />
        <img
          src={smallImage}
          className="w-[150px] h-[150px] absolute bottom-0 left-[50px]"
        />
      </div>
    </div>
  );
};

export default Slide;
