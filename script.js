// LAST DECREE - CLASSIFIED SYSTEM
// Core Interface Script

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader");
    const main = document.querySelector(".main");

    // Chargement système
    setTimeout(() => {
        if (loader) {
            loader.classList.add("hide");
        }

        if (main) {
            main.classList.add("show");
        }

    }, 3500);


    // Effet terminal
    const terminalText = document.querySelector(".terminal-text");

    const messages = [
        "> Initialisation du protocole...",
        "> Connexion au réseau LAST DECREE...",
        "> Vérification des autorisations...",
        "> Cryptage des données...",
        "> Accès accordé."
    ];

    let index = 0;

    function writeTerminal(){

        if(index < messages.length){

            let line = document.createElement("p");
            line.textContent = messages[index];

            if(terminalText){
                terminalText.appendChild(line);
            }

            index++;

            setTimeout(writeTerminal,800);

        }

    }

    writeTerminal();



    // Glitch aléatoire
    const glitch = document.querySelectorAll(".glitch");

    setInterval(()=>{

        glitch.forEach(element=>{

            if(Math.random() > 0.7){

                element.style.transform =
                `translate(${Math.random()*5}px,
                ${Math.random()*5}px)`;

                setTimeout(()=>{
                    element.style.transform="translate(0)";
                },100);

            }

        });

    },500);



    // Système de connexion
    const login = document.querySelector("#loginBtn");
    const password = document.querySelector("#password");
    const result = document.querySelector("#result");


    if(login){

        login.addEventListener("click",()=>{

            if(password.value === "DECREE"){

                result.innerHTML =
                "ACCESS GRANTED // BIENVENUE AGENT";

                result.style.color="#00ff99";

            }else{

                result.innerHTML =
                "ACCESS DENIED // CODE INVALIDE";

                result.style.color="red";

            }

        });

    }



    // Horloge système
    const clock = document.querySelector(".clock");

    function updateClock(){

        if(clock){

            clock.textContent =
            new Date().toLocaleTimeString();

        }

    }

    setInterval(updateClock,1000);
    updateClock();


});
