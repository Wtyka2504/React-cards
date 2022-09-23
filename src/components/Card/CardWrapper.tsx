import styles from "./Card.module.scss";
import ICardWrapper from "./TCardWrapper";
export default (props: ICardWrapper) => {
  return <div className={styles["card-wrapper"]}>{props.children}</div>;
};
