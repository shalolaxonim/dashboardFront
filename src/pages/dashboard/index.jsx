import { useQuery } from "react-query";
import { instance } from "../../axios";

export default function Dashboard() {
  const getNews = () => instance.get("/news").then((res) => res.data);
  const { data, isLoading } = useQuery({
    queryFn: getNews,
    queryKey: "getNews",
  });
  console.log(data);
  return (
    <div className="p-[20px]">
      <h1 className="text-center md:mt-[20px] font-bold text-[20px] md:text-[45px]">
        You will be aware of latest news here!!!
      </h1>
      <div className="flex flex-wrap gap-[30px] md:p-[50px] justify-center">
        {data?.map((d) => (
          <div className="border-[3px] border-teal-950 text-teal-950 p-[20px] w-[400px] flex flex-col gap-[10px]">
            <h1 className="text-teal-950 font-bold text-[30px]">{d?.title}</h1>
            <img
              src=""
              alt="there is available picture"
              className="hover:text-blue-800 cursor-pointer"
            />
            <p>{d?.Description}</p>
            <h2 className="font-bold text-[20px]">{d?.Author}</h2>
            <p>
              {d?.date}/{d?.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
