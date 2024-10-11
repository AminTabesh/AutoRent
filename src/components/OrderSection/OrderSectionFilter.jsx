
import { useAuto } from "../../contexts/ContextProvider";
import Button from "../Button/Button";

function OrderSectionFilter() {
    const {activeCarFilter, setActiveCarFilter} = useAuto()

  return (
    <div className="flex items-center w-full justify-center mt-10 relative">
      <div className="flex items-center gap-3">
        <Button
          type={activeCarFilter === "popular" ? "primary" : "white"}
          text="پرطرفدار"
          onClick={() => {
            setActiveCarFilter("popular");
          }}
        />
        <Button
          type={activeCarFilter === "lux" ? "primary" : "white"}
          text="لوکس"
          onClick={() => {
            setActiveCarFilter("lux");
          }}
        />
        <Button
          type={activeCarFilter === "SUV" ? "primary" : "white"}
          text="شاسی بلند"
          onClick={() => {
            setActiveCarFilter("SUV");
          }}
        />
      </div>
      <div className="flex items-center gap-1 absolute left-16">
        <p className="text-primary cursor-pointer">مشاهده همه</p>
        <img src="/public/images/arrow-left.svg" alt=""/>
      </div>
    </div>
  );
}

export default OrderSectionFilter;
