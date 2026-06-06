function displayPoem(response){
    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay:10,
    });
}

function generatePOem(e){
    e.preventDefault();
    let searchInput=document.querySelector("#search-input");
    let apiKey="fa802d0et31047o097e3a46943abb4fe";
    let prompt=`Generate a french poem for ${searchInput.value}`;
    let context="Assume that your a poem writer and you love to write poems,generate a poem like your a romantic poem writer .just write a 4 lines of short poem.seperate each line with <br/> tag. use sign as 'Your Love' at the end , use <strong> tag and text color same as the rgb(42, 124, 165) for only the sign and dont generate any title,";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log("generating poem");
    console.log("Prompt : ",prompt);
    console.log("context : ",context);

    axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit",generatePOem);