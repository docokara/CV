/* eslint-disable @next/next/no-img-element */
import styles from './footer.module.scss'
export default function footer({}){

    return(
        <div className={styles.container}>
            <a href="https://github.com/docokara" className={styles.githubLogo} ><img alt="github" src="https://img.icons8.com/glyph-neue/64/000000/github.png" ></img></a>
        </div>
    )
}