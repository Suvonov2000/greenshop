import { Select } from "antd";
import { useSearchParams } from "../../../../../hooks/useSearchParams";

const Header = () => {
  const { setParams, getParams } = useSearchParams();

  const type = getParams("type");
  const sort = getParams("sort");

  const options = [
    {
      value: "default-sorting",
      label: "Default Sorting",
    },
    {
      value: "the-cheapest",
      label: "The cheapest",
    },
    {
      value: "most-expansive",
      label: "Most expansive",
    },
  ];

  const activeSelection =
    "text-[#46A358] font-bold border-b-2 border-[#46A358]";

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-8">
        <h3
          onClick={() => setParams({ type: "all-plants" })}
          className={`cursor-pointer ${
            type === "all-plants" && activeSelection
          }`}
        >
          All Plants
        </h3>
        <h3
          onClick={() => setParams({ type: "new-arrivals" })}
          className={`cursor-pointer ${
            type === "new-arrivals" && activeSelection
          }`}
        >
          New Arrivals
        </h3>
        <h3
          onClick={() => setParams({ type: "sale" })}
          className={`cursor-pointer ${type === "sale" && activeSelection}`}
        >
          Sale
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
          labelInValue
          defaultValue={options?.filter((item) => item.value === sort)}
          onChange={(value) => setParams({ sort: value.value })}
          style={{ width: 150 }}
          options={options}
        />
      </div>
    </div>
  );
};
export default Header;
