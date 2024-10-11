function Cars({ name, imgSrc }) {
  return <div className="bg-white relative rounded-xl pt-5 pb-1 px-3 w-56 border-[1px] border-gray-300 before:content-[''] before:bg-secondary before:h-1 before:rounded-t-2xl before:w-9/12 before:absolute before:bottom-0 before:right-[50%] before:translate-x-[50%]">
    <p className="font-EstedadBold text-center text-xl">{name}</p>
    <img src={imgSrc} className="mt-1" />
  </div>;
}

export default Cars;
