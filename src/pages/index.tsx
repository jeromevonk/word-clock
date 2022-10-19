import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/pages/index.module.css'
// import Clock from 'src/components/Clock'

export default function Index() {
  const [wordMode, setWordMode] = React.useState(true)
  console.log(wordMode);

  const Clock = dynamic(
    () => import('src/components/Clock'),
    { ssr: false }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>word-clock</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main>
        <div className={styles.stackRow}>
          <Clock />
          <div className={styles.buttonMode} onClick={() => setWordMode(prev => !prev)}>
           ..
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://jeromevonk.github.io/" target="blank">By Jerome Vonk</a>
      </footer>
    </div>
  )
}
