// ==UserScript==
// @name         Pure Void - Twitch Black Theme
// @version      1.3
// @description  Overwrites the stylesheet of all Twitch pages to make some backgrounds black.
// @author       Jaid
// @namespace    https://github.com/Jaid
// @match        *://www.twitch.tv/*
// @match        *://twitch.tv/*
// @downloadURL  https://gist.github.com/Jaid/c3cbc464e12dd3d9cbeeb5426c8d50b1/raw/a1a7a96454da9430ad3d97757dab9811dc79d6cc/twitchPureVoid.user.js
// @updateURL    https://gist.github.com/Jaid/c3cbc464e12dd3d9cbeeb5426c8d50b1/raw/a1a7a96454da9430ad3d97757dab9811dc79d6cc/twitchPureVoid.user.js
// @icon64       https://gist.github.com/Jaid/c3cbc464e12dd3d9cbeeb5426c8d50b1/raw/a1a7a96454da9430ad3d97757dab9811dc79d6cc/icon.png
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