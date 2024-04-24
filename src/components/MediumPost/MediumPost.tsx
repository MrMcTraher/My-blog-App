import { FC } from "react";
import styles from "./MediumPost.module.scss";
import { IPostComponentProps } from "../../types/types";
import { formatDate } from "../../utils/formatDate";
import { ReactComponent as ThumbUp } from "./../../assets/thumbUp.svg";
import { ReactComponent as ThumbDown } from "./../../assets/thumbDown.svg";
import { ReactComponent as IconBookmark } from "../../assets/Icon-Bookmark.svg";
import { ReactComponent as Dots } from "../../assets/dots.svg";

const MediumPost: FC<IPostComponentProps> = ({ post }) => {
  return (
    <div className={styles.mediumPost} id={post?.id}>
      <img className={styles.mediumPost__img} src={post?.image} alt="" />
      <div className={styles.mediumPost__date}>{formatDate(post?.date)}</div>
      <div className={styles.mediumPost__title}>{post?.title}</div>
      <div className={styles.mediumPost__icons}>
        <div className={styles.mediumPost__thumbs}>
          <ThumbUp style={{ cursor: "pointer" }} />
          <ThumbDown style={{ cursor: "pointer" }} />
        </div>
        <div className={styles.mediumPost__marks}>
          <IconBookmark style={{ width: "24px", cursor: "pointer" }} />
          <Dots style={{ width: "24px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default MediumPost;
