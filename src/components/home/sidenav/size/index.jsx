import { useSearchParams } from "../../../../hooks/useSearchParams";

const Sizes = () => {
  const { getParams, setParams } = useSearchParams();

  const normal_text =
    "w-full flex justify-between items-center mt-[7px] hover:text-[#46A358] cursor-pointer";
  const active_text =
    "w-full flex justify-between items-center mt-[7px] text-[#46A358] cursor-pointer";

  const selectedSize = getParams("size") ?? "small";
  return (
    <div className="mt-[38px]">
      <h1 className="font-bold">Sizes</h1>
      <div className="pl-[12px] w-full">
        <div
          onClick={() => setParams({ size: "small" })}
          className={selectedSize === "small" ? active_text : normal_text}
        >
          <h1>Small</h1>
          <h1>(12)</h1>
        </div>

        <div
          onClick={() => setParams({ size: "medium" })}
          className={selectedSize === "medium" ? active_text : normal_text}
        >
          <h1>Medium</h1>
          <h1>(12)</h1>
        </div>

        <div
          onClick={() => setParams({ size: "large" })}
          className={selectedSize === "large" ? active_text : normal_text}
        >
          <h1>Large</h1>
          <h1>(12)</h1>
        </div>
      </div>
    </div>
  );
};

export default Sizes;
