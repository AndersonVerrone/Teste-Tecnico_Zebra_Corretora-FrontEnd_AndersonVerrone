import style from "./styles.module.scss";

interface IInputProps {
  id: string;
  label: string;
  helper?: string;
}

export const InputContainer = ({ id, label }: IInputProps) => {
  return (
    <div className={style.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} />
    </div>
  );
};
