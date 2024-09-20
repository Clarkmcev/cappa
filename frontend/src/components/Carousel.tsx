import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { paintings } from "./utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Painting from "./Painting";

function Carousel() {
  return (
    <main className="h-screen w-screen">
      <Swiper
        className="h-screen w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {paintings.map((painting, index) => (
          <SwiperSlide>
            <Painting index={index} data={painting} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Carousel;
