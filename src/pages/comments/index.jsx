import { useQuery } from "react-query";
import { instance } from "../../axios";
import { Carousel } from "antd";

export default function Comments() {
  const getComments = () => instance.get("/comments").then((res) => res.data);

  const { data, isLoading } = useQuery(["comments"], getComments);
  console.log(data);
  if (isLoading) {
    <h1>loading...</h1>;
  }
  return (
    <div className="text-teal-950 p-[50px]">
      <h1 className="text-center md:mt-[20px] font-bold text-[20px] md:text-[45px]">
        You will be aware of our clients' comments here!!!
        <Carousel autoplay>
          {data?.map((c) => (
            <div
              key={c?._id}
              className="p-[50px] w-[400px] mt-[50px] text-white font-[300] text-[15px] md:text-[20px] text-start bg-teal-950"
            >
              <h2>
                <span className="font-bold">Name:</span> {c?.name}
              </h2>
              <a href="tel">
                <span className="font-bold">Phone number:</span> {c?.tel}
              </a>
              <p>
                <span className="font-bold">Comment:</span> {c?.comment}
              </p>
            </div>
          ))}
        </Carousel>
      </h1>
    </div>
  );
}
