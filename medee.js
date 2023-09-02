// <gobi-product></gobi-product>
import html from "./utility.js";

class GobiProduct extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.
        this.innerHTML = html`
            <p>${this.getAttribute("medee")}</p>
        `
    }
    connectedCallback() {
        this.querySelector("button").addEventListener("click", () => {
            const myCart = document.querySelector("gobi-shoppingcart");
            myCart.AddToCart(this);
            myCart.color = "#0f0";
            // MyApp.SetState("lastColor", "#0f0");
            // MyApp.AddProductToShoppingCart(this);
            // alert(MyApp.GetState("lastColor"));
        })
    }
    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

    }
}

window.customElements.define('gobi-product', GobiProduct);