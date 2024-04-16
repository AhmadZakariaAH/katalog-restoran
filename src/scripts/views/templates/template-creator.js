import CONFIG from '../../globals/config';

const restaurantTemplate = (restaurant) => `<style>
.main-container {
    margin: 16px;
    border-radius: 16px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
}

.img-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

.img-container img {
    max-width: 100%;
    height: auto;
    grid-area: 1 / 1;
    clip-path: polygon(0 0, 100% 0, 
        100% 91%, 95% 94.5%, 90% 97%, 85% 98.5%, 80% 99.5%, 75% 100%, 70% 99.5%, 65% 98.5%, 60% 97%, 55% 94.5%,
        50% 91%, 45% 87.5%, 40% 85%, 35% 83.5%, 30% 82.5%, 25% 82%, 20% 82.5%, 15% 83.5%, 10% 85%, 5% 87.5%, 0 91%);
}

.desc-container {
    padding: 16px;
    overflow: hidden;
}

.desc-container p {
    color: black;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
}

#item-name, #item-rating {
    margin: 0;
}

.city-container {
    display: flex;
    grid-area: 1 / 1;
    z-index: 10;
    margin: 0;
    align-items: flex-start;
    justify-content: flex-end;
}

.city-container h3 {
    background-color: darkred;
    color: white;
    padding: 8px 16px 8px 16px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-bottom: 2px solid white;

}

.desc-head-container {
    padding: 8px 16px 8px 16px;
    margin: 8px 0 0 0;
    background-color: darkred;
    color: white;
    border-bottom: 2px solid white;
}

.further-link {
    width: 100%;
    min-height: 48px;
    text-align: center;
    display: inline-block;
    color: darkred;
    font-size: x-large;
}
</style>
<article class="main-container">
  <div class="img-container">
    <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="Image of ${restaurant.name}">
    <div class="city-container">
        <h3>${restaurant.city}</h3>
    </div>
  </div>
  <div class="desc-head-container">
    <h3 id="item-name">${restaurant.name}</h3>
    <h4 id="item-rating"><i class="fas fa-star" aria-label="with Rating"></i> ${restaurant.rating} / 5</h4>
  </div>
  <div class="desc-container">
    <p>${restaurant.description}</p>
  </div>
  <a class="further-link" href="#/detail/${restaurant.id}">Further details &raquo;</a>
</article>
`;

const detailTemplate = (restaurant) => `<style>
.main-container {
    border-radius: 16px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
}

.img-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

.img-container img {
    max-width: 100%;
    height: auto;
    grid-area: 1 / 1;
}

.container {
    padding: 0 16px 0 16px;
    overflow: hidden;
    background-color: white;
}

.container p {
    color: black;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
}

#item-name, #item-rating, #item-address, #item-categories {
    margin: 0;
}

.overview-container {
    display: grid;
    grid-template-columns: 120px 1fr;
    padding: 8px 16px 8px 16px;
    background-color: white;
    color: black;
    column-gap: 16px;
    -webkit-column-gap: 16px;
    -moz-column-gap: 16px;
    border-color: darkred;
    border-radius: 16px;
    border-style: solid;
}

.heading-name {
    color: darkred;
}

dl {
    color: darkred;
}

dl dt {
    padding: 4px 0 4px 0;
    color: black;
    border-bottom: 1px solid #eeeeee;
}

.back-link {
    display: block;
    text-align: center;
    font-size: x-large;
    background-color: white;
    color: darkred;
}

.overview-key {
    margin: 0;
    text-align: right;
}

#favouriteButton, #favouritedButton {
  font-size: large;
  border-radius: 16px;
  border: none;
  padding: 16px;
  background-color: darkred;
  color: white;
}

.favourite-icon {
  margin-right: 16px;
}

.detail-image {
  max-height: 100vh;
  margin: 0 auto;
}

</style>
<article class="main-container">
  <section class="img-container">
    <img
      class="detail-image" 
      alt="detailed image of ${restaurant.name}"
      id="detail-image${restaurant.pictureId}" 
      src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}">
  </section>
  <section class="detail-body">
  <div class="container">
    <h2 class="heading-name">Overview</h2>
    <fieldset class="overview-container">
      <legend>Information</legend>
      <h3 class="overview-key">Name :</h3>
      <h3 id="item-name" class="overview-data">${restaurant.name}</h3>
      <h3 class="overview-key">Categories :</h3>
      <h3 id="item-categories" class="overview-data"></h3>
      <h3 class="overview-key"><i class="fas fa-star" aria-label="with Rating"></i> Rating :</h3>
      <h4 id="item-rating" class="overview-data"> ${restaurant.rating} / 5</h4>
      <h3 class="overview-key"><i class="fas fa-map-marker" aria-label="Located at"></i> Address :</h3>
      <h4 id="item-address" class="overview-data">${restaurant.address}, ${restaurant.city}</h4>
    </fieldset>
    <div id="favouriteButtonContainer">
      <button type="button" id="favouriteButton"><i class="fas fa-plus fa-large favourite-icon" aria-hidden="true"></i>Add to Favourite</button>
    </div>
  </div>
  <div class="container">
    <h2 class="heading-name">Description</h2>
    <p>${restaurant.description}</p>
  </div>
  <div class="container">
    <h2 class="heading-name">Menu</h2>
    <div class="menu-foods">
      <dl><b>Foods</b></dl>
    </div>
    <div class="menu-drinks">
      <dl><b>Drinks</b></dl>
    </div>
  </div>
  <div class="container" id="customerReview">
    <h2 class="heading-name">Customer Reviews</h2>
  </div>
  </section>
  <a class="back-link" href="#/restaurants">&laquo; Back</a>
</article>
`;

const reviewTemplate = (customerReview) => `
    <style>
        .review-container {
            padding: 8px;
            border: 2px solid darkred;
            border-radius: 16px;
            margin-bottom: 16px;
        }

        .review-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #cccccc;
        }

        .review-head h3 {
            margin: 8px;
        }

        .review-body {
            padding: 8px;
        }
    </style>
    <article class="review-container">
        <div class="review-head">
            <h3>${customerReview.name}</h3>
            <time>${customerReview.date}</time>
        </div>
        <div class="review-body">
            <p>${customerReview.review}</p>
        </div>
    </article>
`;

const searchTemplate = () => `
  <style>
    #searchForm {
        margin: 16px;
        display: flex;
        align-items: flex-end;
    }

  #searchButton {
    width: auto;
    border-bottom: 2px solid darkgrey;
    border-top: none;
    border-left: 1px solid darkgrey;
    border-right: 1px solid darkgrey;
    font-size: x-large;
    border-radius: 8px;
    margin-top: 16px;
  }

  #search-restaurants {
    margin-right: 16px;
    height: 48px;
  }
  </style>
  <form id="searchForm">
    <label for="search-restaurants"></label>
    <input name="search-restaurants" type="search-restaurants" id="search-restaurants" placeholder="Name, categories, menu">
    <button type="submit" id="searchButton"><i class="fas fa-search" aria-hidden="true"></i></button>
  </form>
`;

const addReviewTemplate = () => `
  <style>
  #addReviewForm {
    padding: 16px;
    margin-bottom: 16px;
    border: 2px solid darkred;
    border-radius: 16px;
    display: none;
  }

  #addReviewButton {
    width: 100%;
    margin-bottom: 16px;
    background-color: white;
    border: 2px darkred solid;
    color: darkred;
    font-size: x-large;
    border-radius: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  #reviewPostButton, #reviewCancelButton {
    width: 100%;
    font-size: x-large;
    border-radius: 8px;
    margin-left: 8px;
    margin-right: 8px;
  }

  .add-review-info {
    margin-bottom: 16px;
  }
  
  .review-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  <button id="addReviewButton" type="button"><i class="fas fa-plus" aria-hidden="true"></i> Add review</button>
  <form id="addReviewForm">
    <label for="addReviewName" class="add-review-info">Your name</label>
    <input name="addReviewName" id="addReviewName" class="add-review-info" type="text" required><br />
    <label for="addReviewText" class="add-review-info" >Your review</label>
    <textarea name="addReviewText" id="addReviewText" class="add-review-info" required></textarea><br />
    <div class="review-button-container">
      <button type="button" id="reviewCancelButton">Cancel</button>
      <button type="submit" id="reviewPostButton">Post</button>
    </div>
  </form>
`;

const createFavouriteButtonTemplate = () => `
<button type="button" id="favouriteButton"><i class="fas fa-plus fa-large favourite-icon"></i>Add to Favourite</button>
`;

const createFavouritedButtonTemplate = () => `
<button type="button" id="favouritedButton"><i class="fas fa-minus fa-large favourite-icon"></i>Remove from Favourite</button>
`;
export {
  restaurantTemplate,
  detailTemplate,
  reviewTemplate,
  searchTemplate,
  addReviewTemplate,
  createFavouriteButtonTemplate,
  createFavouritedButtonTemplate,
};
