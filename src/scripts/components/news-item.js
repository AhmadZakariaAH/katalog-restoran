import $ from "jquery";

class NewsItem extends HTMLElement {
  render(data) {
    const date = new Date(data.date);
    const formatDate = (date) => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesdays",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const dayName = days[date.getDay()];
      const dateNum = date.getDate();
      const monthName = months[date.getMonth()];
      const yearNum = date.getFullYear();
      const formattedDate = `${dayName}, ${dateNum} ${monthName} ${yearNum}`;
      return formattedDate;
    };

    $(this).html(`<style>
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
          <img src="${data.pictureId}" alt="${data.alt}">
          <figcaption class="news-overlay-holder">
            <div class="news-desc">
            <h1>${data.title}</h1>
            <div class="news-meta">
            <time datetime="${data.date}">${formatDate(date)}</time>
            <a href="http://www.example.com" target="blank"><span style="color: lightblue">Read more</span></a>
            </div>
            </div>
            
          </figcaption>
        </figure>`);
  }
}

customElements.define("news-item", NewsItem);
