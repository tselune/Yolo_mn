console.log("start");
//------------------------------------------------------------------------
class MyArticle {
    constructor(ob) {
        this.id = "sNews"+ob.id;
        this.news = ob.news;
    }

    render() {
        return `
        <div class="swiper-slide" id="${this.id}">
            <p>${this.news}</p>
        </div>`;
    }
}
var len = 0;

class countryies {
  constructor(tourUrl) {
    this._tourUrl = tourUrl;
  }

  Download(targetElement) {
    fetch(`${this._tourUrl}/latest`)
      .then((result) => {
        result.json().then((jsob) => {
          // filter
          for (var make in jsob.record.schools) {
            console.log("1st make is = " + make);
            const filteredTour = jsob.record.schools[make].filter((filter) => filter.top == false);
            // console.log(filteredTour);
            // console.log(filteredTour.length);
            gebi(targetElement).insertAdjacentHTML("afterbegin",filteredTour.map((map) => {
                  const _map = new MyArticle(map);
                  return _map.render();
                })
                .reduce((p, c) => p + c, "")
            );
          }
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error catch");
      });
      
  }
}
//------------------------------------------------------------------------
const gebi = (id) => document.getElementById(id);
const countrs = new countryies(
  "https://api.jsonbin.io/v3/b/63a8496c01a72b59f238f0e8"
);
countrs.Download("articles_top");

