import React, { SetStateAction, useEffect, useState } from "react";
import styles from "./Post.module.scss";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type TMessageState = [string | null, any];
function Message({ text }: { text: string | undefined }) {
  return (
    <div className={styles.message}>
      <span>{text}</span>
    </div>
  );
}
function Posts({ posts }: { posts: TPost[] }) {
  return (
    <div className={styles.grid}>
      {posts.map(({ userId, id, title, body }, index) => {
        return (
          <div className={styles.card} key={index}>
            <p className={styles.cardId}>ID: {id}</p>
            <p className={styles.cardUserId}>USERID: {userId}</p>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardBody}>{body}</p>
          </div>
        );
      })}
    </div>
  );
}
export function Post() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage]: TMessageState = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => {
        try {
          const json = data.json();
          return json;
        } catch {
          setMessage("Błędne dane");
          return null;
        }
      })
      .then(data => {
        if (!Array.isArray(data)) return setMessage("Błędne dane");
        setPosts(data);
      })
      .catch(() => {
        setMessage("Błąd serwera");
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      {message !== null ? <Message text={message} /> : <Posts posts={posts} />}
    </div>
  );
}
