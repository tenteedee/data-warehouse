const Feature = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-20 text-center">
        <h3 className="text-center text-4xl text-[#212353] font-bold">
          Features
        </h3>

        <p className="max-w-[575px] text-[#4B5D68] pt-10 ">
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 pt-20">
        <div className="flex h-[350px] relative justify-end items-center">
          <img
            className="w-[228px] h-[207px] object-contain absolute left-0 top-1/2 -translate-y-1/2"
            src="img/image copy.png"
          />
          <img
            className="h-[352px] absolute object-contain right-0 inset-y-0"
            src="img/image copy 10.png"
          />
          <div className="w-1/2 h-full flex flex-col items-start justify-center gap-4  pr-10">
            <h3 className="text-xl text-[#4B5D68]">Search Data</h3>
            <p className="text-md text-[#4B5D68]">
              Don’t worry if your data is very large, the Data Warehoue provides
              a search engine, which is useful for making it easier to find data
              effectively saving time.
            </p>
            <div className="font-semibold flex gap-4 items-center text-[#212353]">
              Learn more <img src="img/arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className="flex h-[350px] relative justify-end items-center">
          <img
            className="w-[228px] h-[207px] object-contain absolute left-0 top-1/2 -translate-y-1/2"
            src="img/image copy 3.png"
          />
          <img
            className="h-[352px] absolute object-contain right-0 inset-y-0"
            src="img/image copy 7.png"
          />
          <div className="w-1/2 h-full flex flex-col items-start justify-center gap-4  pr-10">
            <h3 className="text-xl text-[#4B5D68]">24 Hours Access</h3>
            <p className="text-md text-[#4B5D68]">
              Access is given 24 hours a full morning to night and meet again in
              the morning, giving you comfort when you need data when urgent.
            </p>
            <div className="font-semibold flex gap-4 items-center text-[#212353]">
              Learn more <img src="img/arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className="flex h-[350px] relative justify-end items-center">
          <img
            className="w-[228px] h-[207px] object-contain absolute left-0 top-1/2 -translate-y-1/2"
            src="img/image copy 6.png"
          />
          <img
            className="h-[352px] absolute object-contain right-0 inset-y-0"
            src="img/image copy 9.png"
          />
          <div className="w-1/2 h-full flex flex-col items-start justify-center gap-4  pr-10">
            <h3 className="text-xl text-[#4B5D68]">Print Out</h3>
            <p className="text-md text-[#4B5D68]">
              Print out service gives you convenience if someday you need print
              data, just edit it all and just print it.
            </p>
            <div className="font-semibold flex gap-4 items-center text-[#212353]">
              Learn more <img src="img/arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className="flex h-[350px] relative justify-end items-center">
          <img
            className="w-[228px] h-[207px] object-contain absolute left-0 top-1/2 -translate-y-1/2"
            src="img/image copy 8.png"
          />
          <img
            className="h-[352px] absolute object-contain right-0 inset-y-0"
            src="img/image copy 10.png"
          />
          <div className="w-1/2 h-full flex flex-col items-start justify-center gap-4  pr-10">
            <h3 className="text-xl text-[#4B5D68]">Security Code</h3>
            <p className="text-md text-[#4B5D68]">
              Data Security is one of our best facilities. Allows for your files
              to be safer. The file can be secured with a code or password that
              you created, so only you can open the file.
            </p>
            <div className="font-semibold flex gap-4 items-center text-[#212353]">
              Learn more <img src="img/arrow-right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
