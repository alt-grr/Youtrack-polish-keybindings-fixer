// ==UserScript==
// @name        Youtrack polish keybindings fixer
// @namespace   myjetbrains.com
// @description Naprawia skróty klawiszowe do wstawiania polskich znaków w polach tekstowych Youtrack.
// @version     1.0
// @include     http://*.myjetbrains.com/youtrack*
// ==/UserScript==

(function () {
	'use strict';

	var script = document.createElement("script");
	script.textContent = "$(document).unbind('keydown');";
	document.body.appendChild(script);
})();
