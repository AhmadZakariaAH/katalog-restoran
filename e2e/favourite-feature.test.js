const assert = require('assert');

Feature('Favourite a restaurant');

Scenario('Checking for empty favourite', (I) => {
  I.amOnPage('/#/favourite');
  I.waitForElement('.error-container', 3000);
  I.seeElement('.error-container');
  I.see('You have no favourite restaurant', '.error-container h2');
});

Scenario('Adding a restaurant to favourite and then removing it', async (I) => {
  I.amOnPage('/');
  I.waitForElement('menu-item', 3);
  I.seeElement('menu-item');
  const firstRestaurant = locate(
    'menu-item:nth-child(1) article .desc-head-container h3',
  );
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(locate('menu-item article a'));
  I.waitForElement('#favouriteButton', 3);
  I.seeElement('#favouriteButton');
  I.click('#favouriteButton');
  I.amOnPage('/#/favourite');
  I.waitForElement('menu-item', 3);
  I.seeElement('menu-item');
  const favouritedRestaurantTitle = await I.grabTextFrom(
    locate('menu-item article .desc-head-container h3'),
  );
  assert.strictEqual(firstRestaurantTitle, favouritedRestaurantTitle);
  I.click(locate('menu-item article a'));
  I.waitForElement('#favouritedButton', 3);
  I.seeElement('#favouritedButton');
  I.click('#favouritedButton');
  I.waitForElement('#favouriteButton', 3);
  I.seeElement('#favouriteButton');
  I.amOnPage('/#/favourite');
  I.waitForElement('.error-container', 3);
  I.seeElement('.error-container');
});
