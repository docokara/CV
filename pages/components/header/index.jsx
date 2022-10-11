import Link from 'next/link'
import styles from './header.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function NavElement({ href, name }) {
    const router = useRouter()
    return (
      <Link href={href}>
        <a className={styles.navBtn}>{name}</a>
      </Link>
    )
  }

  export default function Header({ children }) {
    return (
        <header className={styles.container}>
            <NavElement href="/" name="Acceuil" />
            <NavElement href="/projet" name="Projet" />
        </header>
    )
  }