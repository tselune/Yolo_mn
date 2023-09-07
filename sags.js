import html from './utility.js'
import "./webcompusedJ2.js";
class YoloFavNews extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.news = [];
        this.#Render();
    }

    #Render() {
        this.innerHTML = html`
       <i  class="fa-solid fa-star" style="color: #FBA919; font-size: 1.3vw;">${this.news.length}</i>
        `
    }

    AddToFav(favNews) {
        this.news.push(favNews);
        this.#Render();
        console.log("Added to Fav News");
        console.log(this.news);
        let items = "";
        this.news.map((map) => {
            items += map.outerHTML;
        })
        console.log(items);
        localStorage.setItem("Array", JSON.stringify(items));
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