import { useState } from "react";
import cx from "classnames";
import { IoIosAdd, IoMdRemove } from "react-icons/io";
import styles from "./Human.module.scss";

const sexToString = ["man", "woman"];
const initialData = {
  human: {
    sex: 0,
    surname: "Detic",
  },
  accountBalance: 1000,
};

export function Human() {
  const [state, setState] = useState(initialData);
  const { sex, surname, accountBalance } = { ...state, ...state.human };
  const amount = 500;
  const handleChangeSex = () => setState(prev => ({
    ...prev,
    human: {
      ...prev.human,
      sex: prev.human.sex === 0 ? 1 : 0,
    },
  }));

  const handleBuy = () => setState(prev => ({
    ...prev,
    accountBalance: amount + prev.accountBalance,
  }));
  const handleSell = () => setState(prev => ({
    ...prev,
    accountBalance: (prev.accountBalance -= amount),
  }));
  return (
    <div className={styles.wrapper}>
      <p>
        <span>Surname: </span>
        <span>{surname}</span>
      </p>
      <p>
        <span>Sex: </span>
        <span>{sexToString[sex]}</span>
      </p>
      <button
        onClick={handleChangeSex}
        className={cx(styles.btn, styles.btnSex)}
      >
        zmień płeć
      </button>
      <div className={styles.row}>
        <button
          className={cx(styles.btn, styles.btnBalance)}
          onClick={handleSell}
        >
          <IoMdRemove />
        </button>
        <p>
          <span>Account Balance: </span>
          <span>{state.accountBalance}</span>
        </p>
        <button
          className={cx(styles.btn, styles.btnBalance)}
          onClick={handleBuy}
        >
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
}
