import { FC } from "react";
import styles from "./SmallPost.module.scss";
import { IPostComponentProps } from "../../types/types";
import { formatDate } from "../../utils/formatDate";
import { ReactComponent as ThumbUp } from "./../../assets/thumbUp.svg";
import { ReactComponent as ThumbDown } from "./../../assets/thumbDown.svg";
import { ReactComponent as IconBookmark } from "../../assets/Icon-Bookmark.svg";
import { ReactComponent as Dots } from "../../assets/dots.svg";

const SmallPost: FC<IPostComponentProps> = ({ post }) => {
  return (
    <div className={styles.smallPost} id={post?.id}>
      <div className={styles.smallPost__container}>
        <div className={styles.smallPost__content}>
          <div className={styles.smallPost__date}>{formatDate(post?.date)}</div>
          <div className={styles.smallPost__title}>{post?.title}</div>
        </div>
        <div className={styles["smallPost__image-contaner"]}>
          <img
            className={styles.smallPost__image}
            src={post?.image}
            alt="small Post image"
          />
        </div>
      </div>
      <div className={styles.smallPost__icons}>
        <div className={styles.smallPost__thumbs}>
          <ThumbUp style={{ cursor: "pointer" }} />

          <ThumbDown style={{ cursor: "pointer" }} />
        </div>
        <div className={styles.smallPost__marks}>
          <IconBookmark style={{ width: "24px", cursor: "pointer" }} />
          <Dots style={{ width: "24px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default SmallPost;

/* 
 
*/
