import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
const useLang = () => {
  const { content, handleChangeLanguage, currentLanguage } =
    useContext(LanguageContext);

  return {
    content,
    handleChangeLanguage,
    currentLanguage,
  };
};

export default useLang;
