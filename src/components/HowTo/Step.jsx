import { englishToPersian } from "replace-persian-number";

function Step({ className, title, text, svg, step, numClass }) {
  const coloredWord = title.split(" ").at(0);
  const restTitle = title
    .split(" ")
    .filter((w) => w !== coloredWord)
    .join(" ");

    const persianStep = englishToPersian(step)
  return (
    <div
      className={`absolute flex flex-row-reverse gap-2 items-center ${className}`}
    >
      <div className="flex flex-col gap-3">
        <p className="font-EstedadBold text-2xl">
          <span className="text-secondary-darker">{coloredWord}</span>{" "}
          <span>{restTitle}</span>
        </p>
        <p className="font-EstedadLight text-sm max-w-72">{text}</p>
      </div>

      <div className="flex items-center justify-center bg-white p-3 rounded-2xl border-gray-300 border-[1px] relative z-10">
        <img className="w-10" src={svg}/>
      </div>
        <p className={`absolute right-0 text-9xl text-stroke z-0 ${numClass}`}>{persianStep}</p>
    </div>
  );
}

export default Step;
