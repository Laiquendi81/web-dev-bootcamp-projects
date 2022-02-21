


//This function will clear the errors once we provide the correct format
function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for(let item of errors) {
        item.innerHTML = "";
    }


}


//sets error inside tag of ID
function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;


}




//perform validation and if validation fails set the value of return value false
function validateForm() {
    var returnVal = true;
    setTimeout(clearErrors(), 3000);
    var name = document.forms['myform']['fname'].value
    var email = document.forms['myform']['femail'].value

    if (name.length < 5) {
        setError('name', '**Length of name is too short**');
        returnVal = false;
    }

    if (email.length > 20) {
        setError('email', '**Email is too long');
        returnVal = false;
    }

    return returnVal;

}