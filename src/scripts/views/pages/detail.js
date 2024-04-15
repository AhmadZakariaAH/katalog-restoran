import UrlParser from "../../routes/url-parser";
import RestaurantAPISource from "../../data/restaurant-API-source";
import "../../components/restaurant-detail";
import "../../components/error-element";
import addResponsiveEvent from "../../utils/responsive-pages";
import $ from "jquery";

const Detail = {
  async render() {
    return `
        <restaurant-detail></restaurant-detail>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantAPISource.detailRestaurants(url.id);
    if (detail instanceof Error) {
      $("#mainContent").append("<error-element></error-element>");
      $("error-element")[0].renderError('noConnection');
    } else {
      $("restaurant-detail")[0].render(detail);
    }
    addResponsiveEvent(
      {
        HeroResize: `#detail-image${detail.pictureId}`,
        BodyResize: {
          imageId: `#detail-image${detail.pictureId}`,
          bodyClass: ".detail-body",
        },
      },
      `#detail-image${detail.pictureId}`
    );
  },
};

export default Detail;
