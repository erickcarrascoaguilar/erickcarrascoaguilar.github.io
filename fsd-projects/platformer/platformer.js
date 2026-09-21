$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(505, 525, 150, 50, "red");
createPlatform(235, 650, 150, 50, "blue");
createPlatform(1250, 250, 200, 50, "Green");
createPlatform(145, 400, 200, 50, "Orange");
createPlatform(535, 305, 200, 50, "Purple");
createPlatform(950, 275, 200, 50, "yellow");
    // TODO 3 - Create Collectables
createCollectable("diamond", 575, 465);
createCollectable("diamond", 300 ,575);
createCollectable("steve", 1295 ,175);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 800);
createCannon("right", 425, 2000);   
createCannon("right", 600, 2000);  
createCannon("right", 705, 900);  
createCannon("top", 675, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
