// Export all translations
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import ResetPassword from "./pages/ResetPassword";

import Subscribe from "./pages/Subscribe";
import whyzurichat from "./pages/whyzurichat";
import Cookies from "./pages/Cookies";
import ContactUs from "./pages/ContactUs";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About";

const resources = {};

const Translations = [
  // Pages
  ...Home,
  ...Login,
  ...SignUp,
  ...whyzurichat,
  ...Subscribe,
  ...Cookies,
  ...ContactUs,
  ...SignOut,
  ...ResetPassword,
  ...About,

  // Components
  ...NavBar,
  ...Footer
];

Translations.forEach(o => {
  Object.keys(o).forEach(key => {
    let langCode = String;
    let langKey = String;
    let langKeyVal = String;

    if (key !== "key") {
      langCode = key;
      langKey = o.key;
      langKeyVal = o[key];

      if (resources[langCode] === undefined) {
        resources[langCode] = { translation: {} };
      }

      resources[langCode].translation[langKey] = langKeyVal;
    }
  });
});

export default resources;
