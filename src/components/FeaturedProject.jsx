import React from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("FeaturedProject Calling Fail");
  }
  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();

  return (
    <>
      <div className=" min-h-full">
        <div className="  bg-green-100  ">
          <div className="   items-center lg:px-10 px-5 bg-green-100 mt-4 mb-4  -ml-4">
            <div className=" grid grid-col-span-6 gap-[30px]">
              <h5 className="pl-9  font-semibold text-center lg:text-start leading-tight mt-14 text-green-400  ">
                Featured Project
              </h5>
              <h1 className="pl-9 font-semibold text-1xl text-center lg:text-start leading-tight mt-3 pb-3">
                We provide the Perfect Solution <br />
                to your business growth
              </h1>

              <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2  md:gap-4 lg:mb-10 pl-9 ">
                <div className="w-full h-full object-cover  col-span-2 md:col-span-3 row-span-2 pb-10  ">
                  <img
                    src={data[0].image}
                    alt="Image 1"
                    className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-lg  "
                  />
                  <p className=" text-sm"> {data[0].title}</p>
                  <h1 className=" font-semibold  pb-4">{data[0].remark}</h1>
                </div>

                <div className="w-full h-full object-cover col-span-1  ">
                  <img
                    src={data[1].image}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className=" text-sm">{data[0].title}</p>
                  <h1 className=" font-semibold  pb-4">{data[0].remark}</h1>
                </div>
                <div className="w-full h-full object-cover col-span-1">
                  <img
                    src={data[2].image}
                    alt="Image 3"
                    className="w-full h-auto  rounded-lg"
                  />
                  <p className=" text-sm">{data[0].title}</p>
                  <h1 className=" font-semibold  pb-4">{data[0].remark}</h1>
                </div>
                <div className="w-full h-full object-cover col-span-1 rounded-lg">
                  <img
                    src={data[3].image}
                    alt="Image 4"
                    className="w-full h-auto  rounded-lg"
                  />
                  <p className=" text-sm">{data[0].title}</p>
                  <h1 className=" font-semibold  pb-4">{data[0].remark}</h1>
                </div>
                <div className="w-full h-full object-cover col-span-1 rounded-lg">
                  <img
                    src={data[4].image}
                    alt="Image 5"
                    className="w-full h-auto  rounded-lg"
                  />
                  <p className=" text-sm">{data[0].title}</p>
                  <h1 className=" font-semibold  pb-4">{data[0].remark}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
