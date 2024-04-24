import { FC } from "react";
import styles from "./Tabs.module.scss";
import clsx from "clsx";
import { ITabProps } from "../../types/types";

const Tabs: FC<ITabProps> = ({ tabs, selectedId, handleTabClick }) => {
  return (
    <div className={styles.tabs}>
      {tabs &&
        tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={clsx(styles.tabs__tab, {
              [styles.selected]: tab.id === selectedId,
            })}
          >
            {tab.label}
          </div>
        ))}
    </div>
  );
};

export default Tabs;
