import Link from 'next/link'
import styles from './page.module.css'
export default function NotFound() {
  return (
    <div >
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
      {"<"} <Link href="/">Go to home page</Link>
      </p>
    </div>
  )
}