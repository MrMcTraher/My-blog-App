import { FC, useEffect, useState } from "react";
import styles from "./AllPosts.module.scss";
import PostContainer from "../PostContainer/PostContainer";
import { IPost } from "../../types/types";
import { fetchData } from "../../utils/api";

const AllPosts: FC = () => {
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    const fetchPostsData = async () => {
      const fetchedPosts = await fetchData();
      const postsArray = fetchedPosts.results;
      setPosts(postsArray);
    };
    fetchPostsData();
  }, []);
  console.log(posts);

  return (
    <>
      {posts?.map((post, index) => {
        if (index === 0) {
          return (
            <PostContainer
              key={index}
              isFirst={true}
              bigPost={post}
              smallPosts={[posts[index + 1], posts[index + 2]]}
            />
          );
        } else if (index % 3 === 1) {
          return (
            <PostContainer
              key={index}
              isFirst={false}
              mediumPosts={[posts[index], posts[index + 1]]}
              smallPosts={[posts[index + 2], posts[index + 3]]}
            />
          );
        }
      })}
    </>
  );
};

export default AllPosts;
