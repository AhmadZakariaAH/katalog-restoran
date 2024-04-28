const assert = require('assert');

Feature('Search restaurant feature');

Scenario('Searching restaurant based on restaurant title', async (I) => {
  I.amOnPage('/');
  I.waitForElement('search-bar', 3);
  I.seeElement('search-bar');
  const query = 'makan';
  I.fillField('#search-restaurants', query);
  I.pressKey('Enter');
  I.waitForElement('menu-item', 10);
  I.seeElement('menu-item');
  const restaurantTitle = await I.grabTextFrom(
    locate('menu-item article .desc-head-container h3'),
  );
  const restaurantTitleLowercase = restaurantTitle.toLowerCase();
  assert(restaurantTitleLowercase.includes(query));
});

Scenario('Searching restaurant based on restaurant categories', async (I) => {
  I.amOnPage('/');
  I.waitForElement('search-bar', 3);
  I.seeElement('search-bar');
  const query = 'italia';
  I.fillField('#search-restaurants', query);
  I.pressKey('Enter');
  I.waitForElement('menu-item', 3);
  I.seeElement('menu-item');
  I.click(locate('menu-item:nth-child(1) article a'));
  I.waitForElement('#item-categories', 3);
  I.seeElement('#item-categories');
  const restaurantCategories = await I.grabTextFrom('#item-categories');
  const restaurantCategoriesLowercase = restaurantCategories.toLowerCase();
  assert(restaurantCategoriesLowercase.includes(query));
});

Scenario('Searching restaurant based on restaurant menu', async (I) => {
  I.amOnPage('/');
  I.waitForElement('search-bar', 3);
  I.seeElement('search-bar');
  const query = 'alpukat';
  I.fillField('#search-restaurants', query);
  I.pressKey('Enter');
  I.waitForElement('menu-item', 3);
  I.seeElement('menu-item');
  I.click(locate('menu-item:nth-child(1) article a'));
  I.waitForElement('dt', 3);
  I.seeElement('dt');
  const restaurantMenu = await I.grabTextFrom('dt');
  const containsQuery = restaurantMenu.some((str) => str.toLowerCase().includes(query));
  assert.strictEqual(containsQuery, true);
});
