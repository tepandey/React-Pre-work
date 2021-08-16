function form2validate() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var option = document.forms["RegForm"]["Subject"];
    
    var address = document.forms["RegForm"]["Address"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    } else { var Name = name.value}

    if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }else { var Address = address.value}

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }else { var Email = name.email}

    if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    } else {var Telephone = phone.value}

    {
        if (option.selectedIndex < 1) {
        alert("Please enter your Province.");
        what.focus();
        return false;
    }
        else
        { var Province = option.value;
        window.alert("Name: "+ Name +", Address: " + Address+ ", Email: "+EMail+", Phone Number: "+ Telephone+", Province "+ Province);
        }
    }

    return true;
}