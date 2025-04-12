import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const api_call = async () => {
      const { data } = await axios({
        url: "https://greenshopapi.rakhmatov1020.uz/api/flower/category?access_token=64bebc1e2c6d3f056a8c85b7",
      });
      console.log(data);
      setData(data.data);
    };

    api_call();
  }, []);

  return (
    <div>
      <h1 className="font-bold">Categories</h1>
      <div className="pl-[12px] w-full">
        {data?.map((category) => {
          return (
            <div
              k={category._id}
              className="w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer"
            >
              <h1>{category.title}</h1>
              <h1>({category.count})</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
