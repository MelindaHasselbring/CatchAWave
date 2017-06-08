// Initialize Firebase
var config = {
  apiKey: "AIzaSyCaUM9_aPbThemfQkT-JxMtuTlWB1uVAJc",
  authDomain: "catch-a-wave-fe8de.firebaseapp.com",
  databaseURL: "https://catch-a-wave-fe8de.firebaseio.com",
  projectId: "catch-a-wave-fe8de",
  storageBucket: "catch-a-wave-fe8de.appspot.com",
  messagingSenderId: "719812529097"
};

firebase.initializeApp(config);
database = firebase.database();

var name = " ";
var email = " ";

$('.submit').on('click', function(event) {
  event.preventDefault();

  name = $('#name').val().trim();
  email = $('#email').val().trim();
  var emailAlreadyExists = false;

  database.ref('/').orderByChild('email').equalTo(email).once('value', function(snapshot) {
    console.log(snapshot.val())
    emailAlreadyExists = (snapshot.val() !== null);

    if (!emailAlreadyExists) {
      database.ref().push({
        name: name,
        email: email
      });
    } else {
      alert(email + " is already taken!");
    }
  })
});