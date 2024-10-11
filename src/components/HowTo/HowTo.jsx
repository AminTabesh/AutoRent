import Title from "../Title/Title";
import Step from "./Step";

function HowTo() {
  return (
    <div className=" w-full mt-14 px-32">
      <Title light="چگونه در وبسایت">
        <h2 className="font-EstedadXBold mt-5 text-3xl">
          <span className="text-secondary-darker">اُتـــورِنت، </span>
          <span>خودرو رزرو کنیم؟</span>
        </h2>
      </Title>

      <div className="w-full relative py-5 flex flex-col items-center justify-center mt-16 gap-[550px]">
        <div className="w-10 h-[100px]  bg-secondary"></div>
        <div className="absolute">
          <img
            src="/public/images/howto-car.png"
            className="top-0 bottom-0 right-0 left-0 mx-auto my-auto"
          />
          <img
            src="/public/images/Vector 144.png"
            className="absolute z-20 top-[-10px]"
          />
          <img
            src="/public/images/Vector 144.png"
            className="absolute z-20 top-[-10px] left-0 transform scale-x-[-1]"
          />
          <img
            src="/public/images/Vector 146 (1).png"
            className="absolute z-20 bottom-[-45px] left-2"
          />
          <img
            src="/public/images/Vector 146 (1).png"
            className="absolute z-20 bottom-[-45px] right-2 transform scale-x-[-1]"
          />
        </div>
        <Step
          className="right-0 top-10"
          title="خودروی خود را انتخاب کنید."
          text="خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید."
          svg="/public/images/car.svg"
          step="1"
          numClass="right-10 bottom-4"
        />
        <Step
          className="left-0 top-10"
          title="تاریخ تحویل را تعیین کنید."
          text="تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید"
          svg="/public/images/calendar-tick.svg"
          step="2"
          numClass="bottom-1 right-2"
        />
        <Step
          className="right-0 bottom-44"
          title="هزینه اجاره را پرداخت کنید."
          text="خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید."
          svg="/public/images/cards.svg"
          step="3"
          numClass="bottom-4 right-[-10px]"
        />
        <Step
          className="left-0 bottom-44"
          title="خودرو را دریافت کنید."
          text="در زمان و مکان تعیین شده، خودروی خود را دریافت کنید."
          svg="/public/images/key.svg"
          step="4"
          numClass="bottom-5 right-2"
        />
        <div className="w-10 h-[100px] bg-secondary translate-y-20"></div>
      </div>
    </div>
  );
}

export default HowTo;
