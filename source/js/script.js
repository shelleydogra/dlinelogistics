//@codekit-prepend "nav.js";
(function(){
    'use strict';
  
    document.addEventListener('DOMContentLoaded', function() {
      //company info
      // var phoneIn = document.getElementById('phone');
      // var emailIn = document.getElementById('email');
      // var addressIn = document.getElementById('address');
  
      // addressIn.innerHTML = "1410 Bison Ln<br>Hoffman Estates, IL 60192";
      // document.getElementById('phone').innerHTML = "(630) 788-3503";
      // emailIn.innerHTML = "info@dlinelogistics.net";

      var cy = document.getElementById('current-year');
      var date = new Date();
      var year = date.getFullYear();

      cy.innerHTML = year;
    });
  
  })();