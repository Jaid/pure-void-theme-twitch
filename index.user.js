// ==UserScript==
// @name         Pure Void - Twitch Black Theme
// @version      2.3.0
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
  .side-nav__overlay-wrapper,
  .tw-input,
  textarea[data-test-selector="chat-input"],
  .tw-core-button--secondary
  {
    background: black !important;
  }
  .tw-tag {
    background: #0b0b0b !important;
    color: #828282 !important;
  }
  .tw-core-button--secondary:hover {
    background: var(--color-background-interactable-alpha-hover) !important;
  }
  .tw-root--theme-dark {
    --color-background-alt: black;
    --color-background-alt-2: black;
    --color-background-base: black;
    --color-background-body: black;
    --color-background-input: black;
    --color-fill-brand: #3a0d7e;
    --color-background-interactable-alpha-hover: #161616;
    --brand-border: #9147ff; /* not from twitch, selfmade var */
  }
  .top-nav {
    border-bottom: var(--border-width-default) solid var(--color-border-base);
  }
  #sideNav {
    border-right: var(--border-width-default) solid var(--color-border-base) !important;
  }
  .sunlight-top-nav {
    border-bottom: var(--border-width-default) solid var(--color-border-base);
  }
  .sunlight-nav-drop-down-menu {
      border-right: var(--border-width-default) solid var(--color-border-base);
  }
  .tw-flex[data-a-target="chat-viewers"] {
    background: none !important;
  }

  /* https://www.twitch.tv/directory/esports */

  .esports-category-selector-card__background {
    background: none !important;
  }

  /* https://dashboard.twitch.tv/u/jaidchen/content/video-producer */

  .video-manager-processed-list .video-card {
    background: black;
    border: var(--border-width-default) solid var(--color-border-base) !important;
  }
  .video-manager-processed-list .video-card:hover {
    background: black;
    border: var(--border-width-default) solid var(--brand-border) !important;
  }
  .video-manager-processed-list .video-card>div>a:hover {
    background: none !important;
  }

  /* https://dashboard.twitch.tv/u/jaidchen/content/clips/channel */

  .clmgr-table__row {
    background: none !important;
  }
  .clmgr-table__row:hover {
    outline: var(--border-width-default) solid var(--brand-border) !important;
  }
  .clmgr-table__row>button:hover {
    background: none !important;
  }
  `;
  const element = document.createElement("style");
  element.setAttribute("type", "text/css");
  element.appendChild(document.createTextNode(css));
  document.body.appendChild(element);
})();