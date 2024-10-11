function HeaderMenu() {
  return (
    <ul className="flex gap-10 ">
      <li className="cursor-pointer">رزرو خودرو</li>
      <li className="cursor-pointer">خدمات ما</li>
      <li className="cursor-pointer">بلاگ</li>
      <li className="cursor-pointer">درباره ما</li>
      <li className="cursor-pointer">تماس با ما</li>
      <li className="cursor-pointer">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7589 3.53711C7.68521 3.53711 4.38281 6.8395 4.38281 10.9132C4.38281 14.9869 7.68521 18.2893 11.7589 18.2893C15.8326 18.2893 19.135 14.9869 19.135 10.9132C19.135 6.8395 15.8326 3.53711 11.7589 3.53711ZM2.88281 10.9132C2.88281 6.01108 6.85678 2.03711 11.7589 2.03711C16.6611 2.03711 20.635 6.01108 20.635 10.9132C20.635 15.8153 16.6611 19.7893 11.7589 19.7893C6.85678 19.7893 2.88281 15.8153 2.88281 10.9132Z"
            fill="#5C5F61"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0873 20.6022L16.9412 17.4564C16.6483 17.1635 16.6483 16.6887 16.9412 16.3957C17.234 16.1028 17.7089 16.1028 18.0018 16.3957L21.148 19.5415C21.4409 19.8344 21.4409 20.3093 21.148 20.6022C20.8551 20.8951 20.3803 20.8951 20.0873 20.6022Z"
            fill="#5C5F61"
          />
        </svg>
      </li>
    </ul>
  );
}

export default HeaderMenu;
