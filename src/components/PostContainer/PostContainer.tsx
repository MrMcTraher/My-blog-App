import { FC, useEffect, useState } from "react";
import styles from "./PostContainer.module.scss";
import clsx from "clsx";
import BigPost from "../BigPost/BigPost";
import MediumPost from "../MediumPost/MediumPost";
import { IPost } from "../../types/types";
import SmallPost from "../SmallPost/SmallPost";

interface IPostContainerProps {
  isFirst: boolean;
  bigPost?: IPost;
  mediumPosts?: IPost[];
  smallPosts?: IPost[];
}

const PostContainer: FC<IPostContainerProps> = ({
  isFirst,
  bigPost,
  smallPosts,
  mediumPosts,
}) => {
  return (
    <div className={styles.posts}>
      <div className={clsx(styles["posts__left-container"])}>
        {isFirst ? (
          <BigPost post={bigPost} />
        ) : (
          <>
            <MediumPost
              post={
                mediumPosts && mediumPosts.length > 0
                  ? mediumPosts[0]
                  : undefined
              }
            />
            <MediumPost
              post={
                mediumPosts && mediumPosts.length > 0
                  ? mediumPosts[1]
                  : undefined
              }
            />
          </>
        )}
      </div>
      <div className={clsx(styles["posts__right-container"])}>
        <SmallPost
          post={smallPosts && smallPosts.length > 0 ? smallPosts[0] : undefined}
        />
        <SmallPost
          post={smallPosts && smallPosts.length > 0 ? smallPosts[1] : undefined}
        />
      </div>
    </div>
  );
};

export default PostContainer;
