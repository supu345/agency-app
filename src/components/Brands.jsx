async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("BrandList Calling Fail");
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();
  return (
    <section className="py-10">
      <div className="mx-auto m-3 -pb-2 text-center">
        <div className="flex flex-wrap -mx-2">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2 py-6 bg-white"
              >
                <div>
                  <img className="mx-auto h-8" src={item["image"]} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
