const fetchFailed = (error) => `
  <style>
    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
  </style>
  <article class='error-container'>
    <h2>${error.message}</h2>
  </article>
`;

const pageNotFound = (error) => `
<style>
.error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
<article class='error-container'>
<h2>${error.message}</h2>
</article>
`;
export { fetchFailed, pageNotFound };
