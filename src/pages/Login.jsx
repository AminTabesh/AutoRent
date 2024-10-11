import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/high-res.css";

function Login() {
  return (
    <div className="bg-background flex justify-center items-center h-screen w-screen">
      <div className="h-[575px] w-[1015px] bg-white rounded-2xl grid grid-cols-[5fr_2fr] overflow-hidden">
        <div className="relative justify-center items-center font-EstedadLight flex flex-col gap-4 px-32 ">
          <img
            src="/public/images/Logo.png"
            alt="logo"
            className="scale-75 absolute top-8"
          />
          <h2 className="font-EstedadBold">ورود یا ثبت نام</h2>
          <p className="text-sm text-slate-500 mt-2">
            کد تایید به شماره موبایلی که ارسال میکنید ارسال خواهد شد.
          </p>

          <PhoneInput country={"ir"} />

          <div className="flex gap-4 self-start mr-1">
            <input type="checkbox" id="checkBox" />
            <label htmlFor="checkBox" className="text-slate-500 text-sm">
              با ورود و ثبت نام در سایت، با قوانین{" "}
              <button className="text-primary">اتو رنت</button> موافقت میکنم.
            </label>
          </div>
          <button
            className="bg-primary text-white w-full py-4 rounded-lg mt-4 transition-colors hover:bg-primary-darker disabled:bg-slate-300 disabled:text-slate-600"
            disabled
          >
            تایید و ادامه
          </button>
        </div>
        <div className="">
          <img
            src="/public/images/login-bg.png"
            alt="login-bg"
            className="w-full h-full scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
