function send() {
    var arr = document.getElementsByTagName('input');
    var yourname = arr[1].value;
    var yourmail = arr[2].value;
    var subject = arr[3].value;
    console.log(arr);
    //yourname
    if (yourname == "") {
        document.getElementById("name").innerHTML = "Please fill out your name";
    } else if (yourname.length > 100) {
        document.getElementById("name").innerHTML = "Your name should not exceed 100 characters.";
    } else {
        document.getElementById("name").innerHTML = "";
    }
    //yourmail
    if (yourmail == "") {
        document.getElementById("mail").innerHTML = "Please fill out your email.";
    } else if (yourmail.length > 100) {
        document.getElementById("mail").innerHTML = "Your email should not exceed 100 characters.";
    } else {
        document.getElementById("mail").innerHTML = "";
    }
    //message
    if (subject.length < 50) {
        document.getElementById("sub").innerHTML = "Subject should not shorter than 50 characters.";
    } else if (subject.length > 250) {
        document.getElementById("sub").innerHTML = "Subject should not exceed 250 characters.";
    } else {
        document.getElementById("sub").innerHTML = "";
    }

    var brr = document.getElementsByTagName('textarea');
    var message = brr[0].value;
    if (message == "") {
        document.getElementById("mess").innerHTML = "Please fill out the message.";
    } else if (message.length > 500) {
        document.getElementById("mess").innerHTML = "Message should not exceed 500 characters.";
    } else {
        document.getElementById("mess").innerHTML = "";
        return;
    }
    console.log(brr);
}