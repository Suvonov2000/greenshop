import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../../hooks/useSearchParams";
import { useAxios } from "../../../../../hooks/useAxios";
import Card from "./card";
import Loading from "./card/loading";

const Body = () => {
  const axois = useAxios();
  const { getParams } = useSearchParams();
  const category = getParams("category") ?? "house-plants";

  const { data, isLoading } = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const { data } = await axois({
        url: `/flower/category/${category}`,
      });
      return data.data;
    },
  });
  console.log(data);

  return (
    <div className="flex flex-wrap gap-4 ">
      {isLoading
        ? Array.from({ length: 10 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};
export default Body;
