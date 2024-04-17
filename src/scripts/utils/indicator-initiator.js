import "../components/loading-indicator";
import $ from "jquery";

const IndicatorInitiator = {
  init(indicator) {
    indicator[0].render();
  },

  renderLoad(count) {
    if (count > 0) {
      $("body").find("loading-indicator h2").text("Requesting data...");
      $("body").find("loading-indicator").css("display", "flex").slideDown();
      $("body").find("loading-indicator .loading-circle").show();
    } else if (count === 0) {
      $("body").find("loading-indicator h2").text("Request complete!");
      $("body").find("loading-indicator .loading-circle").hide();
      setTimeout(() => {
        $("body").find("loading-indicator").slideUp();
      }, 3000);
    }
  },
};

export default IndicatorInitiator;
