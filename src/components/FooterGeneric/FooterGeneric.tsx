import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { GrFacebook, GrStatusUnknown } from "react-icons/gr";
import cx from "classnames";
import styles from "./Footer.module.scss";

type TCompany = {
  addressLine1: string;
  addressLine2: string;
  phone: string;
  mail: string;
  name: string;
  logo: string;
};
type TSocials = {
  fb: string;
  instagram: string;
  twitter: string;
};
type TLinks = {
  help: string;
  pay: string;
  agreement: string;
  dashboard: string;
  reading: string;
  reports: string;
};
type TFooter = {
  company: TCompany;
  socials: TSocials;
  links: TLinks;
};

export function Company(company: TCompany) {
  if (company === undefined) {
    return (
      <>
        <div className={styles.company} />
        <div className={styles.contact} />
      </>
    );
  }
  const {
    addressLine1, addressLine2, phone, mail, name, logo,
  } = company;
  const isURLValid = (url: string) => {
    try {
      return Boolean(new URL(logo));
    } catch {
      return false;
    }
  };
  const logoElement = isURLValid(logo) ? (
    <img src={logo} alt="logo" className={cx(styles.logo, styles.image)} />
  ) : (
    <div className={cx(styles.logo, styles.empty)}>Placeholder</div>
  );
  return (
    <>
      <div className={styles.company}>
        <p className={styles.title}>{name}</p>
        <div className={styles.logoWrapper}>{logoElement}</div>
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
      </div>
      <div className={styles.contact}>
        <p className={styles.title}>Contact</p>
        <p>{phone}</p>
        <p>{mail}</p>
      </div>
    </>
  );
}
export function Links(links: TLinks) {
  if (links === undefined) return <div className={styles.links} />;
  const linksEntries = Object.entries(links);
  const maxLinksPerColumn = 5;
  const listsLength = Math.ceil(linksEntries.length / maxLinksPerColumn);
  const lists = Array.apply(null, Array(listsLength));

  return (
    <div className={styles.links}>
      <p className={styles.title}>Links</p>
      <div className={styles.linksListWrapper}>
        {lists
          .map((_, i) => linksEntries.slice(
            i * maxLinksPerColumn,
            (i + 1) * maxLinksPerColumn,
          ))
          .map((list, listIndex) => (
            <ul key={listIndex} className={styles.linksList}>
              {list.map(([name, url], itemIndex) => (
                <li key={itemIndex} className={styles.linksItem}>
                  <a href={url} target="_self" className={styles.linkLink}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
}
export function Socials(socials: TSocials) {
  const icons: { [key: string]: JSX.Element } = {
    fb: <GrFacebook className={styles.fb} />,
    instagram: <FaInstagramSquare className={styles.instagram} />,
    twitter: <FaTwitterSquare className={styles.twitter} />,
  };
  if (socials === undefined) return <div className={styles.socials} />;
  return (
    <div className={styles.socials}>
      <p className={styles.title}>Socials</p>
      <ul className={styles.socialsList}>
        {Object.entries(socials).map(([key, value], index) => (
          <li className={styles.socialsItem} key={index}>
            <a href={value} className={styles.socialsLink} target="_blank" rel="noreferrer">
              <div className={styles.columnCenter}>
                <span className={styles.socialIcon}>
                  {icons[key] ? (
                    icons[key]
                  ) : (
                    <GrStatusUnknown className={styles.unknown} />
                  )}
                </span>
                <p className={styles.socialIconName}>{key}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export function FooterGeneric({ socials, links, company }: TFooter) {
  return (
    <footer className={styles.footer}>
      <Company {...company} />
      <Socials {...socials} />
      <Links {...links} />
    </footer>
  );
}
