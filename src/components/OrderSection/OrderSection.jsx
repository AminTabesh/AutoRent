import Title from "../Title/Title";
import OrderCards from "./OrderCards";
import OrderSectionFilter from "./OrderSectionFilter";

function OrderSection() {
  return (
    <section className="mt-16 w-11/12">
      <Title light="مشاهده موجودی خودروها ">
        <h2 className="font-EstedadXBold mt-5 text-3xl">
          رزرو خودرو در{" "}
          <span className="text-secondary-darker">اُتـــورِنت</span>
        </h2>
      </Title>

      <OrderSectionFilter />
      <OrderCards />
    </section>
  );
}

export default OrderSection;
