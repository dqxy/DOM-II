// Your code goes here
let nav = document.getElementsByClassName("nav-link");

nav[0].addEventListener("mouseover", function( event ) {   
  event.target.style.color = "blue";
  setTimeout(function() {
    event.target.style.color = "";
  }, 300);
}, false);

nav[0].addEventListener("click", function(event){event.preventDefault()});
nav[1].addEventListener("click", function(event){event.preventDefault()});
nav[2].addEventListener("click", function(event){event.preventDefault()});
nav[3].addEventListener("click", function(event){event.preventDefault()});

document.addEventListener("keydown", event => {
    document.body.style.background = "green";
  });

  document.addEventListener('wheel', function(event){document.getElementsByClassName("intro")[0].style.display='none'});

  document.addEventListener("dblclick", event => {
    document.body.style.background = "black";
  });

  window.addEventListener("resize", event => {
    document.body.style.background = "orange";
  });

  document.addEventListener("scroll", event => {
    document.body.style.background = "blue";
    document.getElementsByClassName("intro")[0].style.display='block';
  });

  document.addEventListener("keyup", event => {
    document.body.style.background = "red";
    
  });

  document.addEventListener("contextmenu", event => {
    document.body.style.background = "purple";
  });   

  nav[1].addEventListener("mouseout", event => {
    document.body.style.background = "grey";
  });

  const card = document.querySelector(".btn");
  card.addEventListener('click', (event) => {
    event.stopPropagation();
    card.style.backgroundColor="pink";
    


  })