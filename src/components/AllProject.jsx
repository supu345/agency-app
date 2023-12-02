import { AiOutlineRight } from "react-icons/ai";

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("AllProject Calling Fail");
  }
  return res.json();
}
const ProjectPage = async () => {
  const data = await getData();

  return (
    <div>
      <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
        <div className="  min-h-screen flex flex-col lg:px-32 px-5  ">
          <h1 className=" font-semibold  text-2xl lg:mt-24 mt-24 mb-8 text-start">
            All Projects
          </h1>
          <div className="flex flex-row gap-1  text-start">
            <p>Home</p>
            <AiOutlineRight className="mt-1" />
            <p className="text-green-400 font-semibold"> All Projects</p>
          </div>
          <div className="text-start mt-24">
            <p className="text-green-400 font-semibold uppercase ">
              All Projects
            </p>
            <h1 className="font-semibold text-1xl text-center lg:text-start leading-tight mt-6 pb-9">
              Better Agency/SEO Solution At <br /> Your Fingertips
            </h1>
          </div>

          <div className=" grid grid-cols-2  max-w-5xl mx-auto gap-8 group mt-4 sm:grid-cols-1 md:grid-cols-2  ">
            {data.map((item, i) => {
              return (
                <div className="border shadow-md rounded-xl p-3 ">
                  <img src={item["image"]} className="rounded-xl " />
                  <h1 className="text-sm font-semibold  ml-4 mt-4 mb-4  text-center uppercase rounded-xl p-2">
                    {item["title"]}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
