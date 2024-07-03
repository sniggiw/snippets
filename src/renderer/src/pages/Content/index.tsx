import styles from './styles.module.scss'

export default function Content() {
  return (
    <main className={styles['content-page']}>
      <div className={styles.list}>list...</div>
      <div className={styles.snippet}>snippet</div>
    </main>
  )
}
