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

export function Table({ data }: { data: TTable }) {
  const columns = Object.keys(data);
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headings}>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone number</th>
          <th></th>
        </tr>
        <tr>
          <th className={styles.headingsLine} colSpan={5}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>
            <button>button</button>
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
}
