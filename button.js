function validate()
{
    var name = document.getElementById('name')
    var phone= document.getElementById('phone')
    var email = document.getElementById('email')
    if (name.value == '' || phone.value == '' || email == '' )
    {

        alert('No blank value allowed')
    }
    if (name.value === '' || name.value == null){

        alert('Name is required');
    }
    if(phone.value.length != 10)
    {

        alert('phone number should can only be 10 digit')
    }
    if(email.value.regexEmail){

        alert('enter a valid email');
    }
    

}


function booktrip(){
    window.location.href = "https://book.nepalairlines.com.np/ebooking/home/";
    

}


function covid(){
    window.location.href = "https://np.usembassy.gov/u-s-citizen-services/security-and-travel-information/";
}

function covidcases(){
    window.location.href = "https://covid19.mohp.gov.np/";
}
