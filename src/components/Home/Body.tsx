const Body = () => {
  return (
    <div>
      <div className="relative py-20 pt-20 pb-32">
        <div className="flex flex-col gap-10">
          <div className="max-w-[640px]">
            <h2 className="text-7xl font-semibold text-[#212353]">
              Save your data storage here.
            </h2>
          </div>
          <p className="max-w-[370px] text-[#4B5D68]">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button className="bg-[#9C69E2] text-white py-2.5 px-8 rounded-full w-fit">
            Learn more
          </button>
        </div>
        <div className="lg:absolute right-0 bottom-0">
          <img className="w-full max-w-[760px] " src="img/image.png" />
        </div>
      </div>
    </div>
  );
};

export default Body;
