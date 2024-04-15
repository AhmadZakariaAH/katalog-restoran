import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import DrawerInitiator from "../utils/drawer-initiator";
import IndicatorInitiator from "../utils/indicator-initiator";
import { fetchCount, fetchCountDecrement, fetchCountIncrement } from "../globals/global-variables";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._loadingIndicator = loadingIndicator;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    IndicatorInitiator.init(this._loadingIndicator);
  }

  async renderPage() {
    try {
      fetchCountIncrement();
      IndicatorInitiator.renderLoad(fetchCount);
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      page.render().then((result) => {
        this._content.html(result);
      });
      await page.afterRender();
    } catch (error) {
      this._content.html("<error-element></error-element>");
      if (error.message === 'Failed to fetch') {
        document.querySelector("error-element").renderError('noConnection');
      } else if (error.message === "Cannot read properties of undefined (reading 'render')") {
        document.querySelector("error-element").renderError('pageNotFound');
      }
    } finally {
      fetchCountDecrement();
      IndicatorInitiator.renderLoad(fetchCount);
    }
  }
}

export default App;
