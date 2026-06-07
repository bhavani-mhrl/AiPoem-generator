function displayPoem(response){
    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay:10,
    });
}

function generatePoem(e){
    e.preventDefault();
    let searchInput=document.querySelector("#search-input");
    let poemContainer = document.querySelector("#poem");
    poemContainer.classList.remove("hidden");
    poemContainer.innerHTML=`<div class="generating">⌛Generating Motivation your looking ${searchInput.value}</div>`;

    let apiKey="fa802d0et31047o097e3a46943abb4fe";
    let prompt=`Generate a motivation, now i am having ${searchInput.value} mood`;
    let context="Assume that your a motivator  and you love to Motivate people,generate a motivation that gives confidence , hope and belief.just write a 2 lines of short motivation.seperate each line with <br/> tag. use the sign as 'Your Love' at the end for every poem, use <strong> tag and text color same as the rgb(42, 124, 165) for only the sign and dont generate any title,";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-form");
poemForm.addEventListener("submit",generatePoem);