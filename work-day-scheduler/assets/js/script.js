
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var currentHour = moment().hour();
console.log(currentHour)

var allTextAreas = $("textarea");
console.log(allTextAreas)


// var xx = new Date(Date.now());
// var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// };

// give each textarea an ID for its timeblock hour (military time)
// for loop and an array for textarea
// each textarea try to get idea value
// compare id to current hour less than, past, prestn, etc.