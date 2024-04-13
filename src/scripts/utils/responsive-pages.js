import $ from "jquery";

class ResponsivePages {
  static HeroResize(imageId) {
    const _imgAspectRatio = $(imageId).width() / $(imageId).height();
    $(imageId).css("max-width", `${$(window).width()}px`);
    $(imageId).css("max-height", "100vh");
    if ($(imageId).height() > $(window).height()) {
      if ($(imageId).width() < 1200) {
        $(imageId).height("auto");
        $(imageId).width("100%");
      } else {
        $(imageId).height("100vh");
        $(imageId).width($(imageId).height() * _imgAspectRatio);
      }
    } else {
      $(imageId).height("auto");
    }
  }

  static BodyResize({ imageId, bodyClass }) {
    $(bodyClass).width($(imageId).width());
  }

  static ImageOverlayResize({ imageId, overlayClass }) {
    if ($(window).width() >= 1024) {
      $(overlayClass).css("max-width", $(imageId).width() * 0.7);
      const transformValue =
        -$(imageId).width() / 2 +
        $(overlayClass).width() / 2 +
        parseFloat($(overlayClass).css("padding-left"));
      $(overlayClass).css("transform", `translateX(${transformValue}px)`);
    } else {
      $(overlayClass).css("transform", "none");
      $(overlayClass).css("max-width", "none");
    }
  }

  static AdjustGridColumn(imageId) {
    const cols = Math.max(Math.floor($(imageId).width() / 360), 1);
    $("item-container:eq(0)").css(
      "grid-template-columns",
      `repeat(${cols}, 1fr)`
    );
  }
}

const addResponsiveEvent = (options, imgReference = null) => {
  for (const key in options) {
    if (imgReference) {
      $(imgReference).on("load", () => {
        ResponsivePages[key](options[key]);
      });
      $(imgReference).trigger("load", () => {
        ResponsivePages[key](options[key]);
      });
    } else {
      $(document).on("load", () => {
        ResponsivePages[key](options[key]);
      });
      $(document).trigger("load", () => {
        ResponsivePages[key](options[key]);
      });
    }

    $(window).on("resize", () => {
      ResponsivePages[key](options[key]);
    });
  }
};

export default addResponsiveEvent;
