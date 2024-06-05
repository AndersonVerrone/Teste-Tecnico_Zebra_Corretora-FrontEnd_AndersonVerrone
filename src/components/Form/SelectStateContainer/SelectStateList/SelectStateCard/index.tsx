import { useContext } from "react";
import style from "./styles.module.scss";
import { HomeContext } from "../../../../../providers/HomeContext";

interface ICardProps {
  name: string;
}

export const SelectStateCard = ({ name }: ICardProps) => {
  const { selectState } = useContext(HomeContext);

  return (
    <li onClick={() => selectState(name)} className={style.stateCard}>
      <p>{name}</p>
    </li>
  );
};
