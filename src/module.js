/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * This is a shared client/server module.
 */

import {html} from 'lit';
import {LitElement, css} from 'lit';
import {property} from 'lit/decorators/property.js';

export const initialData = {
  name: 'SSR',
  message: 'This is a test.',
  items: ['foo', 'bar', 'qux'],
  prop: 'prop-value',
  attr: 'attr-value',
  wasUpdated: false,
};


export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      border: 1px dashed gray;
      margin: 4px;
      padding: 4px;
    }

    :host > * {
      padding: 4px;
    }

    header {
      font-weight: bold;
    }

    :host([wasUpdated]) {
      background: lightgreen;
    }
  `;

  static get properties() {
  return {
    ptop: {
      type: String
    },
    attr: {
      type: String,
      attribute: true
    },
    wasUpdated: {
      type: Boolean,
      reflect: true
    }
  };
}

//  @property({type: String})
//  prop = 'initial-prop';
//  @property({type: String})
//  attr = 'initial-attr';
//  @property({type: Boolean, reflect: true})
//  wasUpdated = false;

  render() {
    return html`
      <header>I'm a my-element!</header>
      <div><i>this.prop</i>: ${this.prop}</div>
      <div><i>this.attr</i>: ${this.attr}</div>
    `;
  }
}
customElements.define('my-element', MyElement);

export const header = (name) => html` <h1>Hello ${name}!</h1> `;

export const template = (data) =>
  html`
    ${header(data.name)}
    <p>${data.message}</p>
    <h4>repeating:</h4>
    <div>${data.items.map((item, i) => html` <p>${i}) ${item}</p> `)}</div>
    ${Array(3)
      .fill(1)
      .map(
        (_item, i) => html`
          <my-element
            ?wasUpdated=${data.wasUpdated}
            .prop=${`${data.prop}: ${i}`}
            attr=${`${data.attr}: ${i}`}
          ></my-element>
        `
      )}
  `;