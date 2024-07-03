import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.heroContent}>
        <h1 className={css.title}>Feel in Italy with our restaurant</h1>
        <p className={css.bottomText}>You can feel happy with us</p>
      </div>
    </section>
  );
}
