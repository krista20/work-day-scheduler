
// displays date in the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// going to tell user what hour it is
var currentHour = moment().hour();
console.log(currentHour)

var allTextAreas = $("textarea");
// console.log(allTextAreas);
var buttonSave = $("button");


// displays the color on the rows based on time
for (i = 0; i < allTextAreas.length; i++) {
    console.log(allTextAreas[i])
    var lineBlockHour = parseInt($(allTextAreas[i]).attr('id'));
    if (lineBlockHour < currentHour ) {
        $(allTextAreas[i]).addClass('past')
    } 
    if (lineBlockHour === currentHour) {
        $(allTextAreas[i]).addClass('present')
    } if (lineBlockHour > currentHour) {
        $(allTextAreas[i]).addClass('future')
    }
};

// creating varable get value

//clickable save button
$("button").on("click", function() {
    // $(this).prev() makes the on click work for multiple clicked buttons, then it gets the value
    // The prop() method sets or returns properties and values of the selected elements.
    // the user typed in text to shows in localstorage
    localStorage.setItem($(this).prop("id"), $(this).prev().val());
     console.log($(this).prop("id"));
     console.log(localStorage.getItem($(this).prop("id")));


});
    
    // for(i = 0; i<10; i++) {
    //     var key = $(this).prop("id");
    //     var value = $(this).prev().val();
       
    //      allTextAreas[i].text += '${key}: ${value}';
    //     console.log($(key[i]).html(value))
    // }

  
            // const stringObj = JSON.stringify(localStorage.getItem($(this)));
            $(this).val(localStorage.getItem(allTextAreas));
            console.log(localStorage.getItem(allTextAreas));


            // var test = localStorage.getItem("id");

            
    
    
    // create for loop to list the saved items in localstorage

    // creating variable to get value from user text input
   
    // use localstorage to display what user inputs
   
   





// getting localstorage
// when the pg loads, check localstorage to get "textarea"
// var data = localStorage.getItem(textarea);
// if textarea in local sotrage, parse data back into an array
    // JSON.parse(data);
// for each entry in array, set an textarea as string in that time block
// for(i = 0; )
// if text area is not in local storage, define array with 10 empty strings

// setting localstorage
// when a save button is clicked then gather inputs from every single time block
// create in array in order that is gathered
// with this array, set textarea value and stringify it

