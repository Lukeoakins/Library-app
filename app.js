const userEmail = document.getElementById("floatingInput")
const userPassword = document.getElementById("floatingPassword")
const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", testValues)
async function testValues(){
    let emailValue = userEmail.value 
    let passwordValue = userPassword.value
    let staffEmail = ["library.com"]
    let emailSite = emailValue.split("@")
    if (emailSite[1] === staffEmail){
        console.log("staff login")
    }
    console.log(emailValue,passwordValue)



}


