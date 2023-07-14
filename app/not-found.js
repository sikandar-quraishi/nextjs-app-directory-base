import Link from 'next/link'
import styles from './page.module.css'
export default function NotFound() {
  return (
    <div className={styles.main}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all posts</Link>
      </p>
    </div>
  )
}