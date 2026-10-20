const userEmail = document.getElementById("floatingInput")
const userPassword = document.getElementById("floatingPassword")
const submitButton = document.getElementById("submitButton")
const errorMess = document.getElementById("errorpopup")

submitButton.addEventListener("click", testValues)
async function testValues(){
    let emailValue = userEmail.value 
    let passwordValue = userPassword.value
    let staffEmail = "library.com"
    let emailSite = emailValue.split("@")
    let staffLogin = false
    if (emailSite[1] === staffEmail){
        staffLogin = true
    } 
    if (passwordValue === ""){
        errorMessage()
    } else{
        if (passwordValue.length<6){
            errorMessage()
        } else{
            if(passwordValue.includes(' ')){
                errorMessage()
            }else{
                if (staffLogin === true){
                    window.location.href = "staff-homepage.html"
                } else{
                    window.location.href = "user-hompage-html.html";
                }
                
            }
            
        }
        
    }
}



function errorMessage(){
    errorMess.style.visibility = "visible"
}


