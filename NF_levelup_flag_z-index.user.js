// ==UserScript==
// @name         Nerd Fitness Quests Levelup flag z-index
// @namespace    https://github.com/tobbe
// @version      0.1
// @description  Fixes the z-index of the quests levelup flag
// @license      MIT
// @author       Tobbe
// @match        https://www.nerdfitness.com/level-up/my-quests/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("quests_levelup").style.zIndex = 1000;
})();