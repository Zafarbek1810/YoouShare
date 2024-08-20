import { HeaderProvider } from "../src/Context/HeaderContext";
import "../styles/globals.css";
import Loader from "../src/Components/Common/Loader";
import "swiper/css";
import Scrolltotop from "../src/Components/Common/Scrolltotop/Scrolltotop";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DataProvider from "../src/Context/DataContext/DataaContext";
import { mockData } from "../src/Constants";

if (typeof window === undefined) {
  var window = {};
}

const lang = window?.localStorage?.getItem("siteLang") || "ru";
console.log(lang);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["ru", "en", "uz"],
    lng: lang,
    fallbackLng: "ru",
    detectionL: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    ns: ["translation"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: true },
  });

function MyApp({ Component, pageProps }) {
  const {
    i18n: { language },
    i18n,
  } = useTranslation();

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("siteLang")) || "ru";
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setLoading2(true);
    }, 1500);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, [router.pathname]);

  useEffect(() => {
    const formTitle = document.getElementsByClassName(
      "amoforms__field__name-header"
    );
  }, []);

  return (
    <DataProvider value={mockData}>
      <HeaderProvider>
        <Component {...pageProps} />
        {loading && <Loader loading2={loading2} />}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Scrolltotop />
      </HeaderProvider>
     </DataProvider>
  );
}

export default MyApp;
