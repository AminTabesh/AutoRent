import Slider from "react-infinite-logo-slider";

function LogoSlider() {
  return (
    <div className="mt-32 z-[0]">
      <Slider
        width="200px"
        duration={50}
        pauseOnHover={false}
        blurBorders={false}
      >
        <Slider.Slide>
          <img
            src="/public/images/BMW.png"
            alt=""
            className="h-[80px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/Honda.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/Hyundai.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/KIA-1.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/KIA-2.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/KIA.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/lexus-logo.png"
            alt=""
            className="h-[70px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/Marcedes.png"
            alt=""
            className="h-[80px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/Nissan.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src="/public/images/Toyota.png"
            alt=""
            className="h-[60px] max-w-none opacity-50"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
}

export default LogoSlider;
