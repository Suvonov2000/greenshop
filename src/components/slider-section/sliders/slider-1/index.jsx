const Slider1 = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[48px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">WELCOME TO GREENSHOP</h5>
        <h1 className="text-[70px] font-black text leading-[70px] uppercase">
          Let's Make a Better <span className="text-[#46A358]">Planet</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%] text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button
          type="button"
          className="w-[100px] h-[35px] bg-[#46A358] flex gap-2 items-center justify-center rounded-[6px] text-white mt-[48px] "
        >
          SHOP NOW
        </button>
      </div>
      <div className="w-[40%] flex items-center justify-center relative">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="flower-1"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="flower-2"
          className="w-[150px] h-[150px] absolute bottom-0 left-[50px]"
        />
      </div>
    </div>
  );
};

export default Slider1;
