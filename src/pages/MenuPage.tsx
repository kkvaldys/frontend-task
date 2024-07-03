import css from "./MenuPage.module.css";
import defCss from "../app/page.module.css";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import "../app/globals.css";

export default function MenuPage() {
  return (
    <div>
      <Header />
      <section className={css.MenuPageSection}>
        <h2 className={defCss.sectionTitle}>Menu</h2>
        <div>
          <Menu />
        </div>
      </section>
    </div>
  );
}
