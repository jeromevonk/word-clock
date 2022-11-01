import React from "react";
import styles from '@/components/languageselector.module.css'
import { LANGUAGES } from "@/types/types"

type LanguageSelectorProps = {
  setLanguage: Function,
};

export default function LanguageSelector({ setLanguage }: LanguageSelectorProps) {
  return (
    <div className={styles.selector}>
      <select className={styles.selector} onChange={(event) => { setLanguage(event.target.value) }}>
        <option value={LANGUAGES.ENGLISH}>English</option>
        <option value={LANGUAGES.FRENCH}>French</option>
      </select>
    </div>
  )
}