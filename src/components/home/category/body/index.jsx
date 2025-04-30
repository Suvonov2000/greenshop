import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { useAxios } from "../../../../hooks/useAxios";
import Card from "./card";
import Loading from "./card/loading";

const Body = () => {
  const axois = useAxios();
  const { getParams } = useSearchParams();
  const category = getParams("category") ?? "house-plants";

  const min = getParams("min") ?? 0;
  const max = getParams("max") ?? 1500;
  const sort = getParams("sort") ?? "default-sorting";
  const type = getParams("type") ?? "all-plants";

  const cache_key = `categery=${category}&range_min=${min}&range_max=${max}&sort=${sort}&type=${type}`;

  const { data, isLoading } = useQuery({
    queryKey: [cache_key],
    queryFn: async () => {
      const { data } = await axois({
        url: `/flower/category/${category}?${category}`,
        params: {
          range_min: min,
          range_max: max,
          sort,
          type,
        },
      });
      return data.data;
    },
  });

  return (
    <div className="flex flex-wrap gap-4 ">
      {isLoading
        ? Array.from({ length: 10 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item, idx) => <Card key={idx} {...item} />)}
    </div>
  );
};
export default Body;
