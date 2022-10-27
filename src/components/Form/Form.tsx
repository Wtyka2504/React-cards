import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Form.module.scss";

export function Form() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles.wrapper}>
      <form>
        <button type="button" onClick={loginWithRedirect}>
          Zaloguj się
        </button>
      </form>
    </div>
  );
}
