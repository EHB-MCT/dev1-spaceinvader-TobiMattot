"use strict";


drawline();

function drawline(){

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(50,50,300,300);
    context.fillStyle = "black";
    context.fill();

    context.beginPath();
    context.rect(175,65,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(125,65,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(225,65,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(275,115,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(75,115,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(175,165,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(75,215,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(75,265,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(275,215,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(275,265,50,50);
    context.fillStyle = "#39FF14";
    context.fill();


    context.beginPath();
    context.rect(125,215,50,50);
    context.fillStyle = "#39FF14";
    context.fill();

    context.beginPath();
    context.rect(225,215,50,50);
    context.fillStyle = "#39FF14";
    context.fill();
}