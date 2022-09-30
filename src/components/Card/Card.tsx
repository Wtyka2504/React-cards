import styles from "./card.module.scss";
import cx from "classnames";
import type { TCard, TCardWrapper } from "./TCard";
export function Card({ name, surname, avatar, rewards, background }: TCard) {
  return (
    <div className={styles.card}>
      <header style={{ backgroundImage: `url(${background})` }}>
        <p className={styles.fullName}>
          <span>{name}</span>
          <span>{surname}</span>
        </p>
        <div
          style={{ backgroundImage: `url(${avatar})` }}
          className={styles.avatar}
        ></div>
      </header>
      <footer className={styles.rewards}>
        <p className={styles.title}></p>
        <div className={styles.rewardsList}>
          {Object.entries(rewards).map(([key, value], index) => {
            if (value === 0) return;

            const classExtend = key.charAt(0).toUpperCase() + key.slice(1);

            return (
              <div
                key={index}
                className={cx(
                  styles.rewardsItem,
                  styles[`rewardsItem${classExtend}`]
                )}
              >
                <p className={styles.rewardsAmount}>{value}</p>
                <p className={styles.rewardsName}>{key}</p>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
export function CardWrapper({ children }: TCardWrapper) {
  return (
    <div className={styles.wrapper}>
      {children.map((props, index) => {
        return <Card {...props} key={index} />;
      })}
    </div>
  );
}
