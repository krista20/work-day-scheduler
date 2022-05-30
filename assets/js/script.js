
// displays date in the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// going to tell user what hour it is
var currentHour = moment().hour();
console.log(currentHour)

var allTextAreas = $("textarea");
// console.log(allTextAreas);

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
}

// color of teatarea
// var color = $(this).css("background-color", "color");

// var textAreaTimeLoop = [
//     $("#eight-am") = moment().hour(8),
//     $("#nine-am"),
//     $("#ten-am") = moment().hour(10),
//     $("#eleven-am") = moment().hour(11),
//     $("#twelve-pm") = moment().hour(12),
//     $("#one-pm") = moment().hour(13),
//     $("#two-pm") = moment().hour(14),
//     $("#three-pm") = moment().hour(15),
//     $("#four-pm") ,
//     $("#five-pm") ,
// ];
//     var colorCoding = function() {
//     for(let i=0; i < 10; i++) {
//         if(textAreaTimeLoop.length < currentHour) {
//             return $(".past");
//             // return($(".past").attr(moment().format("hh")));
           
//   } else {
      
// console.log('return');
//     }
//     }
//     console.log(textAreaTimeLoop.length < currentHour)

//     };


// colorCoding();

// $(this).addClass("past");

// var xx = new Date(Date.now());
// var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// };

// give each textarea an ID for its timeblock hour (military time) --
// for loop and an array for textarea 
// each textarea try to get idea value
// compare id to current hour less than, past, prestn, etc