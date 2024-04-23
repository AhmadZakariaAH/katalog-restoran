import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/components.scss';
import $ from 'jquery';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './components/item-container';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: $('#hamburgerButton'),
  drawer: $('.nav-mobile'),
  content: $('#mainContent'),
  loadingIndicator: $('#loadingIndicator'),
  skipLink: $('.skip-link'),
});

$(window).on('hashchange', () => {
  app.renderPage();
});

$(window).on('load', () => {
  app.renderPage();
  swRegister();
});
