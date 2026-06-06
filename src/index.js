let poemForm = document.querySelector("#poem-form");

function generatePOem(e){
    e.preventDefault();
    new Typewriter('#poem', {
    strings: "Demain, dès l'aube, à l'heure où blanchit la campagne,",
    autoStart: true,
    cursor: "",
    delay:10,
    });
}

poemForm.addEventListener("submit",generatePOem);