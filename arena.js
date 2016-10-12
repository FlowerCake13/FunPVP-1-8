'use strict';
var Drone = require('drone'),
    blocks = require('blocks');

    function catchemall() {
    	this.cylinder("43:8",5,2)
    	// .up(18)
    	.up(1)
    	.cylinder(blocks.wool.red,5,1)
    	.fwd(5)
    	.box(blocks.wool.black,11,1,1)
    	.right(5)
    	.box(blocks.wool.white,1,1,1)
    	.fwd(1)
    	.left(1)
    	.box(blocks.wool.black,3,1,1)
    	.back(2)
    	.box(blocks.wool.black,3,1,1)
    	.left(4)
    	.box(blocks.wool.white,4,1,1)
    	.right(4)
    	.back(1)
    	.left(4)
    	.box(blocks.wool.white,4,1,1)
    	.right(4)
    	.box(blocks.wool.white,7,1,1)
    	.fwd(1)
    	.right(3)
    	.box(blocks.wool.white,4,1,1)
    	.right(2)
    	.back(2)
    	.left(8)
    	.box(blocks.wool.white,9,1,1)
    	.back(1)
    	.right(1)
    	.box(blocks.wool.white,7,1,1)
    	.back(1)
    	.right(1)
    	.box(blocks.wool.white,5,1,1)


    	

    }
   
 Drone.extend(catchemall);