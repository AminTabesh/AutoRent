import Cars from "./Cars"

function CarsRow() {
    return (
        <div className="flex gap-5 mt-40">
            <Cars name="کوپه" imgSrc='/public/images/5.png' />
            <Cars name="سدان" imgSrc='/public/images/sedan.png' />
            <Cars name="کروک" imgSrc='/public/images/crook.png' />
            <Cars name="شاسی بلند" imgSrc='/public/images/SUV.png' />
            <Cars name="اسپرت" imgSrc='/public/images/sport.png' />
        </div>
    )
}

export default CarsRow
