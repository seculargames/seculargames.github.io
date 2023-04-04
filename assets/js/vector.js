---
layout: null
---

(function(window) {
    //console.log(window);
    //let paper = new Raphael("canvas", 320, 240);

    //let circle = paper.circle(50, 40, 10);

    //circle.attr("fill", "#f00");

    let draw = SVG("#canvas");

    draw.rect(100, 100).move(100, 50).fill("#f06");

    let arrow = document.getElementById("svg8");

    let group = draw.group();

    group.svg(arrow.innerHTML);
    group.scale(10);
    group.transform(150, 250);
    //draw.svg(arrow.innerHTML).size(320, 320).move(50, 120);
})(this);
