import { ReactNode } from "react";
import style from "./styles.module.scss";

interface ITemplateHome {
  children: ReactNode;
}

export const TemplateHome = ({ children }: ITemplateHome) => {
  return (
    <main className={style.templateContainer}>
      <div>{children}</div>
    </main>
  );
};
