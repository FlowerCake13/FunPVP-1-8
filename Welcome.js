'use strict'
var Drone = require('drone'),
	blocks = require('blocks'),
	inventory = require('inventory'),
	items = require('items'),
	utils = require('utils'),
	events = require('events');

var count = 1;

function hi(event) {
	var person = event.player;
	echo(person, 'Welcome to Fun PVP! (Made in Summer 2016)  This is a PVP mod! This mod was made by Lindsay, Noah, Takuma, Kaden, and Adian. This mod includes AWESOME Diamond Swords, Advanced Wooden Hoes, a SPECIAL bow, and lots more!')
};

events.connection(hi);