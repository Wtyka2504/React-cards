import styles from "./Card.module.scss";
import ICard from "./TCard";
export default ({ name, surname, avatar, rewards, background }: ICard) => {
  return (
    <div className={styles.card}>
      <header style={{ backgroundImage: `url(${background})` }}>
        <p className={styles.card__fullname}>
          <span className={styles.card__name}>{name}</span>
          <span className={styles.card__surname}>{surname}</span>
        </p>
        <div
          style={{ backgroundImage: `url(${avatar})` }}
          className={styles.card__avatar}
        ></div>
      </header>
      <footer className={styles.rewards}>
        <p className={styles.rewards__title}></p>
        <div className={styles["rewards__item-list"]}>
          {Object.entries(rewards).map(([key, value], index) => {
            if (value === 0) return;
            return (
              <div
                key={index}
                className={`${styles.rewards__item} ${
                  styles[`rewards__item--${key}`]
                }`}
              >
                <p className={styles.rewards__amount}>{value}</p>
                <p className={styles.rewards__name}>{key}</p>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};
