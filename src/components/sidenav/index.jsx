import Categories from "./categories";
import Discount from "./discount";
import PriceRange from "./price-range";
import Sizes from "./size";

const SideNav = () => {
  return (
    <div className=" ml-[100px] w-[310px] mt-[46px] bg-[#FBFBFB] px-[18px] py-[14px]">
      <Categories />
      <PriceRange />
      <Sizes />
      <Discount />
    </div>
  );
};
export default SideNav;
