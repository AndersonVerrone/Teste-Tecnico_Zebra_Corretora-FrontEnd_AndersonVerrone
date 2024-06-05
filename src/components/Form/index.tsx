import { InputContainer } from "./InputContainer";
import { SelectStateContainer } from "./SelectStateContainer";
import style from "./styles.module.scss";

export const Form = () => {
  return (
    <form className={style.formContainer}>
      <h2>Endereço</h2>
      <InputContainer id="address" label="Endereço" />
      <SelectStateContainer id="state" label="Cidade" />
      <InputContainer id="number" label="Número" />
    </form>
  );
};
