import React from "react";

const Subscribe = () => {
  return (
    <div className="mb-20 ">
      <p className="font-semibold text-center lg:text-center leading-tight mt-14 text-green-400 ">
        SUBSCRIBE
      </p>
      <h1 className="font-semibold text-1xl text-center lg:text-center leading-tight mt-10 pb-3">
        Subscribe To Get The Latest <br />
        News About Us
      </h1>
      <p className="text-gray-300 font-sm text-center">
        Please drop your Email below to get daily update about What we do
      </p>

      <div className="pt-4 flex justify-center items-center">
        <div class="relative flex h-10 w-full min-w-[200px] max-w-[24rem] justify-center items-center mt-5">
          <input
            type="email"
            className="  peer h-full w-full rounded-[7px] border border-blue-gray-200  px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            required
          />
          <button
            className="!absolute right-1 top-1 z-10 select-none rounded bg-orange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:shadow-lg hover:shadow-yellow-300  active:shadow-none peer-placeholder-shown:pointer-events-none "
            type="button"
            data-ripple-light="true"
          >
            Submit
          </button>
          <label class=" text-gray-500 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Enter your Email Address
          </label>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
