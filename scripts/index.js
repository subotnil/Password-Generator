var password = "";

function generatePassword() {
    var length = "8";
    password = "";
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("password-display").innerHTML = password
    document.getElementById("password-display").style.display = "block";
}