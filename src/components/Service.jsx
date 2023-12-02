import { AiOutlineRight } from "react-icons/ai";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("AllService List Calling Fail");
  }
  return res.json();
}

const Services = async () => {
  const data = await getData();
  return (
    <div>
      <div className=" h-screen-[1240px] ">
        <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
          <h1 className=" font-semibold  text-2xl lg:mt-24 mt-24 mb-8 text-start">
            Our Services
          </h1>

          <div className="flex flex-row gap-1  text-start">
            <p>Home</p>
            <AiOutlineRight className="mt-1" />
            <p className="text-green-400 font-semibold">Our Services</p>
          </div>
          <div className="text-start mt-24">
            <p className="text-green-400 font-semibold uppercase ">
              Our All Services
            </p>
            <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-6 pb-3 mb-9">
              We Provide BestWeb design
              <br /> services
            </h1>
          </div>

          <div className="container mx-auto grid grid-cols-2 gap-10  pb-10  max-w-5xl  group mt-4 sm:grid-cols-1 md:grid-cols-2 ">
            {data.map((item, i) => {
              return (
                <div key={i.toString()}>
                  <div>
                    <div className="border shadow-md rounded-xl pt-3 ">
                      <h1 className="text-1xl font-semibold text-start ml-4 uppercase">
                        {item["title"]}
                      </h1>
                      <p className=" text-start ml-4 text-gray-400">
                        {item["des"]}
                      </p>
                      <div className=" grid grid-col-span-6 gap-[30px] p-3 ">
                        <div className="flex gap-5 ">
                          <div className="w-[70%]">
                            <img
                              src={item["image1"]}
                              alt=""
                              className="w-full h-[200px] object-cover rounded-xl"
                            />
                          </div>
                          <div className="w-[30%]">
                            <img
                              src={item["image2"]}
                              alt=""
                              className="w-full h-[200px] object-cover rounded-xl"
                            />
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <div className="w-[50%]">
                            <img
                              src={item["image3"]}
                              alt=""
                              className="w-full h-[200px] object-cover rounded-xl"
                            />
                          </div>
                          <div className="w-[50%]">
                            <img
                              src={item["image4"]}
                              alt=""
                              className="w-full h-[200px] object-cover rounded-xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
