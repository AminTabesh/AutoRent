function Stars({ rating, className }) {
    const array = Array.from({length: 5}, (_, index) => {
        return index + 1 <= rating ? '/public/images/star-yellow.svg' : '/public/images/star-gray.svg' 
    })
  return <div className={`flex flex-row-reverse gap-1 justify-center ${className}`}>
    {array.map((item, index) => <img src={item} className="w-5" key={index} />)}
  </div>;
}

export default Stars;
