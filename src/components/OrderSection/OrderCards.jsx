import { useQuery } from "@tanstack/react-query";
import { useAuto } from "../../contexts/ContextProvider";
import OrderCard from "./OrderCard";
import getCars from "../../funcs/database";
import Spinner from "../../ui/Spinner";




function OrderCards() {
  const { activeCarFilter } = useAuto();

  const {data: cars, isLoading} = useQuery({
    queryKey: ['cars'],
    queryFn: getCars
  })

  const carsArray = cars?.filter(car => car?.category?.includes(activeCarFilter))

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-16">
      {isLoading && <Spinner />}
      {!isLoading && carsArray?.map((car) => (
        <OrderCard
          key={car.id}
          title={car.title}
          model={car.model}
          off={car.off}
          imgSrc={car.img}
          monthlyRent={car.monthlyRent}
          dailyRent={car.dailyRent}
          guarantee={car.guarantee}
        />
      ))}
    </div>
  );
}

export default OrderCards;
