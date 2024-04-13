import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import DrawerInitiator from "../utils/drawer-initiator";
import IndicatorInitiator from "../utils/indicator-initiator";

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
      IndicatorInitiator.renderLoad(1);
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      page.render().then((result) => {
        this._content.html(result);
      });
      await page.afterRender();
    } catch (error) {
      this._content.html("<error-element></error-element>");
      document.querySelector("error-element").render(error);
    } finally {
      IndicatorInitiator.renderLoad(0);
    }
  }
}

export default App;
