document.querySelector("#generate").addEventListener("click", displayContent);
document.querySelector("#seedButton").addEventListener("click", function(event){
    validateForm(event);
});


async function displayContent() {
    let url = `https://randomuser.me/api`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results[0]);

    document.querySelector("#title").innerHTML = data.results[0].name.title + " ";
    document.querySelector("#firstName").innerHTML = data.results[0].name.first + " ";
    document.querySelector("#lastName").innerHTML = data.results[0].name.last;
    document.querySelector("#profile").src = data.results[0].picture.large;
    
}

async function seed() {
    let seed = document.querySelector("#seed").value;

    let url = `https://randomuser.me/api/1.0/?seed=${seed}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results[0]);

    document.querySelector("#title").innerHTML = data.results[0].name.title + " ";
    document.querySelector("#firstName").innerHTML = data.results[0].name.first + " ";
    document.querySelector("#lastName").innerHTML = data.results[0].name.last;
    document.querySelector("#profile").src = data.results[0].picture.large;
}

function validateForm(e) {
    let isValid = true;
    let seed = document.querySelector("#seed").value;

    if (seed.length == 0)
    {
        document.querySelector("#seedError").innerHTML = " Enter a seed value!";
        isValid = false;
    }
    if (isValid == false)
    {
        e.preventDefault();
    }
    if(isValid == true){
        seed();
    }
}