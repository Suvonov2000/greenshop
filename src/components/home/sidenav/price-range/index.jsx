import { Slider } from "antd";
import { useState } from "react";

const PriceRange = () => {
  const [range, setRange] = useState([0, 1500]);
  return (
    <div className="mt-[38px]">
      <h1 className="font-bold">Price Range</h1>
      <div className="pl-[12px] w-full">
        <Slider value={range} min={0} max={1500} onChange={setRange} range />
        <div>
          Price:
          <span className="text-[#46A358] font-bold">
            ${range[0]}-${range[1]}
          </span>
        </div>
        <button
          type="button"
          className=" mt-2 w-[100px] h-[35px] bg-[#46A358] flex gap-2 items-center justify-center rounded-[6px] text-white  "
        >
          Filter
        </button>
      </div>
    </div>
  );
};
export default PriceRange;
