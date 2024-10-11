import WhyBox from "./WhyBox";

function Why() {
  return (
    <div className="flex flex-col items-center relative py-10 w-10/12 rounded-2xl h-96 mt-20 bg-why bg-cover after:content-[''] after:absolute after:bottom-0 after:top-0 after:right-0 after:left-0 after:z-10 after:bg-black after:opacity-70 after:rounded-2xl">
      <h3 className="text-secondary z-20 text-2xl">چــــــرا اُتو رِنت؟</h3>
      <p className="z-20 text-white w-9/12 mt-10 text-center font-EstedadLight leading-8 text-lg">
        اجاره خودرو از یک شرکت اجاره خودرو با سابقه به شما کمک می‌کند تا در
        مسافرت ها، قرار ملاقات‌ های مهم، مجالس و مراسم‌های خانوادگی ماشین مناسب
        خود را در اختیار داشته باشید. اگر شما اصلا خودرویی در اختیار ندارید یا
        خودروی شما مطمئن نیست، می‌توانید از سوییچ، خودروی مناسب خود را کرایه
        کرده و با آسودگی به سفر بروید.
      </p>
      <div className="flex absolute gap-20 flex-row bottom-[-100px]">
        <WhyBox
          className=""
          imgsrc="/public/images/box.svg"
          title="تحویل در محل"
          text="تحویل خودرو در زمان و مکان تعیین شده توسط شما خواهد بود."
        />
        <WhyBox
          className=""
          imgsrc="/public/images/24-support.svg"
          title="پشتیبانی 24 ساعته"
          text="کارشناسان ما در هر زمان و مکان، پاسخگوی سوالات شما خواهند بود."
        />
        <WhyBox
          className=""
          imgsrc="/public/images/wallet-minus.svg"
          title="قیمت مناسب"
          text="هدف ما، ارائه بهترین خدمات با مناسب ترین قیمت ممکن است."
        />
      </div>
    </div>
  );
}

export default Why;
