//$(function(){var canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d'),color='#eeeeee';canvas.width=window.innerWidth;canvas.height=window.innerHeight;canvas.style.display='block';ctx.fillStyle=color;ctx.lineWidth=.1;ctx.strokeStyle=color;var dots={nb:500,distance:80,d_radius:150,array:[]};function Dot() {this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=-.5+Math.random();this.vy=-.5+Math.random();this.radius=Math.random();}Dot.prototype={create:function(){ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);ctx.fill();}};function makeDots(){for(i=0;i<dots.nb;i++){dots.array.push(new Dot());}}function moveDots(){for(i=0;i<dots.nb;i++){var dot=dots.array[i];if(dot.y<0||dot.y>canvas.height){dot.vx=dot.vx;dot.vy=-dot.vy;}else if(dot.x<0||dot.x>canvas.width){dot.vx=-dot.vx;dot.vy=dot.vy;}dot.x+=dot.vx;dot.y+=dot.vy;}}function animateDots(){ctx.clearRect(0, 0, canvas.width, canvas.height);for(i=0;i<dots.nb;i++){dot = dots.array[i];dot.create();}moveDots();}makeDots();setInterval(animateDots, 1000 / 30);});

$(function() {
  'use strict';

  var canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d'),
    color = '#98B232',
    count = 250,
    flakes = [];

  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  context.fillStyle = color;
  context.lineWidth = 0.1;
  context.strokeStyle = color;

  for (var i = 0; i < count; i++) {
    flakes.push(new Flake());
  }

  setInterval(animate, 1000 / 30);

  function animate () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var flake of flakes) {
      flake.draw();

      if (flake.y < 0 || flake.y > canvas.height) {
        flake.vx = flake.vx;
        flake.vy = -flake.vy;
      }
      else if (flake.x < 0 || flake.x > canvas.width) {
        flake.vx = -flake.vx;
        flake.vy = flake.vy;
      }
      flake.x += flake.vx;
      flake.y += flake.vy;
    }
  }

  function Flake () {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();
    this.radius = Math.random();

    this.draw = function draw () {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
    }
  }
});
