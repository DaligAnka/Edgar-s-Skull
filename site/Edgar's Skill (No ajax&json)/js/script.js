$(function () { 
//     //Same as "document.addEventListener ("DOMcontentloaded")

// //Same as "document.querySelector("#navbarToggle").addEventListener("blur")

$("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide');
    }
});
$("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});



//AJAX 
// (function (global) {

//     // Set up a namespace for our utility
//     var ajaxUtils = {};
    
    
//     // Returns an HTTP request object
//     function getRequestObject() {
//       if (window.XMLHttpRequest) {
//         return (new XMLHttpRequest());
//       } 
      
//       else {
//         global.alert("Ajax is not supported!");
//         return(null); 
//       }
//     }
    
    
//     // Makes an Ajax GET request to 'requestUrl'
//     ajaxUtils.sendGetRequest = 
//       function(requestUrl, responseHandler, isJsonResponse) {
//         var request = getRequestObject();
//         request.onreadystatechange = 
//           function() { 
//             handleResponse(request, 
//                            responseHandler,
//                            isJsonResponse); 
//           };
//         request.open("GET", requestUrl, true);
//         request.send(null); // for POST only
//       };
    
    
//     // Only calls user provided 'responseHandler'
//     // function if response is ready
//     // and not an error
//     function handleResponse(request,
//                             responseHandler,
//                             isJsonResponse) {
//       if ((request.readyState == 4) &&
//          (request.status == 200)) {
    
//         // Default to isJsonResponse = true
//         if (isJsonResponse == undefined) {
//           isJsonResponse = true;
//         }
    
//         if (isJsonResponse) {
//           responseHandler(JSON.parse(request.responseText));
//         }
//         else {
//           responseHandler(request.responseText);
//         }
//       }
//     }
    
    
//     // Expose utility to the global object
//     global.$ajaxUtils = ajaxUtils;
    
    
//     })(window);
    
    







//Main content & gif

// (function (global) {

// var ES = {};
// var homeHtml ="Pieces/home-piece.html";

// //Convinience function for inserting innerHTML in 'select'
// var insertHtml = function (selector, html) {
// var targetElem = document.querySelector(selector);
// targetElem.innerHTML = html;
// };

// //Show loading  icon inside element identified by 'selector.
// var showLoading = function (selector) {
//     var html ="<div class='text-center'>";
//     html +="<img src='images/ghost-gif.gif'></div";
//     insertHtml(selector,html);
// };

// //On page load (before css/images)
// document.addEventListener("DOMContentLoaded", function (event) {

// //ON the first load, show home view
// showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//     homeHtml,
//     function (responseText) {
//         document.querySelector("#main-content")
//         .innerHTML = responseText;
//     },
//     false);
// });

// global.$ES = ES;

// }) (window);