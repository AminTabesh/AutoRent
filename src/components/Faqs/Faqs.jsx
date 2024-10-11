// import { useState } from "react";
import Title from "../Title/Title";
import FaqBox from "./FaqBox";

const faqs = [
  {
    id: 1,
    title: "در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    id: 2,
    title: "هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    id: 3,
    title: "آیا ماشین های اتورنت دارای بیمه هستند؟",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
  {
    id: 4,
    title: "محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  },
];

function Faqs() {
  // const [openBox, setOpenBox] = useState()
  return (
    <div className="mt-32">
      <Title light="پر تکرارترین سؤالاتی که پرسیدید">
        <h3 className="font-EstedadXBold mt-5 text-3xl">
          سؤالات <span className="text-secondary-darker">متداول</span>
        </h3>
      </Title>

      <div className="flex flex-row-reverse gap-10 mt-10">
        <img
          src="/public/images/Default_A_gentleman_is_showing_a_case_to_a_lady_and_asking_her_0 1.png"
          className="rounded-2xl max-h-[459px]"
        />
        <div className="flex flex-col gap-2">
        {faqs.map((f) => (
          <FaqBox key={f.id} faq={f} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
