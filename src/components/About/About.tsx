import css from "./About.module.css";
import defCss from "../../app/page.module.css";

export default function About() {
  return (
    <section className={css.aboutSection}>
      <div className={css.grid}>
        <div>
          <h2 className={`${css.title}`}>About Us</h2>
          <div className={css.shell}>
            <div className={css.content}>
              <p className={css.abParagraph}>
                I&apos;m a paragraph. Click here to add your own text and edit
                me. It&apos;s easy. Just click &ldquo;Edit Text&rdquo; or double
                click me to add your own content and make changes to the font.
                Feel free to drag and drop me anywhere you like on your page.
                I&apos;m a great place for you to tell a story and let your
                users know a little more about you. This is a great space to
                write long text about your company and your services.
              </p>
              <p className={css.abParagraph}>
                I&apos;m a paragraph. Click here to add your own text and edit
                me. It&apos;s easy. Just click &ldquo;Edit Text&rdquo; or double
                click me to add your own content and make changes to the font.
                Feel free to drag and drop me anywhere you like on your page.
                I&apos;m a great place for you to tell a story and let your
                users know a little more about you. This is a great space to
                write long
              </p>
            </div>
          </div>
        </div>
        <div className={css.chef}></div>
      </div>
    </section>
  );
}
