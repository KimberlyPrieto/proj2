//javascript for menu/details (project 2)

$(function() {                                	   

  var info;                                        	// Declare global variable, info 
  $.ajax({
    beforeSend: function(xhr) {                   	// Before requesting data
      if (xhr.overrideMimeType) {                 	// If successfully supports
        xhr.overrideMimeType("application/json"); 	// set MIME to prevent errors
      }
    }
  });

  // function declared and called to collect json data
  function loadtable() {                   			 
    $.getJSON('data/brands.json')             
    .done( function(data){                     
      info = data;                           	  	// Store data in the variable, info
    })
  }

  loadtable(); 										// Call the function that was decared above

  
	
// when the user clicks brand and displays description page 
  $('#content').on('click', '#brand a', function(e) {  // User clicks on brand

    e.preventDefault();                                // Prevent loading diff  page
    var loc = this.id.toUpperCase();                   // Get value of id attr

    var newContent = '';                               // Build up table for descriptions by looping
    for (var i = 0; i < info[loc].length; i++) {    
      newContent += '<li><span class="extra">' + info[loc][i].extra + '</span>';	 //calling out object from arrays, extra
      newContent += info[loc][i].details + '</a></li>';								//calling out object from arrays, details
    }


     $('#sessions').html('<ul>' + newContent + '</ul>');				 // Display descriptions on page

    $('#brand a.current').removeClass('current');       			
    $(this).addClass('current');

  });



}); //end