import html from "./utility.js";

class YoloNews extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.innerHTML = html`
            <p>${this.getAttribute("medee")}</p>
            <button class="favBtn" 
                style="background-color: transparent; 
                border:none; trasnparent; 
                margin-top:10%; 
                float:right;">
            <i class="fa-regular fa-star" style="color: #FBA919; font-size: 1.5vw;"></i></button>
        `
    }
    connectedCallback() {
        this.querySelector("button").addEventListener("click", () => {
            const myFav = document.querySelector("yolo-favnews");
            myFav.AddToFav(this);
            myFav.color = "#0f0";
        })
    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('yolo-news', YoloNews);