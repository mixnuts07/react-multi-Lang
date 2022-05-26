import { StrictMode, createContext, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import i18n from "./i18n";

const MultiLangCotenxt = createContext();
export const MultiLang = () => useContext(MultiLangCotenxt);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MultiLang.Provider value={{ i18n }}>
      <App />
    </MultiLang.Provider>
  </StrictMode>
);
