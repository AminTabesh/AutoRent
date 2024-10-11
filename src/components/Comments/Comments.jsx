import { useState } from "react";
import Title from "../Title/Title";
import Stars from "./Stars";
const comments = [
  {
    userName: "اولدوز بهاور",
    rating: 4,
    comment:
      "اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.",
    img: "/public/images/Comments1-.png",
    birthYear: "27 دی 1380",
  },
  {
    userName: "الکس مورگان",
    rating: 4,
    comment:
      "اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.",
    img: "/public/images/Comments1-.png",
    birthYear: "18 تیر 1382",
  },
  {
    userName: "عاطفه آزادی",
    rating: 4,
    comment:
      "اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.",
    img: "/public/images/Comments1-.png",
    birthYear: "11 آبان 1354",
  },
  {
    userName: "کمند شکیبافر",
    rating: 5,
    comment:
      "اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن می‌گشتم! بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه! پشتیبانی عالی، هزینه بسیار مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم! حتماً دفعه بعد هم برای اجاره ماشین به سراغشون میام.",
    img: "/public/images/Comments1-.png",
    birthYear: "9 مهر 1383",
  },
];

function Comments() {
  const [activeComment, setActiveComment] = useState(0);

  return (
    <div className="mt-20 w-11/12">
      <Title light="آنچه مشتریان ما درموردمان گفته‌اند.">
        <h3 className="font-EstedadXBold text-3xl mt-4">
          نظرات <span className="text-secondary-darker">مشتریان</span>
        </h3>
      </Title>

      <div className="mt-10 w-full flex flex-col items-center gap-5 bg-white rounded-2xl border-gray-300 border-[1px] py-10 px-5">
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-4 w-full items-center">
            <img
              key={`image-${activeComment}`}
              src={comments.at(activeComment).img}
              className="rounded-full border-primary border-8 w-44 shadow-lg shadow-gray-700 animate-comeIn"
            />
            <p key={`username-${activeComment}`} className="mt-2 animate-comeIn">
              {comments.at(activeComment).userName}
            </p>
            <Stars
              key={`stars-${activeComment}`}
              rating={comments.at(activeComment).rating}
              className='animate-comeIn'
            />
          </div>

          <p
            key={`comment-${activeComment}`}
            className="text-zinc-500 text-center w-6/12 leading-10 animate-comeIn"
          >
            {comments.at(activeComment).comment}
          </p>
        </div>
      </div>

      <div className="w-full flex gap-5">
        {comments.map((comment, index) => (
          <div
            key={comment.userName}
            className={`w-1/4 h-32 rounded-2xl border-[1px] border-gray-300 mt-5 cursor-pointer flex gap-3 items-center px-5 ${
              index !== activeComment ? "bg-white" : "bg-secondary"
            }`}
            onClick={() => setActiveComment(index)}
          >
            <img src={comment.img} className={`rounded-full h-20 ${index !== activeComment ? "grayscale" : "grayscale-0"}`} />
            <div className="flex flex-col gap-4">
              <p>{comment.userName}</p>
              <p className="text-sm text-gray-500">{comment.birthYear}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Comments;
