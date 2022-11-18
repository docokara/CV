/* eslint-disable @next/next/no-img-element */
import styles from "./projects.module.scss";
import Image from "next/image";
import projets from "./projets.json";
import Link from "next/link";
export default function projects({}) {
  return (
    <div className={styles.container} id="projet-section">
      {" "}
      {Object.values(projets).map((element, i) => {
        return (
          <div key={i} className={styles.projet}>
            <header className={styles.header}>
              <div>{element.name}</div>
            </header>
            <section className={styles.infos} key={i}>
              <Link href={element.repo} className={styles.link}>
                {" "}
                <Image
                  className={styles.img}
                  loader={() => element.image}
                  src={element.image}
                  alt="Picture of the author"
                  width="450"
                  height="300"
                  href={element.repo}
                />
              </Link>
              <div className={styles.description}>{element.description}</div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
