const assert = require('assert');

Feature('Adding a review');

Scenario('Adding new review', async (I) => {
  I.amOnPage('/');
  I.waitForElement('menu-item', 3);
  I.seeElement('menu-item');
  I.click(locate('menu-item:nth-child(2) article a'));
  I.waitForElement('add-review', 3);
  I.seeElement('add-review');
  I.click(locate('#addReviewButton'));
  I.wait(1);
  I.click(locate('#reviewCancelButton'));
  I.click(locate('#addReviewButton'));
  const date = new Date().toISOString();
  const reviewName = `E2E - ${date}`;
  const reviewText = `Automated test at ${date}`;
  I.fillField('#addReviewName', reviewName);
  I.fillField('#addReviewText', reviewText);
  I.click(locate('#reviewPostButton'));
  I.refreshPage();
  I.waitForElement('customer-review', 3);
  I.seeElement('customer-review');
  const reviews = await I.grabTextFrom(locate('.review-head h3'));
  const containsName = reviews.some((str) => str.includes(reviewName));
  assert.strictEqual(containsName, true);
});
