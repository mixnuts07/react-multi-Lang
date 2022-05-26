import { useState, useEffect } from "react";
import { useTransition } from "react";
import "./i18n";
import GTranslateIcon from "@mui/icons-material/GTranslate";

const App: React.FC = (): JSX.Element => {
  const [translation, i18n] = useTransition();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  const ChangeLang = (): void => {
    setLang(lang === "en" ? "ja" : "en");
  };

  return (
    <div>
      <h1>{translation(sand)}</h1>
      <h2>{translation(start)}</h2>
      <GTranslateIcon onClick={ChangeLang} />
    </div>
  );
};

export default App;
