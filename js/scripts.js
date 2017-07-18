function Contact(firstname, lastname, phoneNumber,gender,country,city,houseNumber,street)
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

function Country(name) {
  this.name = name;
  this.cities = [];
}

var india = new Country("India");
var usa = new Country("USA");
india.cities.push("Delhi");
india.cities.push("Mumbai");
india.cities.push("Calcutta");
usa.cities.push("New York");
usa.cities.push("LA");
usa.cities.push("Chicago");
var countries = [india, usa];

$(document).ready(function () {

  countries.forEach(function(country) {
    $("select#country").append("<option>" + country.name + "</option>");
  })
  $("select#country").change(function() {
    $("select#city").empty();
    countries.forEach(function(country) {
      if (country.name == $("select#country").val()) {
        country.cities.forEach(function(city) {
          $("select#city").append("<option>" + city + "</option>")
        })
      }
    })
  })

 $("form").submit(function(event)
 {
   event.preventDefault();
   debugger;
  var fname = $("input#firstname").val();
  var lname = $("input#lastname").val();
  var phone = $("input#phonenumber").val();
  var gender = $("#gender option:selected").val();
  var city= $("#city option:selected").val();
  var country= $("#country option:selected").val();
  var housenumber= $("#housenumber").val();
  var street = $("#street").val();
  checkPhoneNumberLength(phone);
  if (checkPhoneNumberLength(phone)==false)
  {
    alert("enter a valid number");
  }
  else
  {
   var newContact = new Contact(fname, lname, phone, gender, country, city, housenumber,street);

  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstname +" "+ newContact.lastname +" <br>  " + newContact.houseNumber + " "+ newContact.street +" <br> "+newContact.city+" "+newContact.country+" "+newContact.phoneNumber+" </span></li>");

  var fname = $("input#firstname").val("");
  var lname = $("input#lastname").val("");
  var phone = $("input#phonenumber").val("");
  var gender = $("#gender option:selected").val("");
  var city= $("#city option:selected").val("");
  var country= $("#country option:selected").val("");
  var housenumber= $("#housenumber").val("");
  var street = $("#street").val("");

  $("#fs").text(newContact.firstname);
  $("#ls").text(newContact.lastname);
  $("#hs").text(newContact.houseNumber);
  $("#st").text(newContact.street);
  $("#cit").text(newContact.city);
  $("#cnt").text(newContact.country);
  $("#ph").text(newContact.phoneNumber);
  $("#gen").text(newContact.gender);
}

 $("#showlist").click(function() {
   $("#contacts").show();
 })

});
});
