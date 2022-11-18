/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./aboutme.module.scss";
export default function AboutMe({ children, title }) {
  return (
    <section id="aboutme-section" className={styles.aboutme}>
      <img
        src="https://www.soartstudio.fr/wp-content/uploads/2019/09/Identite-1.jpg"
        alt="identity-photo"
        className={styles.photo}
      />
      <p className={styles.fp}>
        Passionnée d'informatique depuis toujours j'ai entreprit beaucoup de
        projet personnel pour me former. Mais depuis un an je me suis plus
        particulièrement intérréssé au côté web qui m'a énormément plus. Si je
        devais me décrire je dirais que je suis un acharné de travail et un
        éternel insatisfait.
      </p>
    </section>
  );
}
