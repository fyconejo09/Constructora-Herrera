class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
	
		`;
  }
}

customElements.define('my-component', MyComponent);
