document.getElementById('GoodResult').addEventListener('click', function() {
    window.location.href = 'good.html'; 
  });
  
  document.getElementById('BadResult').addEventListener('click', function() {
    window.location.href = 'bad.html'; 
  })

  function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("canvasContainer");
    background(220);
  }
  
  function draw() {
    //
  
    rect(100, 100, 100, 100);
  }