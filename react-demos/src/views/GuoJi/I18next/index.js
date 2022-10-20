import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();

  // 手动切换语言
  i18n.changeLanguage("en");
  
  return (
	<div className="App">
	  {t("title")}
	</div>
  );
}

export default App;