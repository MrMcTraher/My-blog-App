import { FC } from "react";
import styles from "./Personal.module.scss";
import { IPersonalInterface } from "../../types/types";

const Personal: FC<IPersonalInterface> = ({ userName }) => {
  const splitFunction = (username: string) => {
    return username
      .split(" ")
      .map((el) => el[0].toUpperCase())
      .join("");
  };

  return (
    <div className={styles.personal}>
      <span className={styles["personal__initials"]}>
        {splitFunction(userName)}
      </span>
      <div className={styles["personal__fullname"]}>{userName}</div>
    </div>
  );
};

export default Personal;
