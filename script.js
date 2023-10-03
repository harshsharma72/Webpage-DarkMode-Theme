let btn = document.querySelector("button");
let btnText = document.getElementById("btnText");
let btnIcon = document.querySelector("#btnIcon img");
let logo = document.querySelector(".logo img");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        btnText.innerHTML = "Light";
        btnIcon.src = "images/sun.png";
        logo.src = "images/logo-white.png";
    }else{
        btnText.innerHTML = "Dark";
        btnIcon.src = "images/moon.png";
        logo.src = "images/logo.png";
    }
})