import { FC, useContext, useState } from "react";
import styles from "./Burger.module.scss";
import { ReactComponent as Menu } from "../../assets/menuIcon.svg";
import { ReactComponent as Cancel } from "../../assets/cancelIcon.svg";
import { ActiveContext } from "../../Context/context";

const Burger: FC = () => {
  const context = useContext(ActiveContext);

  return (
    <button
      className={styles["burger-menu"]}
      onClick={() => !context?.setIsactive(!context?.isActive)}
    >
      {!context?.isActive ? <Menu /> : <Cancel />}
    </button>
  );
};

export default Burger;
