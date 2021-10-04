"use strict";
let laces;
let topmiddle;
let sole;
let nike;
let backtop;
let front;
let fronttop;
let backnike;
let tip;
let middlenike;


document.addEventListener("DOMContentLoaded", start);


let currentColor = "rgb(255, 227, 251)";


async function start(){
    let response = await fetch("assets/shoe-01.svg");
    let mySvgData = await response.text();
    document.querySelector("section").innerHTML = mySvgData;
    startManipulationTheSvg();
}


function startManipulationTheSvg() {
    laces = document.querySelector("#laces");
    topmiddle = document.querySelector("#top-middle");
    sole = document.querySelector("#sole");
    nike = document.querySelector("#nike");
    backtop = document.querySelector("#back-top");
    front = document.querySelector("#front");
    fronttop = document.querySelector("#front-top");
    backnike = document.querySelector("#back-nike");
    tip = document.querySelector("#tip");
    middlenike = document.querySelector("#middle-nike");







    console.log("laces", laces);
    console.log("topmiddle", topmiddle);
    console.log("startManipulationTheSvg");
    init();
}


function setColor(element, colorString) {
    console.log("setColor", element);
    console.log(element);
    console.log("colorString",colorString);
    element.style.fill = colorString;
}



function init() {
    console.log("init");
    setColor(laces, "#ffffff");
    setColor(topmiddle, "#ffffff");
    setColor(sole, "#ffffff");
    setColor(nike, "#ffffff");
    setColor(backtop, "#ffffff");
    setColor(front, "#ffffff");
    setColor(fronttop, "#ffffff");
    setColor(backnike, "#ffffff");
    setColor(tip, "#ffffff");
    setColor(middlenike, "#ffffff");









    laces.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
    })

    topmiddle.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);

    })

    sole.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);

    })

    nike.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("nike clicked")

    })

    backtop.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("back-top clicked")

    })

    front.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("front clicked")

    })

    fronttop.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("front-top clicked")

    })

    backnike.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("backnike clicked")

    })

    tip.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("tip clicked")

    })

    middlenike.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
        console.log("middle-nike clicked")

    })






    document.querySelectorAll(".color-selector").forEach(element => {
        element.addEventListener("click", event => {
            currentColor = event.target.style.backgroundColor;
            console.log("color clicked", currentColor);
        })
    })

};

