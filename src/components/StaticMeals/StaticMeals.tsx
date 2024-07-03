import css from "./StaticMeal.module.css";
import defCss from "../../app/page.module.css";
import Image from "next/image";

export default function StaticMeals() {
  return (
    <section className={css.section}>
      <h2 className={`${defCss.sectionTitle} ${css.title}`}>Menu</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <Image
            src="/images/bolognese.jpg"
            alt="Risotto"
            width={380}
            height={194}
            className={css.first}
          />
          <p></p>
        </li>
        <li className={css.item}>
          <h2 className={css.dish}>Risotto</h2>
          <Image
            src="/images/bolognese-2.jpg"
            alt="Risotto"
            width={380}
            height={194}
          />
          <p className={css.cook}>
            Bring a large pot of water to a boil. Add kosher salt to the boiling
            water, then add the pasta. Cook according to the package
            instructions, about 9 minutes.\r\nIn a large skillet over
            medium-high heat, add the olive oil and heat until the oil starts to
            shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2
            minutes...
          </p>
        </li>
        <li className={css.item}>
          <h2 className={css.dish}>Lasagna</h2>
          <Image
            src="/images/lasagna.jpg"
            alt="Risotto"
            width={380}
            height={194}
          />
          <p className={css.cook}>
            Bring a large pot of water to a boil. Add kosher salt to the boiling
            water, then add the pasta. Cook according to the package
            instructions, about 9 minutes.\r\nIn a large skillet over
            medium-high heat, add the olive oil and heat until the oil starts to
            shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2
            minutes...
          </p>
        </li>
      </ul>
    </section>
  );
}
