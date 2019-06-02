function displayLength() {
    document.getElementById("character-length").innerHTML = document.getElementById("password-length-slider").value;
}


var password = "";
function generatePassword() {
    if (event.keyCode == 13) {
        var accountName = document.getElementById("account").value;
        var passLength = document.getElementById("password-length-slider").value;
        password = "";
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < passLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("footer").style.display = "none";
        document.getElementById("password-display").style.display = "block";
        document.getElementById("delete").style.display = "block";
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

function deleteLast () {
    document.getElementById("password-display").deleteRow(0);
}

//This is test code for downloading to file
function saveToFile() {
    
    var textToSave = document.getElementById("password-display").innerHTML;
    
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = passName + ' Password.txt';
    passwordNum = passwordNum + 1;
    hiddenElement.click();
}