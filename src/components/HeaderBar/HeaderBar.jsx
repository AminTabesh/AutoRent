import Button from "../Button/Button";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Select from "react-select";

function HeaderBar() {
  const deliveryPlaces = [
    { value: "Shz-Dastgheyb", label: "شیراز - فرودگاه شهید دستغیب" },
    { value: "Teh-ImamAirport", label: "تهران - فرودگاه امام خمینی" },
    { value: "Teh-AzadiSquare", label: "تهران - میدان آزادی" },
  ];
  return (
    <div className="border-[1px] border-gray-300 h-44 w-9/12 bg-white absolute bottom-[-5.5rem] right-[50%] translate-x-[50%] rounded-2xl px-10 py-4 z-30">
      <div className="flex w-full h-10 justify-between">
          <div className="flex gap-2">
            <Button
              text="اجاره خودرو با راننده"
              type="primary"
              className=" rounded-3xl"
            />
            <Button
              text="اجاره خودرو بی راننده"
              type="white"
              className="border-gray-300 text-black rounded-3xl"
            />
            <Button
              text="اجاره ماشین عروس"
              type="white"
              className="border-gray-300 text-black rounded-3xl"
            />
          </div>
      </div>
      <table className=" mt-6">
        <thead className="font-EstedadLight text-right">
          <tr className="flex">
            <th className="w-72 flex gap-2 items-center">
              <img src="/public/images/arrow.svg" alt="arrow" className="w-2" />
              محل تحویل خودرو
            </th>
            <th className="w-40 flex gap-2 items-center">
              <img src="/public/images/arrow.svg" alt="arrow" className="w-2" />
              تاریخ تحویل
            </th>
            <th className="w-40 flex gap-2 items-center">
              <img src="/public/images/arrow.svg" alt="arrow" className="w-2" />
              ساعت تحویل
            </th>
            <th className="w-40 flex gap-2 items-center">
              <img src="/public/images/arrow.svg" alt="arrow" className="w-2" />
              تاریخ بازگشت
            </th>
            <th className="w-40 flex gap-2 items-center">
              <img src="/public/images/arrow.svg" alt="arrow" className="w-2" />
              ساعت بازگشت
            </th>
          </tr>
        </thead>
        <tbody className="font-EstedadLight">
          <tr className="flex border rounded-lg h-12 mt-2 items-center">
            <td className="w-72 h-3/5 flex items-center  border-l relative">
              <Select
                noOptionsMessage={() => "موردی یافت نشد."}
                options={deliveryPlaces}
                placeholder='یک گزینه را انتخاب کنید'
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    width: "285px",
                    border: "none",
                    boxShadow: "none",
                    outline: "none",
                    height: "100%",
                  }),
                  indicatorSeparator: (baseStyles) => ({
                    ...baseStyles,
                    display: "none",
                  }),
                }}
              />
            </td>
            <td className="w-40 h-3/5 flex items-center border-l relative">
              <DatePicker
                inputClass="h-full w-full px-2 focus:outline-none"
                calendar={persian}
                locale={persian_fa}
                placeholder="انتخاب کنید"
              />
              <img
                src="/public/images/calendar.svg"
                alt=""
                className="opacity-50 w-4 absolute left-2"
              />
            </td>
            <td className="w-40 h-3/5 flex items-center border-l relative">
              <DatePicker
                disableDayPicker
                format="hh:mm:ss A"
                plugins={[<TimePicker key={""} hideSeconds />]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                inputClass="h-full w-full px-2 focus:outline-none text-sm"
                placeholder="انتخاب کنید"
              />

              <img
                src="/public/images/clock.svg"
                alt=""
                className="opacity-50 w-4 absolute left-2"
              />
            </td>

            <td className="w-40 h-3/5 flex items-center border-l relative">
              <DatePicker
                inputClass="h-full w-full px-2 focus:outline-none"
                calendar={persian}
                locale={persian_fa}
                placeholder="انتخاب کنید"
              />
              <img
                src="/public/images/calendar.svg"
                alt=""
                className="opacity-50 w-4 absolute left-2"
              />
            </td>

            <td className="w-40 h-3/5 flex items-center border-none relative">
              <DatePicker
                disableDayPicker
                format="hh:mm:ss A"
                plugins={[<TimePicker key={""} hideSeconds />]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                inputClass="h-full w-full px-2 focus:outline-none text-sm"
                placeholder="انتخاب کنید"
              />

              <img
                src="/public/images/clock.svg"
                alt=""
                className="opacity-50 w-4 absolute left-2"
              />
            </td>
            <td className="h-full">
              <Button
                type="secondary"
                className="h-full flex items-center justify-center"
              >
                <img src="/public/images/search-outline.svg" className="w-4" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HeaderBar;
