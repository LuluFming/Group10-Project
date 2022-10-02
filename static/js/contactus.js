/*
  GROUP: Lulu Fokming, Francisco Reyes, Anri Ferris
  Author: Anri Ferris
  DATE 9/30/2022
  DESCRIPTION: This is ISM6225.360F22  Assignment2
*/

/*
  Email function setting process
  1. Visit https://smtpjs.com/v3/smtp.js website
  2. Set up SMTP server
  3. Generate credentials including username, password, server, and port#
  4. Generate security token to encrypt SMTP credentials
*/

// Sending email using JavaScript with SMTPJS
function sendMail() 
    {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let finalmessage = 'Name:' + name + '<br> Email:'+ email + '<br> Message:'+ message;

      Email.send({
      SecureToken : "1ccb2ff3-daa8-4098-b854-98a777e9be60",
      To : 'ism6225group10@gmail.com',
      From : "ism6225group10@gmail.com",
      Subject: "Sending Email using javascript with SMTPJS",
      Body: finalmessage
      })
      .then(function (message) {
      alert("Mail has been sent successfully")
      });
    }

//Clearing input fields after a user submit("Send") the contact form.
function ClearInputFields()
{
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("message").value = '';
}
