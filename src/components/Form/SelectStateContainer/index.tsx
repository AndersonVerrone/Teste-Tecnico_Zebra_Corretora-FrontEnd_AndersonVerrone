import { IoIosList } from "react-icons/io";
import { SelectStateList } from "./SelectStateList";
import style from "./styles.module.scss";
import { useContext } from "react";
import { HomeContext } from "../../../providers/HomeContext";

interface IInputStateProps {
  id: string;
  label: string;
  helper?: string;
}

export const SelectStateContainer = ({ id, label }: IInputStateProps) => {
  const { handleInputChange, inputStateValue, listIsOpen } =
    useContext(HomeContext);

  return (
    <div className={style.selectStatetContainer}>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          value={inputStateValue}
          onChange={(event) => handleInputChange(event)}
          type="text"
          id={id}
        />
        <IoIosList />
      </div>
      {listIsOpen && <SelectStateList />}
    </div>
  );
};
