import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
// import '@polymer/iron-icon/iron-icon.js';
// import '@vaadin/vaadin-upload/vaadin-upload.js';

// import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js?module'

class UploadFile extends PolymerElement {

  static get properties() {
    return {
      target: {
        type: String,
        value: 'https://document-extraction-dot-springmldemoproject.appspot.com/api/template/test/finance_invoice'
      },

      method: {
        type: String,
        value: 'POST'
      },

      headers: {
        type: Object,
        value: {"accept": "application/json" , "username": "test" , "Content-Type": "multipart/form-data"}
      }
    };
  }

  static get template() {
    return html`

<style>
</style>
    <vaadin-upload target="https://document-extraction-dot-springmldemoproject.appspot.com/api/template/test/finance_invoice" headers='{"accept": "application/json", "username": "test",  "Content-Type": "multipart/form-data"}'></vaadin-upload>
    `;
  }

  constructor() {
    super();
    // this.ratingValue = 0;
  }

}
customElements.define('upload-file', UploadFile);
