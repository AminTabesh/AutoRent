function WhyBox({ className, imgsrc, title, text }) {
  return <div className={`border-[1px] border-gray-300 bg-white w-[300px] h-[200px] z-50 rounded-2xl flex flex-col gap-3 items-center p-8 pt-5 ${className}`}>
    <img src={imgsrc} className="border-2 border-primary-darker rounded-2xl p-2 w-[60px]" />
    <h3 className=" font-EstedadBold">{title}</h3>
    <p className=" text-center text-gray-400 text-sm font-EstedadLight">{text}</p>
  </div>;
}

export default WhyBox;
