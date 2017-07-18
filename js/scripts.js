function Contact(firstname, lastname, phoneNumber,gender,country,city, houseNumber, street)
{

  this.firstname=firstname;
  this.lastname=lastname;
  this.phoneNumber=phoneNumber;
  this.gender=gender;
  this.country=country;
  this.city=city;
  this.houseNumber=houseNumber;
  this.street=street;
}
//Here we are nit making a prototype function to access the phone number inputted by user because we want to check the validation of the number before the contact object is created.
function checkPhoneNumberLength(input)
{
  console.log(input.toString().length);
  if( input.toString().length<10 || input.toString().length>10 || isNaN(input) || input == "")
  {
    return false;
  }
  else
  {
    return true;
  }
}
$(document).ready(function () {
  var phoneNumber = $("input#phone").val();
  if (checkPhoneNumberLength(phoneNumber) {
    newContact = new COntact(lksjdflkjsdflkjf, phoneNumber)
  }
  else
  {
  }
});
