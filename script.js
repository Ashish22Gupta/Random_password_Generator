var a = document.getElementById("otpg");
    function run(){ 
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var pl = 4*3;
        var a = "";
        for (var i = 1; i <= pl; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        a = a + chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("otpg").value = a;
        c=a;
        }

    function copy() {
      var ct = document.getElementById("otpg");
      ct.select();
      ct.setSelectionRange(0, 999);
      document.execCommand("copy");
    }