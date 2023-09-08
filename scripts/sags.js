import html from './utility.js'
import "./webcompusedJ2.js";
class YoloFavNews extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.news = [];
        this.len = this.news.length ;
        this.#Render();
    }

    #Render() {
        this.innerHTML = html`
       <i id = "cnt" class="fa-solid fa-star" style="color: #FBA919; font-size: 1.3vw;"></i>
        `
    }
    showLenth(){
        this.#Render();
    }
    AddToFav(favNews) {
        this.news.push(favNews);
        showItems()
        console.log("Added to Fav News");
        console.log(this.news);
        let items = "";
        this.news.map((map) => {
            items += map.outerHTML;
        })
        this.len = this.news.length;
        console.log(items);
        localStorage.setItem("Array", JSON.stringify(items));
        localStorage.setItem("len", JSON.stringify(this.news.length));
    }
    connectedCallback() {
        this.#Render();
    }
    disconnectedCallback() {
    }

    get newsCount() {
        return this.news.length;
    }
}
window.customElements.define('yolo-favnews', YoloFavNews);

function showItems(){
  var len = JSON.parse(localStorage.getItem('len'));
  gebi("cnt").textContent  = len;
}


const gebi = (id) => document.getElementById(id);