import Company from "./Company";

export default () => {
  return (
    <footer>
      {footer.company ? <Company {...footer.company}></Company> : null}
    </footer>
  );
};
