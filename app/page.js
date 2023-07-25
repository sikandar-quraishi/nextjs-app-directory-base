import Link from "next/link";
import Card from "./components/card";
import styles from "./page.module.css";

export const metadata = {
  title: "NextJS with app directory",
  description: "I creating this project for the practice perpus only.",
};

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <main className={styles.container}>
      <div>This is home page, everyone can see it</div>
      <Link href={'/products'}>Go to Product list page</Link>
    </main>
  );
}
