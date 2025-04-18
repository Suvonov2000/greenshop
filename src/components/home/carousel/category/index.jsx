import { useSearchParams } from "react-router-dom";
import Header from "./header";

const Category = () => {
  const [get] = useSearchParams();
  return (
    <div className="w-full ">
      <Header />
    </div>
  );
};
export default Category;
