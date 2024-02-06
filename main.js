const loginbtn = document.getElementById("loginbtn")
const userName = document.getElementById("username")
const password = document.getElementById("password")

const logIn = document.getElementById("login")

const errorID = document.getElementById("errorID")

const regEX = /^[a-zA-Z0-9]{5,15}$/




logIn.addEventListener("submit", (e) => {

  e.preventDefault()

  const userVal = userName.value
  const passVal = password.value
  console.log(passVal);

  const result = regEX.test(userVal)
  console.log(result)
  const result2 = regEX.test(passVal)
  console.log(result2)

  if (result === true && result2 === true) {

    localStorage.setItem('Username', userVal)
    localStorage.setItem('Password', passVal)

    window.location.href = "home.html"
  } else {
    function rangniOzgartir() {
      errorID.textContent = "Parol yoki username xato kiritildi"
      var ranglar = ["red", "green", "blue", "orange", "purple", "yellow", "red", "white", "aqua"];
      var j = 0;
      function ozgartir() {
        errorID.style.color = ranglar[j];
        j = (j + 1) % ranglar.length;
        setTimeout(ozgartir, 100);
      }
      ozgartir();
    }
    rangniOzgartir();
  }
})



const eye = document.getElementById("eyeIcon")

eye.addEventListener("click", (e) => {
  if (password.type === "password") {
    password.type = "text"
  } else {
    password.type = "password"
  }
})