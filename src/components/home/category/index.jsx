import { useSearchParams } from "react-router-dom";
import Header from "./header";
import Body from "./body";
import CategoryModal from "./modals/category";

const Category = () => {
  const [get] = useSearchParams();
  return (
    <>
      <CategoryModal />
      <div className="w-full ">
        <Header />
        <Body />
      </div>
    </>
  );
};
export default Category;
