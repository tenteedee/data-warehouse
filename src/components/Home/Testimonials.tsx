import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className="mt-[80px] p-[80px] h-full bg-[#9C69E2] rounded-3xl">
      <h1 className="text-left text-4xl font-semibold text-white pb-20">
        Testimonials
      </h1>
      <Swiper
        pagination={true}
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.prevButton',
          nextEl: '.nextButton',
        }}
        className="relative"
      >
        <div className="prevButton absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
          <img src="img/prev-button.svg" alt="Previous" />
        </div>

        {/* Next Button */}
        <div className="nextButton absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rotate-180">
          <img src="img/prev-button.svg" alt="Next" />
        </div>

        <SwiperSlide className="py-[60px] px-[80px] bg-white rounded-3xl">
          <div className="size-full grid grid-cols-4 gap-10">
            <div className="col-span-1">
              <img className="w-[130px] h-[90px]" src="img/avt-1.png" />
            </div>
            <div className="col-span-3">
              <div>
                <h2 className="text-xl font-semibold text-[#212353]">
                  John Fang
                </h2>
                <p className="text-md text-[#9C69E2]">wordfaang.com</p>
              </div>
              <div className="pt-5 ">
                <p className="text-md text-[#4B5D68] text-left pr-40 leading-[30px]">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-[60px] px-[80px] bg-white rounded-3xl">
          <div className="size-full grid grid-cols-4 gap-10">
            <div className="col-span-1">
              <img className="w-[130px] h-[90px]" src="img/avt-1.png" />
            </div>
            <div className="col-span-3">
              <div>
                <h2 className="text-xl font-semibold text-[#212353]">
                  John Fang
                </h2>
                <p className="text-md text-[#9C69E2]">wordfaang.com</p>
              </div>
              <div className="pt-5 ">
                <p className="text-md text-[#4B5D68] text-left pr-40 leading-[30px]">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-[60px] px-[80px] bg-white rounded-3xl">
          <div className="size-full grid grid-cols-4 gap-10">
            <div className="col-span-1">
              <img className="w-[130px] h-[90px]" src="img/avt-1.png" />
            </div>
            <div className="col-span-3">
              <div>
                <h2 className="text-xl font-semibold text-[#212353]">
                  John Fang
                </h2>
                <p className="text-md text-[#9C69E2]">wordfaang.com</p>
              </div>
              <div className="pt-5 ">
                <p className="text-md text-[#4B5D68] text-left pr-40 leading-[30px]">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
