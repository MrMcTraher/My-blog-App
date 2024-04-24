import { FC, useContext } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { ActiveContext } from "../../Context/context";
import Personal from "../../ui-components/Personal/Personal";

const Navbar: FC = () => {
  const context = useContext(ActiveContext);

  return (
    <div
      className={classNames(styles.navbar, {
        [styles.active]: context?.isActive,
      })}
    >
      <Personal userName={"Ivan Gurinovich"} />
    </div>
  );
};

export default Navbar;
