import CONFIG from '../../globals/config';

const restaurantTemplate = (restaurant) => `
<article class="main-container">
  <div class="img-container">
    <img 
      class="lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" 
      alt="Image of ${restaurant.name}"
      crossorigin="anonymous">
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

const detailTemplate = (restaurant) => `
<article class="main-container">
  <section class="detail-img-container">
    <img
      class="detail-image" 
      alt="detailed image of ${restaurant.name}"
      id="detail-image${restaurant.pictureId}" 
      src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}"
      crossorigin="anonymous">
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
  <form id="searchForm">
    <label for="search-restaurants"></label>
    <input name="search-restaurants" type="search-restaurants" id="search-restaurants" placeholder="Name, categories, menu">
    <button type="submit" id="searchButton"><i class="fas fa-search" aria-hidden="true"></i></button>
  </form>
`;

const addReviewTemplate = () => `
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

const newsItemTemplate = (data, date) => `
<style>
        .news-container img {
            grid-area: 1 / 1;
            width: 100%;
            height: auto;
        }
        .news-overlay-holder {
            display: flex;
            grid-area: 1 / 1;
            justify-content: center;
            align-items: flex-end;
            background: none;
            flex-wrap: wrap;
        }
        .news-desc {
            background-color: rgba(0,0,0,0.75);
            color: white;
            padding: 16px;
            width: 100%;
        }
        .news-meta {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .news-meta time {
            padding-bottom: 8px;
        }
        .news-meta a {
            display: inline-flex;
            min-height: 44px;
            font-size: 18px;
            align-items: center;
        }
        </style>
        <figure class="news-container">
          <img 
            src="${data.pictureId}" 
            alt="${data.alt}">
          <figcaption class="news-overlay-holder">
            <div class="news-desc">
            <h1>${data.title}</h1>
            <div class="news-meta">
            <time datetime="${data.date}">${date}</time>
            <a href="http://www.example.com" target="blank"><span style="color: lightblue">Read more</span></a>
            </div>
            </div>
            
          </figcaption>
        </figure>`;

const othersPageTemplate = () => `
        <section class="hero">
          <img
            id="hero-img"
            src="./images/heros/hero-image_1.jpg"
            alt="Hero image"
          />
          <div class="hero-overlay">
            <div class="overlay-desc">
              <q
                >Discover the best eateries near you! From cozy cafes to upscale
                dining, find your perfect culinary experience with Taste Treat.
              </q>
            </div>
          </div>
        </section>
        <section class="main-section">
        <div class="reservation">
          <h1 class="section-title">Reservation</h1>
          <form id="reservation-form">
            <fieldset>
              <legend>User Information</legend>
              <div class="reservation-grid-container">
                <div>
                  <label for="reservation-restaurant">Restaurant</label><br />
                  <select
                    name="reservation-restaurant"
                    id="reservation-restaurant"
                  ></select
                  ><br />
                  <br />
                </div>
                <div>
                  <label for="reservation-name">Name *</label><br />
                  <input
                    id="reservation-name"
                    name="reservation-name"
                    type="text"
                    required
                  /><br />
                  <br />
                </div>
              </div>
              <div class="reservation-grid-container">
                <div>
                  <label for="reservation-date">Date of reservation *</label
                  ><br />
                  <input id="reservation-date" type="date" required /><br />
                  <br />
                </div>
                <div>
                  <label for="reservation-time">Time of reservation *</label
                  ><br />
                  <div class="reservation-flex-container">
                    <div class="reservation-time-container">
                      <label
                        class="reservation-time-label"
                        for="reservation-time-from"
                        >From:</label
                      >
                      <div>
                        <input
                          id="reservation-time-from"
                          name="reservation-time-from"
                          type="time"
                          required
                        /><br />
                      </div>
                    </div>
                    <div class="reservation-time-container">
                      <label
                        class="reservation-time-label"
                        for="reservation-time-to"
                        >to:</label
                      >
                      <div>
                        <input
                          id="reservation-time-to"
                          name="reservation-time-to"
                          type="time"
                          required
                        /><br />
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div class="reservation-grid-container">
                <div>
                  <label for="reservation-guests">Number of Guests *</label
                  ><br />
                  <input
                    id="reservation-guests"
                    name="reservation-guests"
                    type="number"
                    required /><br />
                  <br />
                </div>
                <div>
                  <label for="reservation-contact">Phone number *</label><br />
                  <input
                    id="reservation-contact"
                    name="reservation-contact"
                    type="tel"
                    pattern="\\+[0-9]{11,13}"
                    title="Please enter a phone number between 11 and 13 digits"
                    required
                  /><br />
                  <br />
                </div>
              </div>
              <label for="reservation-notes">Notes</label><br />
              <textarea
                name="reservation-notes"
                id="reservation-notes"
              ></textarea
              ><br />
              <br />
            </fieldset>
            <div>
              <input type="reset" id="form-reset" />
              <button type="submit" id="form-button" />Submit</button>
            </div>
          </form>
        </div>
        <div class="news">
          <h1 class="section-title">Recent News</h1>
          <news-container></news-container>
          <h2 class="older-news">
            <a href="http://www.example.com">See older news</a>
          </h2>
        </div>
      </section>
    `;

const heroTemplate = () => `
<section class="hero">
  <picture id="heroPicture">
    <source 
      type="image/webp" 
      srcset="./images/heros/hero-image_1-small.webp"
      media="(max-width: 425px)">
    <source 
      type="image/webp" 
      srcset="./images/heros/hero-image_1-medium.webp"
      media="(max-width: 768px)">
    <source 
      type="image/webp" 
      srcset="./images/heros/hero-image_1-large.webp">
    <source 
      type="image/jpeg" 
      srcset="./images/heros/hero-image_1-small.jpg"
      media="(max-width: 425px)">
    <source 
      type="image/jpeg" 
      srcset="./images/heros/hero-image_1-medium.jpg"
      media="(max-width: 768px)">
    <img
      id="hero-img"
      src="./images/heros/hero-image_1-large.jpg"
      alt="Hero image"
    />
  </picture>
  <div class="hero-overlay">
    <div class="overlay-desc">
      <q
        >Discover the best eateries near you! From cozy cafes to upscale
        dining, find your perfect culinary experience with Taste Treat.
      </q>
    </div>
  </div>
</section>
<section class="item-catalogue">
  <h1 id="main-desc" class="section-title">Explore Restaurant</h1>
  <search-bar></search-bar>
  <item-container></item-container>
</section>
`;

export {
  restaurantTemplate,
  detailTemplate,
  reviewTemplate,
  searchTemplate,
  addReviewTemplate,
  createFavouriteButtonTemplate,
  createFavouritedButtonTemplate,
  newsItemTemplate,
  othersPageTemplate,
  heroTemplate,
};
