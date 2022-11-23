import React from "react";
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@/pages/index.module.css'
import ButtonMode from "@/components/ButtonMode";
import LanguageSelector from "@/components/LanguageSelector";
import useCheckMobileScreen from '@/components/use-check-mobile-screen'

export default function Index() {
  const [wordMode, setWordMode] = React.useState(true);
  const [language, setLanguage] = React.useState('EN');

  // -------------------------------------------------------------------------
  // We will dinamically import clock and avoid server-side rendering
  // since clock is dependent on users' locale
  // HTML rendered on the browser won't match the one generated on the server.
  // see: https://stackoverflow.com/a/66374800/660711
  //      https://www.netlify.com/blog/fix-next-js-react-hydration-error/
  // -------------------------------------------------------------------------
  const Clock = dynamic(
    () => import('components/Clock'),
    { ssr: false }
  );

  const isMobile = useCheckMobileScreen();
  console.log(isMobile);

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

      {
        isMobile ?
          // ----------------------------------------------    
          // Show language selector and one clock
          // ----------------------------------------------    
          (
            <div>
              <header>
                <LanguageSelector setLanguage={setLanguage} />
              </header>
              <main>
                <div className={styles.stackRow}>
                  <Clock wordMode={wordMode} language={language} />
                  <ButtonMode setWordMode={setWordMode} />
                </div>
              </main>
            </div>
          )

          :

          (
            // ----------------------------------------------    
            // Show 4 clocks with different languages
            // do not show selector
            // ----------------------------------------------    
            <div className="grid-container">
              <div className="box">
                <Clock wordMode={wordMode} language={'EN'} />
              </div>
            </div>
          )
      }

      <footer className={styles.footer}>
        <a href="https://jeromevonk.github.io/" target="blank">By Jerome Vonk</a>
      </footer>
    </div>
  )
}
