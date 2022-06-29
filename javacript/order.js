function tour() {
    var order = document.getElementById("cacmua").value;
    if (order == "") {
        document.getElementById("loicacmua").innerHTML = "Please select our product.";
    } else {
        document.getElementById("loicacmua").innerHTML = "";
    }

    var username = document.getElementById("username").value;
    //username
    if (username == "") {
        document.getElementById("loiname").innerHTML = "Please fill out your name.";
    } else if (username.length > 100) {
        document.getElementById("loiname").innerHTML = "Your name should not exceed 100 characters.";
    } else {
        document.getElementById("loiname").innerHTML = "";
    }
    console.log(username);
    //sdtkhachhang
    var phone = document.getElementById("phone").value;
    if (phone == "") {
        document.getElementById("loiphone").innerHTML = "Please do not leave the phone number blank.";
    } else if (phone.length > 13) {
        document.getElementById("loiphone").innerHTML = "Phone number cannot exceed 10 numbers.";
    } else {
        document.getElementById("loiphone").innerHTML = "";
    }
    //emailkhachhang
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("loiemail").innerHTML = "Please enter your email address.";
    } else {
        document.getElementById("loiemail").innerHTML = "";
    }
    //sokhachhangthamgia
    var number = document.getElementById("number").value;
    if (number == "") {
        document.getElementById("loinumber").innerHTML = "Please enter the number of participants.";
    } else if (number > 10) {
        document.getElementById("loinumber").innerHTML = "No more than 10 participants."
    } else {
        document.getElementById("loinumber").innerHTML = "";
    }
    //ngayxuatphat
    var date = document.getElementById("date").value;
    var x = new Date();
    var day = x.getDate();
    var month = x.getMonth() + 1;
    var year = x.getFullYear();
    var today = day + "/" + month + "/" + year;
    if (date == "") {
        document.getElementById("loidate").innerHTML = "Please fill in the departure date.";
    } else {
        document.getElementById("loidate").innerHTML = "";
    }

    //thongtinkhachhang
    var deliver = document.getElementsByTagName("textarea");
    var address = deliver[0].value;
    if (address == "") {
        document.getElementById("loiaddress").innerHTML = "Please fill out the address.";
    } else if (address.length > 500) {
        document.getElementById("loiaddress").innerHTML = "Address should not exceed 500 characters.";
    } else {
        document.getElementById("loiaddress").innerHTML = "";
    }
}