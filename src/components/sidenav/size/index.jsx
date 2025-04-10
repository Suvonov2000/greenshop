const Sizes = () => {
  return (
    <div className="mt-[38px]">
      <h1 className="font-bold">Sizes</h1>
      <div className="pl-[12px] w-full">
        <div className="w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h1>Small</h1>
          <h1>(12)</h1>
        </div>

        <div className="w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h1>Medium</h1>
          <h1>(12)</h1>
        </div>

        <div className="w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer">
          <h1>Large</h1>
          <h1>(12)</h1>
        </div>
      </div>
    </div>
  );
};

export default Sizes;
