'use strict'
var Drone = require('drone'),
	blocks = require('blocks'),
	inventory = require('inventory'),
	items = require('items'),
	utils = require('utils'),
	events = require('events');

var count = 1;

function death(event) {
	var person = event.player;
	echo(person, 'Oh No... You died... RIP!')
};

events.playerDeath(death);