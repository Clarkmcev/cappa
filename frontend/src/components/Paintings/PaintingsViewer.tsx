import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { paintings } from "../utils";
import Painting from "./Painting";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { VARIANT_PAINTING_VIEWER } from "../../constants";
import Background from "../Background";
import { useParams } from "react-router-dom";

function PaintingsViewer() {
  const { id } = useParams();
  const idNumber = Number(id);

  return (
    <main className="absolute w-screen h-screen z-50 bg-black/90">
      <Swiper
        initialSlide={idNumber - 1}
        className="h-screen w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {paintings.map((painting, index) => (
          <SwiperSlide>
            <div className="w-fit m-auto h-full">
              <Painting
                variant={VARIANT_PAINTING_VIEWER}
                index={index}
                data={painting}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Background isDark={true} />
    </main>
  );
}

export default PaintingsViewer;
