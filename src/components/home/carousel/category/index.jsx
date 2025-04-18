import { useSearchParams } from "react-router-dom";
import Header from "./header";
import Body from "./body";

const Category = () => {
  const [get] = useSearchParams();
  return (
    <div className="w-full ">
      <Header />
      <Body />
    </div>
  );
};
export default Category;
