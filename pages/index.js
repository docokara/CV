import styles from '../styles/Home.module.scss'
import Entry from './components/entry'
import AboutMe from './components/aboutme'
import Parcours from './components/parcours'
import Projects from './components/projects'
export default function Home() {
  return (
    <div className={styles.home}>
      <Entry/>
      <AboutMe/>
      <Parcours/>
      <Projects/>
    </div>
  )
}
