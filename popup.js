class PopupGeneratorWidget extends HTMLElement {
  connectedCallback() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://popup-generator.netlify.app/';
    iframe.style.width = '100%';
    iframe.style.height = '900px';
    iframe.style.border = 'none';
    this.appendChild(iframe);
  }
}
