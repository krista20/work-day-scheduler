
// displays date in the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// going to tell user what hour it is
var currentHour = moment().hour();
console.log(currentHour)

var allTextAreas = $("textarea");
console.log(allTextAreas);

// color of teatarea
// var color = $(this).css("background-color", "color");

var textAreaTimeLoop = [
    $("#eight-am"),
    $("#nine-am"),
    $("#ten-am"),
    $("#eleven-am"),
    $("#twelve-pm"),
    $("#one-pm"),
    $("#two-pm"),
    $("#three-pm"),
    $("#four-pm"),
    $("#five-pm")
];
    var colorCoding = function() {
    for(let i=0; i < 10; i++) {
        if(textAreaTimeLoop.length < currentHour) {
            $(this)
            // $(".past").css("background-color");
  } else {

    }
    }
    console.log(textAreaTimeLoop.length < currentHour.length)

    }


colorCoding();

// $(this).addClass("past");

// var xx = new Date(Date.now());
// var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// };

// give each textarea an ID for its timeblock hour (military time) --
// for loop and an array for textarea 
// each textarea try to get idea value
// compare id to current hour less than, past, prestn, etc