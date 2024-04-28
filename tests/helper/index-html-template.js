const indexHtmlTemplate = () => `<a class="skip-link"></a>
<loading-indicator id="loadingIndicator"></loading-indicator>
<header id="header">
  <hgroup class="main-head">
    <div id="nav-brand">
      <h1>Taste Treat</h1>
    </div>
    <button id="hamburgerButton">
      <i class="fas fa-bars fa-lg" id="hamburger-icon"></i>
    </button>
  </hgroup>
  <nav class="nav-mobile">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#/restaurants">Restaurant</a></li>
      <li><a href="#/favourite">Favourite</a></li>
      <li><a href="#/others">Others</a></li>
      <li>
        <a
          href="https://www.linkedin.com/in/ahmadzakariaah/"
          target="_blank"
          >About Us</a
        >
      </li>
    </ul>
  </nav>
</header>
<main id="mainContent" tabindex="0"></main>`;

export default indexHtmlTemplate;
