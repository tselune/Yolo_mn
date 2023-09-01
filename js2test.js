console.log("start");
//------------------------------------------------------------------------
class country {
  constructor(ob) {
    this.c_name = ob.c_name;
    this.rank = ob.rank;
    this.details = ob.details;
    this.id = ob.id;
  }

  render() {
    return `
    <div>
        <section class="boxof">
            <div  class="modal" id="${this.rank}">
              <div  class="${this.rank}" >
                <div class="modal-header">
                  <div class="title">${this.c_name}</div>
                  <button data-close-button class="close-button">&times;</button>
                </div>
                <div id="${this.c_name}">
                </div>
              </div>
            </div>   
            <div class="wrapper card">
                <div class="thumb">
                </div>
                <div class="infos">
                <h2 class="titles"> ${this.c_name}<span class="flag"></span></h2>
                <h3 class="date">Rank: ${this.rank}</h3>
                <p class="txt">
                    ${this.details}
                </p>
                <div>
                    <button data-modal-target="#modal" role="button" id="${this.id}" class = "details" onclick="someFunction(${this.rank})">readmore</button>
                    <h3 class="details2">ДЭЛГЭРЭНГҮЙ</h3>
                </div>
                </div>
               
            </div>
         
        </section> 
    </div>
        `;
  }
}
// ${tours.Download('modal-body' , this.id)}
//------------------------------------------------------------------------
const tours = new TopTour(
  "https://api.jsonbin.io/v3/b/63a8496c01a72b59f238f0e8"
);
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
                  const _map = new country(map);
                  return _map.render();
                })
                .reduce((p, c) => p + c, "")
            );
          }
          for (var mak in jsob.record.schools) {
            console.log("make is = " + mak);
            const filteredTour = jsob.record.schools[mak].filter((filter) => filter.top == false);
            gebi(targetElement).insertAdjacentHTML("afterbegin",filteredTour.map((map) => {
                    return tours.Download( map.c_name , map.id);
                })
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