'use strict'
var Drone = require('drone'),
	blocks = require('blocks'),
	inventory = require('inventory'),
	items = require('items'),
	utils = require('utils'),
	events = require('events');

var lightning = require('lightning');


var count = 0;

var damageStart;
var damageEnd;

var person;



function adele(event) {
	person = event.player;
	var loc = person.location;
	var world = person.world;
	if (person.inventory.itemInHand.getDisplayName() == "Wooden Hoe"){
		//new Drone(loc).fwd(5).firework();
		// echo(person,"test");
		world.makeLightningBolt( loc );
		// damageEnd = utils.stat(person,"damagedealt");
		// echo(person, 'Damage in the game so far: '+damageEnd+"previously: "+damageStart);
		// damageStart = damageEnd;
	}
};

events.playerArmSwing(adele);
