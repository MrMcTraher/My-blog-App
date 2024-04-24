import { FC } from "react";
import styles from "./BigPost.module.scss";
import { IPostComponentProps } from "../../types/types";
import { formatDate } from "../../utils/formatDate";
import { ReactComponent as ThumbUp } from "./../../assets/thumbUp.svg";
import { ReactComponent as ThumbDown } from "./../../assets/thumbDown.svg";
import { ReactComponent as IconBookmark } from "../../assets/Icon-Bookmark.svg";
import { ReactComponent as Dots } from "../../assets/dots.svg";

const BigPost: FC<IPostComponentProps> = ({ post }) => {
  return (
    <div>
      <div className={styles.bigPost}>
        <div className={styles.bigPost__content}>
          <span className={styles.bigPost__date}>{formatDate(post?.date)}</span>
          <h2 className={styles.bigPost__title}>{post?.title}</h2>
          <p className={styles.bigPost__text}>{post?.description}</p>
        </div>
        <div className={styles["bigPost__image-container"]}>
          <img
            className={styles["bigPost__img"]}
            src={post?.image}
            alt="blog-image"
          />
        </div>
      </div>
      <div className={styles.bigPost__icons}>
        <div className={styles.bigPost__thumbs}>
          <ThumbUp style={{ cursor: "pointer" }} />
 
          <ThumbDown style={{ cursor: "pointer" }} />
        </div>
        <div className={styles.bigPost__marks}>
          <IconBookmark style={{ width: "24px", cursor: "pointer" }} />
          <Dots style={{ width: "24px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default BigPost;
