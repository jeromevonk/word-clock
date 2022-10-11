import Head from 'next/head'
import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to word-clock
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://jeromevonk.github.io/" target="blank">Feito por Jerome Vonk</a>
      </footer>
    </div>
  )
}
