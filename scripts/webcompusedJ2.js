import "./medee.js";
console.log("start");
//------------------------------------------------------------------------
class MyArticle {
    constructor(ob) {
        this.id = "sNews"+ob.id;
        this.medee = ob.medee;
    }

    render() {
        return `
        <yolo-news class="swiper-slide" medee="${this.medee}" id="${this.id}"></yolo-news> `;
    }
}

class countryies {
  constructor(tourUrl) {
    this._tourUrl = tourUrl;
  }

  Download(targetElement) {
    fetch(`${this._tourUrl}/latest`)
      .then((result) => {
        result.json().then((jsob) => {
          // filter
          for (var make in jsob.record) {
            console.log(make);
            const filteredTour = jsob.record[make].filter((filter) => filter.id / 1 );
            console.log(filteredTour);

                gebi(targetElement).insertAdjacentHTML("afterbegin",filteredTour.map((map) => {
                    console.log(map.medee);
                    console.log(map.id);
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
  "https://api.jsonbin.io/v3/b/64f2e49ae4033326cbd13857"
);
countrs.Download("swiper-wrapper");


window.onload = function() {
  showItems()
};


function showItems(){
  var len = JSON.parse(localStorage.getItem('len'));
  gebi("cnt").textContent  = len;
}
