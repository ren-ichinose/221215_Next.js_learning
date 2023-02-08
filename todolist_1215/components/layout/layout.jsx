import React from 'react'
import styles from "components/layout/layout.module.css"

const Layout = ({children}) => {
  return (
    <main className={styles.container}>{children}</main>
  )
}

export default Layout