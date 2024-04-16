import 'regenerator-runtime';
import '../styles/main.scss';
import $ from 'jquery';
import './components/item-container';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: $('#hamburgerButton'),
  drawer: $('.nav-mobile'),
  content: $('#mainContent'),
  loadingIndicator: $('#loadingIndicator'),
});

$(window).on('hashchange', () => {
  app.renderPage();
});

$(window).on('load', () => {
  app.renderPage();
  swRegister();
});
