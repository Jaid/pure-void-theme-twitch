// ==UserScript==
// @name         Pure Void - Twitch Black Theme
// @version      2.2
// @description  Overwrites the stylesheet of all Twitch pages to make some backgrounds black.
// @author       Jaid
// @namespace    https://github.com/Jaid
// @match        *://*.twitch.tv/*
// @match        *://twitch.tv/*
// @downloadURL  https://raw.githubusercontent.com/Jaid/pure-void-theme-twitch/master/index.user.js
// @updateURL    https://raw.githubusercontent.com/Jaid/pure-void-theme-twitch/master/index.user.js
// @icon64       https://raw.githubusercontent.com/Jaid/pure-void-theme-twitch/master/icon.png
// ==/UserScript==

(function() {
  'use strict';
  const css = `
  body,
  .tw-c-background-base,
  .tw-c-background-alt,
  .chat-shell .chat-room,
  .mosaic-window-body,
  .side-nav__overlay-wrapper
  {
    background: black !important;
  }
  .tw-input,
  textarea[data-test-selector="chat-input"]
  {
    background: black !important;
  }
  .tw-tag {
    background: #0b0b0b !important;
    color: #828282 !important;
  }
  .tw-core-button--secondary {
    background: black !important;
    border: 1px solid transparent;
  }
  .tw-core-button--secondary:hover {
    border: 1px solid #333;
  }
  .tw-root--theme-dark {
    --color-background-alt: black;
    --color-background-alt-2: black;
    --color-background-base: black;
    --color-background-body: black;
  }
  `;
  const element = document.createElement("style");
  element.setAttribute("type", "text/css");
  element.appendChild(document.createTextNode(css));
  document.body.appendChild(element);
})();