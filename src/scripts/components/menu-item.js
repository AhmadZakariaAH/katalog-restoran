import $ from "jquery";

class MenuItem extends HTMLElement {
  render(data) {
    $(this).html(`<style>
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

        #item-name {
            margin: 0;
        }

        #item-rating {
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

        .readmore-button {
            display: none;
            justify-content: center;
            align-items: center;
            min-height: 48px;
        }

        .readmore-button button {
            width: 100%;
            margin: 8px;
            color: darkred;
            border: none;
            font-size: 18px;
            background-color: inherit;
        }
        </style>
        <article class='main-container'>
          <div class='img-container'>
            <img src='${data.pictureId}' alt='Image of ${data.name}'>
            <div class='city-container'>
                <h3>${data.city}</h3>
            </div>
          </div>
          <div class='desc-head-container'>
            <h3 id='item-name'>${data.name}</h3>
            <h4 id='item-rating'><i class='fas fa-star' aria-label='with Rating'></i> ${data.rating} / 5</h4>
          </div>
          <div class='desc-container'>
            <p>${data.description}</p>
          </div>
          <div class='readmore-button'>
            <button id='read-more'>Read more</button>
          </div>
        </article>
        `);

    $(this).find(".main-container").attr("id", `item-${data.id}`);
    $(`#item-${data.id}`).find(".desc-container").attr("id", `desc-${data.id}`);
    $(`#item-${data.id}`)
      .find(".img-container > img")
      .attr("id", `img-${data.id}`);
    $(`#item-${data.id}`)
      .find(".readmore-button")
      .attr("id", `readmore-${data.id}`);

    let isReadmoreClicked = false;
    $(`#readmore-${data.id}`).on("click", () => {
      if (isReadmoreClicked) {
        $(`#readmore-${data.id} > #read-more`).text("Read more");
        this.adjustHeight(data);
        isReadmoreClicked = false;
      } else {
        $(`#desc-${data.id}`).css("height", "auto");
        $(`#readmore-${data.id} > #read-more`).text("Read less");
        isReadmoreClicked = true;
      }
    });

    $(`#img-${data.id}`).on("load", () => this.adjustHeight(data));
  }

  adjustHeight(data) {
    if ($(`#item-${data.id}`).height() > $(window).height() * 0.8) {
      $(`#readmore-${data.id}`).css("display", "flex");
      if ($(`#readmore-${data.id} > #read-more`).text() === "Read more") {
        while ($(`#item-${data.id}`).height() > $(window).height() * 0.8) {
          $(`#desc-${data.id}`).height($(`#desc-${data.id}`).height() - 10);
          if ($(`#desc-${data.id}`).height() < 40) {
            break;
          }
        }
      }
    } else if (
      $(`#desc-${data.id} > p`).height() > $(`#desc-${data.id}`).height()
    ) {
      $(`#readmore-${data.id}`).css("display", "flex");
      while ($(`#item-${data.id}`).height() < $(window).height() * 0.8) {
        $(`#desc-${data.id}`).height($(`#desc-${data.id}`).height() + 10);
        if ($(`#desc-${data.id}`).height() > $(window).height() * 0.8) {
          break;
        }
        if (
          $(`#desc-${data.id} > p`).height() <
          $(`#desc-${data.id}`).height() + 80
        ) {
          $(`#desc-${data.id}`).height("auto");
          $(`#readmore-${data.id}`).css("display", "none");
          break;
        }
      }
    } else {
      $(`#readmore-${data.id}`).css("display", "none");
    }
  }
}

customElements.define("menu-item", MenuItem);
