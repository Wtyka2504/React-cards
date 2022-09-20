import styles from "../styles/Card.module.scss";
import ICardWrapper from "../interfaces/ICardWrapper";
export default (props: ICardWrapper) => {
  return <div className={styles["card-wrapper"]}>{props.children}</div>;
};
