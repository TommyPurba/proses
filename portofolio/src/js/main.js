import confetti from 'canvas-confetti';
import Typed from 'typed.js';

new Typed('#heading', {
    // Waits 1000ms after typing "First"
    strings: ["I am brave ", "I am great", "I am responsible."],
    typeSpeed: 200,
    backDelay: 100,
    loop: true,
    cursorChar: "_",    
  });


  const input = document.getElementById("form");
  
  input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
          alert("sent... success!!");
           
          const myCanvas = document.createElement('canvas');
          document.body.appendChild(myCanvas);
           confetti.create(myCanvas, {
          resize: true,
          useWorker: true
        });
        confetti({
          particleCount: 1000,
          spread: 160,
          // any other options from the global
          // confetti function
        });
        myCanvas.remove();
        
        input.value = '';
      
      }
  })