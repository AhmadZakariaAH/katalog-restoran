import $ from "jquery";

const DrawerInitiator = {
  init({ button, drawer, content }) {
    $(button).on("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    $(content).on("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    $(drawer).toggleClass("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    $(drawer).removeClass("open");
  },
};

export default DrawerInitiator;
