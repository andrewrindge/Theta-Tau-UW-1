import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta className="keywords" content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis placeat accusantium culpa itaque reprehenderit ipsum ad, dolores voluptatum unde quas totam maxime ducimus commodi numquam voluptas nulla, harum provident.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis placeat accusantium culpa itaque reprehenderit ipsum ad, dolores voluptatum unde quas totam maxime ducimus commodi numquam voluptas nulla, harum provident.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
