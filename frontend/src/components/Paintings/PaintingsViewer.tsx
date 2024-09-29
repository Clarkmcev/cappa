import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { paintings } from "../utils";
import Painting from "./Painting";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ROUTE_PAINTINGS, VARIANT_PAINTING_VIEWER } from "../../constants";
import Background from "../Background";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PaintingsViewer() {
  const { id } = useParams();
  const idNumber = Number(id);
  const navigate = useNavigate();

  return (
    <main className="w-screen relative h-screen z-50 bg-black/90">
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
      <div className="lowercase absolute top-4 right-4 z-50 group p-4 w-44 duration-150 transition-all">
        <button
          className="absolute top-4 right-4 z-50 flex space-x-2 items-center text-primary"
          onClick={() => navigate(ROUTE_PAINTINGS)}
        >
          <ArrowBackIcon className="text-primary" />
          <p className="lowercase font-custom">Home</p>
        </button>
      </div>
      <Background isDark={true} />
    </main>
  );
}

export default PaintingsViewer;
