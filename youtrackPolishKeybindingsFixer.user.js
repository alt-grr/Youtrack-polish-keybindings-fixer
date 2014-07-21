// ==UserScript==
// @name        Youtrack polish keybindings fixer
// @namespace   myjetbrains.com
// @description Naprawia skróty klawiszowe do wstawiania polskich znaków w polach tekstowych Youtrack.
// @version     1.1.1
// @grant       none
// @match       http://*.myjetbrains.com/youtrack*
// ==/UserScript==

var main = function () {
	'use strict';

	$(document).delegate('textarea, input[type="text"]', 'keydown keypress', function (event) {
		event.stopPropagation();
	});
};

var script = document.createElement("script");
script.textContent = '(' + main.toString() + ')()';
document.body.appendChild(script);
