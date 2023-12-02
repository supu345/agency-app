import React from "react";
import { SiJsonwebtokens } from "react-icons/si";
import { SiWebhint, SiWebcomponentsdotorg, SiWebpack } from "react-icons/si";
import { MdOutlineWebhook, MdOutlineWeb } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const WorkList = () => {
  return (
    <div className=" ">
      <div className="container ml-10 pl-5">
        <p className="pl-5 font-semibold text-center lg:text-start leading-tight mt-14 text-green-400 ">
          WORK LIST
        </p>
        <h1 className="pl-5 font-semibold text-1xl text-center lg:text-start leading-tight mt-10 pb-3">
          We provide the Perfect Solution <br />
          to your business growth
        </h1>

        <div className=" mx-auto py-36 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="duration-300 p-6 rounded-md ">
              <div className="border rounded bg-green-100 inline-block p-4  mb-3  ">
                <SiJsonwebtokens />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                Grow Your Business
              </h3>

              <p className="text-lg text-gray-600">
                We help identify the best ways to improve your business Lorem
              </p>
              <div className="flex justify-center items-center gap-2">
                <h3>Learn More</h3>
                <BsArrowRight />
              </div>
            </div>
            <div className=" duration-300 p-6 ">
              <div className="  border rounded bg-green-100 inline-block p-4  mb-3  ">
                <SiWebhint />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                Improve brand loyalty
              </h3>
              <p className="text-lg text-gray-600">
                We help identify the best ways to improve your business Lorem
              </p>
              <div className="flex justify-center items-center gap-2">
                <h3>Learn More</h3>
                <BsArrowRight />
              </div>
            </div>
            <div className="duration-300 p-6 ">
              <div className=" border rounded bg-green-100 inline-block p-4  mb-3  ">
                <SiWebcomponentsdotorg />
              </div>
              <h3 className="text-2xl  font-bold text-slate-800 ">
                Improve brand loyalty
              </h3>
              <p className="text-lg text-gray-600">
                We help identify the best ways to improve your business Lorem
              </p>
              <div className="flex justify-center items-center gap-2">
                <h3>Learn More</h3>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;
