/* eslint-disable @next/next/no-img-element */
import styles from "./projects.module.scss";
import Image from "next/image";
import projets from "./projets.json";
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
              <a href={element.repo}>
                {" "}
                <Image
                className={styles.img}
                  loader={() => element.image}
                  src={element.image}
                  alt="Picture of the author"
                  width="450px"
                  height="300px"
                  href={element.repo}
                />
              </a>
              <div className={styles.description}>{element.description}</div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
