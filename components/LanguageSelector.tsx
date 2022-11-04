import React from "react";
import styles from '@/components/languageselector.module.css'
import { LANGUAGES } from "@/types/types"

type LanguageSelectorProps = {
  setLanguage: Function,
};
export default function LanguageSelector({ setLanguage }: LanguageSelectorProps) {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLTextAreaElement;
    setLanguage(target.value);
  };

  return (
    <div onChange={handleChange} className={styles.selector}>
      <input
        type="radio"
        value={LANGUAGES.ENGLISH}
        id="English"
        name="language"
        defaultChecked
      /> 
      <label htmlFor="English">English</label>

      <input
        type="radio"
        value={LANGUAGES.FRENCH}
        name="language"
        id="French"
      /> 
      <label htmlFor="French">Français</label>

      <input
        type="radio"
        value={LANGUAGES.SPANISH}
        name="language"
        id="Spanish"
      /> 
      <label htmlFor="Spanish">Español</label>

      <input
        type="radio"
        value={LANGUAGES.PORTUGUESE}
        name="language"
        id="Portuguese"
      /> 
      <label htmlFor="Portuguese">Português</label>
    </div>
  )
}