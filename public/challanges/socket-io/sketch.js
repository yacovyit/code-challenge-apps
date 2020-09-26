let socket;
function setup() {
    createCanvas(400, 400);
    background(10);

    //socket = io.connect('http://localhost:3001');
    socket = io.connect();
    socket.on('connect', (sokcet) => {
        console.log(socket.id)
    })
    socket.on('mouse', (msg)=>{
        fill(100)
        stroke(255, 20, 100);
        ellipse(msg.x, msg.y, 30);
    })
  }
  function mouseDragged() {
      console.log(mouseX, mouseY);
      fill(100)
      stroke(255);
      ellipse(mouseX, mouseY, 30);
      const data = {
          x: mouseX,
          y: mouseY
      }  
      socket.emit('mouse', data)
  }
  
  function draw() {
  
   
  }