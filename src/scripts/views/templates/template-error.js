const fetchFailedTemplate = () => `
  <style>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 70vh;
    }

    .error-container h2 {
      margin: 8px 0 8px 0;
    }
    
    .error-container h3 {
      margin: 0;
      text-align: center;
    }

  </style>
  <article class='error-container'>
    <h2>Unable to request data</h2>
    <h3>Check your internet connection.</h3>
  </article>
`;

const fetchFailedMainPageTemplate = () => `
  <style>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px;
    }

    .error-container h2 {
      margin: 8px 0 8px 0;
    }
    
    .error-container h3 {
      margin: 0;
      text-align: center;
    }
  </style>
  <article class='error-container'>
    <h2>Unable to request data</h2>
    <h3>Check your internet connection.</h3>
  </article>
`;

const pageNotFoundTemplate = () => `
<style>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
}

.error-container h2 {
  margin: 8px 0 8px 0;
}

.error-container h3 {
  margin: 0;
  text-align: center;
}

</style>
<article class='error-container'>
<h2>Page not found</h2>
<h3>The page you're looking for isn't available.</h3>
</article>
`;

const postFailedTemplate = () => `
  <style>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: red;
    background-color: #ffdddd;
    padding: 8px;
    border: 2px solid red;
    margin-bottom: 16px;
    border-radius: 16px;
}

.error-container h2 {
  margin: 8px 0 8px 0;
}

.error-container h3 {
  margin: 0;
  text-align: center;
}
</style>
<article class='error-container'>
<h2>Failed to Post</h2>
<h3>Your connection has been interrupted.</h3>
</article>
`;

const noFavourite = () => `
  <style>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 16px;
    }

    .error-container h2 {
      margin: 8px 0 8px 0;
      text-align: center;
    }
    
    .error-container h3 {
      margin: 0;
      text-align: center;
    }
  </style>
  <article class='error-container'>
    <h2>You have no favourite restaurant</h2>
    <h3>To add them, see the restaurant's detailed page.</h3>
  </article>
`;

export {
  fetchFailedTemplate,
  fetchFailedMainPageTemplate,
  pageNotFoundTemplate,
  postFailedTemplate,
  noFavourite,
};
