import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import $ from "jquery";
import main from "./main";
import "./components/item-container";

$(() => {
  main();
});
