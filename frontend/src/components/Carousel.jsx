import { Carousel } from "@material-tailwind/react";
import { assets } from "../assets/frontend_assets/assets";
 
export function CarouselDefault() {
  return (
    <div className="w-[50%] h-[20%] duration-1000 ">
    <Carousel className="rounded-xl">
      <img
        src={assets.p_img4}
        alt="image 1"
        className=" w-[100%] h-[20%]  object-cover"
      />
      <img
        src={assets.p_img5}
        alt="image 2"
        className=" w-[100%] h-[20%] object-cover"
      />
      <img
        src={assets.p_img1}
        alt="image 3"
        className=" w-[100%] h-[20%] object-cover"
      />
    </Carousel>
    </div>
  );
}