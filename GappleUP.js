'use strict'
var Drone = require('drone'),
	blocks = require('blocks'),
	inventory = require('inventory'),
	items = require('items'),
	utils = require('utils'),
	events = require('events');

var count = 1;

function gappleAF(event) {
	var person = event.player;
	if (person.inventory.itemInHand.getDisplayName() == "Golden Apple"){
		echo(person, 'Gapple UP!');
	} else {
		echo(person, 'This is not an apple, this is a '+person.inventory.itemInHand.getDisplayName());
	}
};

events.eat(gappleAF);