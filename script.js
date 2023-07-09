function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById('name').innerHTML = `Your name is: ${profile.getName()}`;
  document.getElementById('pfp').innerHTML = `Your profile picture is here: ${profile.getImageUrl()}`;
  document.getElementById('email').innerHTML =` Your email is ${profile.getEmail()}`;
}

function signOut() {
   loggedIn = false;
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  

