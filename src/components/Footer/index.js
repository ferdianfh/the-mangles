/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} secondaryBgColor`}>
        <div className={`${styles.footerContent} whiteTextColor`}>
          <section className={styles.leftSection}>
            <ul>
              <Link href="/apps/about">
                <li>
                  Why <span className="fontGeorgia"> The Mangl&eacute;s</span>?
                </li>
              </Link>
              <Link href="/apps/about">
                <li>Be an author</li>
              </Link>
              <Link href="/apps/about">
                <li>Community</li>
              </Link>
              <li>FAQ</li>
            </ul>
          </section>
          <section className={styles.rightSection}>
            <h2 className="fontGeorgia">The Mangl&eacute;s</h2>
            <p className="">
              {" "}
              Jendral Sudirman Street No. 23 <br /> Jakarta, Indonesia
            </p>
            <p className="">(62)853-2042-2143</p>
            <p className="">mail.themangles@gmail.com</p>
          </section>
        </div>
      </footer>
    </>
  );
}
