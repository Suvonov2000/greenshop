import axios from "axios";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const Categories = () => {
  const { getParams, setParams } = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const api_call = async () => {
      setLoading(true);
      const { data } = await axios({
        url: "https://greenshopapi.rakhmatov1020.uz/api/flower/category?access_token=64bebc1e2c6d3f056a8c85b7",
        method: "GET",
      });
      setLoading(false);

      setCategories(data.data);
    };
    api_call();
  }, []);

  const selectedCategory = getParams("category") ?? "house-plants";
  const normal_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";
  const active_text =
    "w-full flex justify-between items-center mt-[7px] text-[#46A358] cursor-pointer";

  return (
    <div>
      <h1 className="font-bold">Categories</h1>
      <div className="pl-[12px] w-full">
        {loading
          ? Array.from({ length: 10 }).map((_, idx) => {
              <Skeleton.Input block key={idx} />;
            })
          : categories.map((category) => (
              <div
                key={category._id}
                className={
                  selectedCategory === category.route_path
                    ? active_text
                    : normal_text
                }
                onClick={() => setParams({ category: category.route_path })}
              >
                <h3>{category.title}</h3>
                <h3>({category.count})</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Categories;
