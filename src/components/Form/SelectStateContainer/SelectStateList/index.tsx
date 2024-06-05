import { useContext } from "react";
import { SelectStateCard } from "./SelectStateCard";
import { HomeContext } from "../../../../providers/HomeContext";
import style from "./styles.module.scss";

export const SelectStateList = () => {
  const { statesList } = useContext(HomeContext);
  return (
    <ul className={style.statesList}>
      {statesList &&
        statesList.map((state) => (
          <SelectStateCard key={state.id} name={state.name} />
        ))}
    </ul>
  );
};
