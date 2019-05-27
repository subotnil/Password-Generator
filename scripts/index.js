var password = "";
function generatePassword() {
    if (event.keyCode == 13) {
        var accountName = document.getElementById("account").value;
        var passLength = "16";
        password = "";
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < passLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("footer").style.display = "none";
        document.getElementById("password-display").style.display = "block";
        //document.getElementById("copy-button").style.display = "block";
        var table = document.getElementById("password-display");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = accountName;
        cell2.innerHTML = password;
        document.getElementById("account").value = '';
    }
}

function copyToClipboard() {
    var copyText = document.getElementById("password-display");
    copyText.select();
    document.execCommand("copy");
}