/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/** setup()
 * Draws a face on the canvas
*/
function setup() {
    createCanvas(500, 500);
    // deep blue
    background(48, 31, 77);
    noStroke();
    // body
    fill(200);
    ellipse(220, 320, 250, 300);
    // head
    fill(150);
    ellipse(220, 130, 100, 100);
    // eyes
    fill(0);
    ellipse(200, 120, 25, 25);
    ellipse(240, 120, 25, 25);
    // nostrils
    ellipse(215, 140, 5, 5);
    ellipse(225, 140, 5, 5);
    // mouth
    stroke(99, 17, 17);
    strokeWeight(3)
    rect(205, 150, 35, 15);

}


/**
 * Description of draw()
*/
function draw() {

}