import confetti from 'canvas-confetti';
import Typed from 'typed.js';
import swal from 'sweetalert';

new Typed('#heading', {
    // Waits 1000ms after typing "First"
    strings: ["I am brave ", "I am great", "I am responsible."],
    typeSpeed: 50,
    backSpeed: 70,
    loop: true,
    cursorChar: "_",    
  });


  const input = document.getElementById("form");
  
  input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
      swal({
        title: "Good job!",
        text: "Send... Success!",
        icon: "success",
        
      }); 
           
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

  const hour = document.getElementById("hr");
  const minute = document.getElementById("mn");
  const second = document.getElementById("dt");

  
  setInterval(()=>{
    const currentime = new Date();
    hour.innerHTML = (currentime.getHours()<10 ? "0" : "") +currentime.getHours();
    minute.innerHTML = (currentime.getMinutes()<10 ? "0": "") + currentime.getMinutes();
    second.innerHTML = (currentime.getSeconds()<10 ? "0": "") + currentime.getSeconds();
  },1000)

  // const newItem = document.getElementById('item');

  // const duniaDigi = async () => {
  //   const digiApi = await fetch("https://digimon-api.vercel.app/api/digimon");
  //   const rensponse = await digiApi.json();
  //   // let nama, urls, imgs;
  //   for (let i = 0; i < 9; i++) {
  //     const img = document.createElement("img");
      
  //     img.src = rensponse[i].img;

  //     newItem.append(img);  
     
  //   }
  //   duniaDigi();
  //   // console.log(nama);
  // };
  