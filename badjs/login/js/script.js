//event listenrs
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#password").addEventListener("click", displayPwd);
document.querySelector("#state").addEventListener("change", displayCounties);
document.querySelector("#username").addEventListener("change", checkUsername);
document.querySelector("#signupForm").addEventListener("submit", function(event){
    validateForm(event);
});


//functions

getStates();

//display city from web api after entering a zip
async function displayCity(){
    let zipCode = document.querySelector("#zip").value;

    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML = data.city;
    document.querySelector("#latitude").innerHTML = data.latitude;
    document.querySelector("#longitude").innerHTML = data.longitude;
}

async function getStates() {
    let url = `https://csumb.space/api/allStatesAPI.php`;
    let response = await fetch(url);
    let data = await response.json();
    let stateList = document.querySelector("#state");
    stateList.innerHTML = `<option> Select state </option>`;
    for (let i of data){
        stateList.innerHTML += `<option> ${i.usps} </option>`
    }
    
}

async function displayCounties(){
    let state = document.querySelector("#state").value;

    let url = `https://csumb.space/api/countyListAPI.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    let countyList = document.querySelector("#county");
    console.log(data);
    countyList.innerHTML = `<option> Select County </option>`;
    for (let i of data){
        countyList.innerHTML +=`<option> ${i.county} </option>`
    }
}

async function checkUsername(){
    let username = document.querySelector("#username").value;
    
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username}`;
    let response = await fetch(url);
    let data = await response.json();
    let usernameError = document.querySelector("#usernameError");
    if(data.available){
        usernameError.innerHTML = " Username available! ";
        usernameError.style.color = "green";
    }
    else{
        usernameError.innerHTML = " Username taken";
        usernameError.style.color = "red";
    }
}

function validateForm(e){
    let isValid = true;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let passwordCheck = document.querySelector("#passwordCheck").value;
    if(username.length == 0) {
        document.querySelector("#usernameError").innerHTML = "Username Required!";
        isValid = false;
    }
    if(password.length < 6) {
        document.querySelector("#passwordError").innerHTML = " Password must be at least 6 characters!";
        isValid = false;
    }
    if(passwordCheck != password){
        document.querySelector("#passwordError").innerHTML = " Passwords Must Match!";
    }

    if (!isValid) {
        e.preventDefault();
    }
}

async function displayPwd(){
    let url = `https://csumb.space/api/suggestedPassword.php?length=8`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.password);
    document.querySelector("#sPwd").innerHTML = data.password;
  }