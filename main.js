let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #bd62b9;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #bd62b9;">Las aplicaciones móviles y web son las herramientas con las que diseño el mañana.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
