
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
    localStorage.getItem($(this).prop("id"));
    // create for loop to 
    // creating variable to get value from user text input
   
    // use localstorage to display what user inputs
   
   

});



// $("button").click(function() {
//     // for (i = 0; i < allTextAreas.length; i++) {
//     const value = $(allTextAreas[i])
//     // const key = $(allTextAreas[i]).val('class');
//     localStorage.setItem("text", $(".description").attr);
//     $(allTextAreas).html();
//     localStorage.getItem("text");
//     console.log(localStorage)
    

//     console.log(value);
//     // console.log(key);
//     // }

// console.log($("button"))


// });
    // console.log(localStorage(buttonSave))
// localStorage.getItem("text");

