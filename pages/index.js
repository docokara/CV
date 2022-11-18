import styles from "../styles/Home.module.scss";
import Entry from "./components/entry";
import AboutMe from "./components/aboutme";
import Parcours from "./components/parcours";
import Projects from "./components/projects";
export default function Home() {
  return (
    <div className={styles.home}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
        rel="stylesheet"
      />
      <Entry />
      <AboutMe />
      <Parcours />
      <Projects />
    </div>
  );
}
