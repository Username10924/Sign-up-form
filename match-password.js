let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#passwordConfirm");
let submitBtn = document.querySelector(".submit");
let passwordError = document.createElement("p");
passwordError.textContent = "Passwords do not match!"
passwordError.style.color = "var(--secondary)";
passwordError.style.fontSize = "small";
let passwordItem = document.querySelector(".password");
submitBtn.addEventListener("click", (e) => {
    if(password.value != passwordConfirm.value) {
        passwordItem.appendChild(passwordError);
        e.preventDefault();
    }
    else if(passwordItem.contains(passwordItem)) {
        passwordItem.removeChild(passwordError);
    }
});