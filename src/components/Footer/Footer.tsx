import css from "./Footer.module.css";
import defCss from "@/app/page.module.css";

export default function Footer() {
  return (
    <footer className={css.pageFooter}>
      <div className={css.hours}>
        <h2 className={defCss.sectionTitle}>Opening Hours</h2>
        <div>
          <p>Mon - Sat: 11:00 - 23:00</p>
          <p>Sun: 11:00 - 19:00</p>
          <p>Food in the restaurant and takeaway!</p>
        </div>
      </div>

      <div className={css.grid}>
        <div className={css.location}>
          <h2 className={`${defCss.sectionTitle} ${css.locTitle}`}>Location</h2>
          <div>
            <p>130 Fulton St</p>
            <p>New York</p>
            <p>NY 10038, USA</p>
          </div>
        </div>

        <div className={css.sociale}>
          <div className={css.titleContainer}>
            <h2 className={`${defCss.sectionTitle} ${css.socTitle}`}>
              Sociale
            </h2>
          </div>
          <div>
            <p>
              <a href="">Instagram</a>
            </p>
            <p>
              <a href="">Facebook</a>
            </p>
            <p>
              <a href="">Twitter</a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className={css.copyright}>Copyright ©2021 by Bonbons Chocolate</p>
      </div>
    </footer>
  );
}
