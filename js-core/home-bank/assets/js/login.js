/* login actions */
const actionBtn = document.getElementById("submit-action");
actionBtn.addEventListener('click', ()=>{
    /* get input fields */
    const emailField = document.getElementById("email");
    const passField = document.getElementById("password");

    /* get value */
    const userEmail = emailField.value;
    const userPass = passField.value;

    /* check validation */
    if(userEmail == "admin@go.com" && userPass == "12345"){
        window.location.href = "dashboard.html";
        console.log("You're logedin.");
    } else{
        Swal.fire(
            'Oops...',
            'Your email and password is incorrect',
            'error'
        )
    }
});

