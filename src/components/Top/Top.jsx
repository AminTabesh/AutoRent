import Button from "../Button/Button";
import HeaderBar from "../HeaderBar/HeaderBar";

function Top() {
  return (
    <div className="h-[683px] w-full bg-header bg-no-repeat bg-cover bg-center relative">
      <div className="absolute top-[50%] translate-y-[-50%] right-32">
        <p className="text-secondary font-bold text-6xl leading-loose">
          اُتـــو رِنت؛ سریع،
          <br /> آسان و به صرفه
        </p>
        <p className="text-white font-EstedadLight text-xl">
          سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
        </p>
        <div className="mt-16 flex justify-center gap-8 imgUrl='/'">
          <Button text="اجاره خودرو" type="secondary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.51 2.83008H8.49C6 2.83008 5.45 4.07008 5.13 5.59008L4 11.0001H20L18.87 5.59008C18.55 4.07008 18 2.83008 15.51 2.83008Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9902 19.82C22.1002 20.99 21.1602 22 19.9602 22H18.0802C17.0002 22 16.8502 21.54 16.6602 20.97L16.4602 20.37C16.1802 19.55 16.0002 19 14.5602 19H9.44022C8.00022 19 7.79022 19.62 7.54022 20.37L7.34022 20.97C7.15022 21.54 7.00022 22 5.92022 22H4.04022C2.84022 22 1.90022 20.99 2.01022 19.82L2.57022 13.73C2.71022 12.23 3.00022 11 5.62022 11H18.3802C21.0002 11 21.2902 12.23 21.4302 13.73L21.9902 19.82Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8H3"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8H20"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3V5"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 5H13.5"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 15H9"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 15H18"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button text="تماس با ما" type="transparent" className="group">
            <svg
              className="group-hover:stroke-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>

      <HeaderBar />
    </div>
  );
}

export default Top;
