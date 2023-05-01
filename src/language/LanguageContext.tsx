"use client";
import React, { createContext } from "react";
import {
  pageContentI,
  espPageContent,
  engPageContent,
} from "@/lib/pageContent";

const LANGUAGE_OPTIONS = ["esp", "eng"];

type languageContext = {
  content: pageContentI;
  currentLanguage: string;
  handleChangeLanguage: (language: string) => void;
};
export const LanguageContext = createContext<languageContext>({
  content: espPageContent,
  currentLanguage: "esp",
  handleChangeLanguage: () => {},
});
const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState("esp");
  const [content, setContent] = React.useState(espPageContent);

  const handleChangeLanguage = (language: string) => {
    if (!LANGUAGE_OPTIONS.includes(language)) return;
    console.log("language", language);
    setCurrentLanguage(language);
    localStorage.setItem("language", language);
    setContent(language === "esp" ? espPageContent : engPageContent);
  };

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("language");
    if (localLanguage) {
      setCurrentLanguage(localLanguage);
      setContent(localLanguage === "esp" ? espPageContent : engPageContent);
      return;
    }
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        content,
        currentLanguage,
        handleChangeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
