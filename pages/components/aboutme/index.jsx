/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./aboutme.module.scss";
export default function AboutMe({ children, title }) {
  return (
    <section id="aboutme-section" className={styles.aboutme}>
      <p className={styles.fp}>
        {
          "Passionné d'informatique depuis toujours, j'ai entrepris plusieurs de projets personnel pour me former. Mais depuis un an je me suis plus particulièrement intérréssé au côté web qui m'a énormément plus. Si je devais me décrire je dirais que je suis un acharné de travail et curieux."
        }
      </p>
    </section>
  );
}
