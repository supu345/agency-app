import React from "react";
import { AiOutlineRight } from "react-icons/ai";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Testimonial List Calling Fail");
  }
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();

  return (
    <div>
      <div className=" h-screen-[1240px] ">
        <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
          <h1 className=" font-semibold  text-2xl lg:mt-24 mt-24 mb-8 text-start">
            Testimonial List
          </h1>
          <div className="flex flex-row gap-1  text-start">
            <p>Home</p>
            <AiOutlineRight className="mt-1" />
            <p className="text-green-400 font-semibold">Team</p>
          </div>
          <div className="text-start mt-24">
            <p className="text-green-400 font-semibold uppercase ">
              Testimonial List
            </p>
            <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-6 pb-3">
              Better Agency/SEO Solution At <br /> Your Fingertips
            </h1>
          </div>
          <div className=" grid grid-cols-2  max-w-5xl mx-auto gap-8 group mt-4 sm:grid-cols-3 md:grid-cols-3">
            {data.map((item, i) => {
              return (
                <div className="bg-white border shadow-md  cursor-pointer p-8 pt-10 rounded-xl mix-blend-luminosity text-center">
                  <img
                    src={item["image"]}
                    alt="image1"
                    className="h-20 w-20 mx-auto  rounded-xl"
                  />

                  <p className="text-sm leading-7 my-3 font-light opacity-50 ">
                    {item["msg"]}
                  </p>
                  <h4 className="uppercase text-xl font-bold">
                    {item["name"]}
                  </h4>
                  <h4 className="text-sm font-bold">{item["designation"]}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
