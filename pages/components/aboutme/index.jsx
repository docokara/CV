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
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        corporis, at consequuntur obcaecati eaque reprehenderit sed quod
        inventore dignissimos animi laborum exercitationem culpa. Tempore maxime
        numquam harum, inventore quae vitae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quaerat corporis, at consequuntur
        obcaecati eaque reprehenderit sed quod inventore dignissimos animi
        laborum exercitationem culpa. Tempore maxime numquam harum, inventore
        quae vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat corporis, at consequuntur obcaecati eaque reprehenderit sed quod
        inventore dignissimos animi laborum exercitationem culpa. Tempore maxime
        numquam harum, inventore quae vitae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quaerat corporis, at consequuntur
        obcaecati eaque reprehenderit sed quod inventore dignissimos animi
        laborum exercitationem culpa. Tempore maxime numquam harum, inventore
        quae vitae.
      </p>
    </section>
  );
}
