
import { englishToPersian } from "replace-persian-number";

function Footer() {
  return (
    <div className="w-11/12 h-[432px] bg-[#1e1e1ed5] rounded-2xl relative before:content-[''] before:bg-footer before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-10 before:bg-cover mt-24 overflow-hidden flex flex-col items-center before:z-0">
      <div className="flex flex-col p-10 gap-2 h-5/6 border-b border-zinc-400 w-11/12">
        <div className="w-full h-24 border-zinc-400 border rounded-2xl flex py-5 items-center justify-center">
          <div className=" relative flex gap-5 h-full w-full items-center justify-center after:content-[''] after:h-1/2 after:absolute after:left-0 after:w-[1px] after:text-5xl after:bg-zinc-300">
            <img src="/public/images/call.svg" />

            <div className="flex items-center flex-col gap-2 text-zinc-200 font-EstedadLight ">
              <p>ارتباط با ما</p>
              <p>{englishToPersian("0912-21326545")}</p>
            </div>
          </div>
          <div className=" relative flex gap-5 h-full w-full items-center justify-center after:content-[''] after:h-1/2 after:absolute after:left-0 after:w-[1px] after:text-5xl after:font-EstedadLight after:bg-zinc-300">
            <img src="/public/images/email.svg" />

            <div className="flex items-center flex-col gap-2 text-zinc-200 font-EstedadLight">
              <p>ایمیل</p>
              <p>autorent@info.com</p>
            </div>
          </div>
          <div className="flex gap-5 h-full w-full items-center justify-center">
            <img src="/public/images/map.svg" />

            <div className="flex items-center flex-col gap-2 text-zinc-200 font-EstedadLight">
              <p>آدرس</p>
              <p>تهران- خ شادمان</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex gap-5 px-5 py-2">
          <div className="flex flex-col gap-3 basis-full z-10">
            <img src="/public/images/Logo (1).png" className="w-40" />
            <p className="text-zinc-300 font-EstedadLight">
              اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین
              ناوگان خودرویی متشکل از انواع خودروهای صفر کیلومتر، اقتصادی تا
              تجاری در سراسر کشور ایران آماده خدمت‌رسانی به مشتریان است.
            </p>
          </div>
          <ul className="basis-full z-10 flex flex-col justify-evenly items-center ">
            <li className="cursor-pointer text-zinc-300 font-EstedadLight">
              دسترسی آسان
            </li>
            <li className="cursor-pointer text-zinc-300 font-EstedadLight">
              سوالات متداول
            </li>
            <li className="cursor-pointer text-zinc-300 font-EstedadLight">
              تماس با ما
            </li>
            <li className="cursor-pointer text-zinc-300 font-EstedadLight">
              درباره ما
            </li>
          </ul>
          <div className="basis-full gap-5 z-10 flex flex-col items-start justify-center">
            <p className="text-zinc-300">خبرنامه</p>
            <div className="h-10 w-9/12 border rounded border-zinc-300 flex pr-3">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="bg-transparent focus:outline-none text-zinc-300 invalid:border-red-500"
              ></input>
              <button className='h-full text-xs flex items-center justify-center rounded bg-secondary transition-colors hover:bg-secondary-darker w-full'>ارسال</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 font-EstedadLight text-zinc-400">
        تمامی حقوق این وبسایت متعلق به اتورنت می‌باشد
      </div>
    </div>
  );
}

export default Footer;
