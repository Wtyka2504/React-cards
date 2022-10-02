import { useEffect, useRef, useState } from "react";
import btnStyles from "../../styles/modules/button.module.scss";
import styles from "../Modal/Modal.module.scss";
import cx from "classnames";
import { useClickOutside } from "../../hooks/useClickOutside";

export function Modal(props: any) {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const modalRef = useClickOutside(() => setOpen(false));
  return (
    <>
      <div>
        <button className={btnStyles.btn} onClick={openHandler}>
          Show Modal
        </button>
      </div>
      {
        <div className={cx(styles.modal, open ? styles.active : "")}>
          <div ref={modalRef} className={styles.wrapper}>
            ModalBox
          </div>
        </div>
      }
    </>
  );
}
