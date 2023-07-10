import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie eu mauris eget pellentesque. Nam vitae ornare purus</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie eu mauris eget pellentesque. Nam vitae ornare purus</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
  );
}
