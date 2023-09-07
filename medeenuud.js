import "./medee.js";

class YoloNewsList extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.innerHTML = `
        <style> 
        .news-list{
            display:flex;
            flex-direction: ${ this.getAttribute("direction") }; 
            gap:2ch;
            flex-wrap: wrap;}

        .news-list > yolo-news{
            flex: 1 1;
        }
      </style>
    <div class="news-list">
        <yolo-news></yolo-news>
        <yolo-news></yolo-news>
        <yolo-news></yolo-news>
    </div>`;
    }
    connectedCallback() {

    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('yolo-newslist', YoloNewsList);