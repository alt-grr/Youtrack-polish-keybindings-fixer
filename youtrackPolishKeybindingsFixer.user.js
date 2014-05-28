// ==UserScript==
// @name        Youtrack polish keybindings fixer
// @namespace   myjetbrains.com
// @description Naprawia skróty klawiszowe do wstawiania polskich znaków w polach tekstowych Youtrack.
// @version     1.0.1
// @match       http://*.myjetbrains.com/youtrack*
// ==/UserScript==

var main = function () {
	'use strict';
	$(document).unbind('keydown');
};

var script = document.createElement("script");
script.textContent = '(' + main.toString() + ')()';
document.body.appendChild(script);
