import { englishToPersian } from "replace-persian-number";
import Button from "../Button/Button";
// import { useNavigate } from "react-router-dom";

function OrderCard({
  off = false,
  imgSrc = "/public/images/404.png",
  title = "اجاره خودرو",
  model = new Date().getFullYear(),
  guarantee = 50,
  monthlyRent = 0,
  dailyRent = 0,
}) {

  // const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-2 items-center relative border border-slate-300 rounded-2xl bg-white w-[400px] p-4">
      <div className="relative h-[45%] w-full border rounded-2xl">
        <img
          src={imgSrc}
          className=" rounded-2xl w-full h-full object-contain"
        />
        {off !== 0 && (
          <div className="absolute top-2 left-2 rounded-full bg-blue-950 text-white text-sm p-2">
            {englishToPersian(`${off}%`)}
          </div>
        )}
      </div>
      <div className="mt-3 text-right w-full">
        <h3 className=" font-EstedadBold">{title}</h3>
        <p className="mt-2 text-sm text-slate-500 font-EstedadLight">
          مدل: <span className="text-slate-800">{englishToPersian(model)}</span>
        </p>
      </div>

      <div className="bg-slate-100 w-full h-12 rounded-lg flex justify-between items-center px-4">
        <p>
          <span className="text-sm text-slate-600">
            {englishToPersian("از 1 تا 30 روز: ")}
          </span>
          <span className="text-xl text-primary font-EstedadBold mr-1">
            {englishToPersian(
              new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                dailyRent
              )
            )}
          </span>
        </p>

        <p className="text-sm text-slate-500">روزانه</p>
      </div>
      <div className="bg-slate-100 w-full h-12 rounded-lg flex justify-between items-center px-4">
        <p>
          <span className="text-sm text-slate-600">
            {englishToPersian("از یک تا 12 ماه: ")}
          </span>
          <span className="text-xl text-primary font-EstedadBold mr-1">
            {englishToPersian(
              new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                monthlyRent
              )
            )}
          </span>
        </p>

        <p className="text-sm text-slate-500">روزانه</p>
      </div>

      <div className="w-full h-[1px] bg-slate-300 mt-2"></div>

      <div className="w-full flex items-center justify-between text-sm">
        <p className="font-EstedadMed">مبلغ ضمانت:</p>
        <p className="font-EstedadBold">{`${englishToPersian(
          guarantee
        )} میلیون تومان`}</p>
      </div>

      <Button
        type="primary"
        text="درخواست رزرو"
        className="w-full flex justify-center mt-2"
        onClick={() => {
          // navigate(`/order?car=${title}&id=${model}`)
        }}
      />
    </div>
  );
}

export default OrderCard;
