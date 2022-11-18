/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.scss";
import Link from "next/link";
export default function footer({}) {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/docokara" className={styles.githubLogo}>
        <img
          alt="github"
          src="https://img.icons8.com/glyph-neue/64/000000/github.png"
        ></img>
      </Link>
    </div>
  );
}
