import styles from '../styles/Home.module.scss'
import Entry from './components/entry'
import AboutMe from './components/aboutme'
import Parcours from './components/parcours'
export default function Home() {
  return (
    <div className={styles.home}>
      <Entry/>
      <AboutMe/>
      <Parcours/>
    </div>
  )
}
