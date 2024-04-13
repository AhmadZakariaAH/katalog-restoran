import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import $ from "jquery";
import main from "./main";
import "./components/item-container";
import App from "./views/app";

const app = new App({
  button: $("#hamburgerButton"),
  drawer: $(".nav-mobile"),
  content: $("#mainContent"),
  loadingIndicator: $("#loadingIndicator"),
});

$(window).on("hashchange", () => {
  app.renderPage();
});

$(window).on("load", () => {
  app.renderPage();
});
