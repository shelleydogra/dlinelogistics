//@codekit-prepend "nav.js";
(function(){
    'use strict';
  
    document.addEventListener('DOMContentLoaded', function() {
      //company info
      var phone = document.getElementById('phone');
      var email = document.getElementById('email');
      var address = document.getElementById('address');
  
      address.innerHTML = "1410 Bison Ln<br>Hoffman Estates, IL 60192";
      phone.innerHTML = "(630) 788-3503";
      email.innerHTML = "info@dlinelogistics.net";
  
      // Year
      var cy = document.getElementById('current-year');
      // var ey = document.getElementById('establish-year');
  
  
      var date = new Date();
      // var dateEstablished = 1995;
      var year = date.getFullYear();
  
      // ey.innerHTML = year - dateEstablished;
      cy.innerHTML = year;
  
  
    });
  
  })();