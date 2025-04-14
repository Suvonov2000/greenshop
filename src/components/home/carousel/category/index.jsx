import { useSearchParams } from "react-router-dom";

const Category = () => {
  const [get] = useSearchParams();
  return (
    <div className="w-full ">
      <h1>Categry</h1>
      <p>{get.get("category") ?? "house-plants"}</p>
    </div>
  );
};
export default Category;
