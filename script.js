function run() { 
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var length = document.getElementById('length').value;
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    document.getElementById("otpg").value = password;
}

function copy() {
    var ct = document.getElementById("otpg");
    ct.select();
    ct.setSelectionRange(0, 999);
    document.execCommand("copy");
    alert("Password copied successfully!");
}

function updateLength(value) {
    document.getElementById("lengthValue").textContent = value;
}
