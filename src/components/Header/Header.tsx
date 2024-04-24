import Input from "../../ui-components/Input/input";
import Personal from "../../ui-components/Personal/Personal";
import Burger from "../Burger/Burger";
import styles from "./Header.module.scss";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Burger/>
      <Input />
      <Personal userName={"Ivan Gurinovich"} />
    </header>
  );
};

export default Header;
