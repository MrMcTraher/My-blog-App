import styles from "./Button.module.scss";
import { FC } from "react";
import { ReactComponent as BookmarkIcon } from "../../assets/Icon-Bookmark.svg";
import { ReactComponent as ThumbUp } from "../../assets/thumbUp.svg";
import { ReactComponent as ThumbDown } from "../../assets/thumbDown.svg";

const Button: FC = () => {
  return (
    <button className={styles.button}>
      <ThumbDown />
    </button>
  );
};

export default Button;
