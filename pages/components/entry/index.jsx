/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./entry.module.scss";
export default function Entry({ children, title }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.curriculum}>Curriculum Vitea</h1>
        <h1 className={styles.hyphen}>-</h1>
        <h1 className={styles.name}>Razavet Quentin</h1>
      </header>
      <a className={styles.aboutme} href="#aboutme-section">
      <span>About me</span>
      </a>
    </div>
  );
}
