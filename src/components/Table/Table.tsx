import { useState } from "react";
import styles from "./Table.module.scss";
type TTable = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export function Table({ data }: { data: TTable[] }) {
  const [active, setActive] = useState(false);
  const columns = [
    "name",
    "username",
    "phone number",
    "email",
    "address",
    "website",
    "company",
  ];
  const length = active ? columns.length : 4;
  const btnText = active ? "Hide" : "Show";
  const toggleActive = () => {
    setActive(prev => (prev ? false : true));
  };
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headings}>
          {columns.slice(0, length).map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
        <tr>
          <th className={styles.headingsLine} colSpan={length}></th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              {active ? (
                <>
                  <td>
                    <p>{user.address.street}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.zipcode}</p>
                  </td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </>
              ) : undefined}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          {columns.slice(1, length).map((_, index) => (
            <td key={index}></td>
          ))}
          <td className={styles.textRight}>
            <button onClick={toggleActive} className={styles.btn}>
              {btnText}
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
