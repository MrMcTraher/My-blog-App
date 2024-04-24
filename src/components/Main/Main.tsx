import clsx from "clsx";
import styles from "./Main.module.scss";
import { FC, useState } from "react";
import Tabs from "../Tabs/Tabs";
import { ITab } from "../../types/types";
import AllPosts from "../AllPosts/AllPosts";

const Main: FC<ITab[]> = () => {
  const tabs = [
    { label: "All", id: 1 },
    { label: "My favorites", id: 2 },
    { label: "Popular", id: 3 },
  ];

  const [selectedId, setSelectedId] = useState<number | string>(tabs[0].id);

  const handleTabClick = (id: number | string) => {
    setSelectedId(id);
  };

  return (
    <div className={styles.main}>
      <div className="container">
        <h1 className={clsx(styles.main__title)}>Blog</h1>
        <Tabs
          tabs={tabs}
          handleTabClick={handleTabClick}
          selectedId={selectedId}
        />
        <AllPosts />
      </div>
    </div>
  );
};

export default Main;
