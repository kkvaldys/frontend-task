import css from "./Header.module.css";
import Link from "next/link";
import defCss from "../../app/page.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={css.pageHeader}>
      <div className={`${css.headerNav}`}>
        <a href="/" className={css.link}>
          Home
        </a>
        <Link href="/MenuPage" className={css.link}>
          Menu
        </Link>
        <div className={css.logo}>
          <a href="/" className={css.linkMobile}>
            <h2 className={defCss.sectionTitle}>Selve Restourant</h2>
          </a>
        </div>
        <a href="#footer" className={css.link}>
          Contacts
        </a>

        <button className={css.mobileOpenButton} type="button">
          <svg className={css.mobileOpenButton} width="28" height="28">
            <use href="../images/icons.svg#burger"></use>
          </svg>
        </button>
        <ul className={css.socialLinks}>
          <li className={css.socialItemIcons}>
            <a href="" target="_blank">
              <svg className={css.socialIcon}>
                <use href="/images/icons.svg#instagram"></use>
              </svg>
            </a>
          </li>
          <li className={css.socialItemIcons}>
            <a href="" target="_blank">
              <svg className={css.socialIcon}>
                <use href="/images/icons.svg#twitter"></use>
              </svg>
            </a>
          </li>
          <li className={css.socialItemIcons}>
            <a href="" target="_blank">
              <svg className={css.socialIcon}>
                <use href="/images/icons.svg#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
