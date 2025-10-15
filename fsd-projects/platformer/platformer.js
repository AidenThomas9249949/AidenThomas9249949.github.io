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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 650, 167, 14); 
createPlatform(800, 600, 154, 18); 
createPlatform( 500, 750, 176, 15); 
createPlatform(1100, 500, 189, 12); 
createPlatform(800, 400, 198, 17); 
createPlatform(600, 300, 150, 18);


    // TODO 3 - Create Collectables
createCollectable("steve", 700, 200); 
createCollectable("diamond", 900, 500); 
createCollectable("diamond", 900, 700); 


    
    // TODO 4 - Create Cannons
  createCannon('top', 700, 1000);
  createCannon('right', 400, 890);
  createCannon('bottom', 700, 905);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
