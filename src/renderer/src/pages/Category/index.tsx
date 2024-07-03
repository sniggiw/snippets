import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { AddFour, SettingConfig } from '@icon-park/react'

export default function Category() {
  return (
    <main className={styles['category-page']}>
      <div className={styles.category}>category</div>
      <div className={styles.nav}>
        <AddFour theme="outline" size="18" fill="#333" />
        <SettingConfig theme="outline" size="18" fill="#333" />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  )
}
