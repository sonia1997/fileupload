import { PolymerElement, html } from '@polymer/polymer';
// import { PolymerElement, html } from "https://unpkg.com/@polymer/polymer@^3.0.0-pre.12/polymer-element.js?module";

// import '@polymer/iron-list/iron-list.js';
// import '@polymer/polymer/lib/elements/dom-repeat.js';

// import '@polymer/iron-icon/iron-icon.js';

// import '@polymer/iron-icons/iron-icons.js';
// import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js?module';

// import '@vaadin/vaadin-upload/vaadin-upload.js';

import '../upload-file.js'

class DemoElement extends PolymerElement {
  static get template() {
    return html`
    <style>
    /* :host {
font-family: sans-serif;
--icon-toggle-color: lightgrey;
--icon-toggle-outline-color: black;
--icon-toggle-pressed-color: yellow;

} */
    </style>
<center>

       <h3>Uploading file</h3>
       <upload-file> </upload-file>

</center>

    `;
  }
}
customElements.define('demo-element', DemoElement);
