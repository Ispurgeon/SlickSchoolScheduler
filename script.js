// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").on("click",function(){
var divkey = $(this).parent().attr("id")
var textvalue = $(this).siblings("textarea").val()
    localStorage.setItem(divkey,textvalue)
  })

  $("#09 textarea").val(localStorage.getItem("09"))
  $("#10 textarea").val(localStorage.getItem("10"))
  $("#11 textarea").val(localStorage.getItem("11"))
  $("#12 textarea").val(localStorage.getItem("12"))
  $("#13 textarea").val(localStorage.getItem("13"))
  $("#14 textarea").val(localStorage.getItem("14"))
  $("#15 textarea").val(localStorage.getItem("15"))
  $("#16 textarea").val(localStorage.getItem("16"))

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currenthour = dayjs().format("H")
  $(".time-block").each(function(){
    var divID = $(this).attr("id")

    if(divID < currenthour){
      $(this).addClass("past")
    }
    else if(divID==currenthour){
      $(this).addClass("present")
    }
    else if (divID > currenthour){
      $(this).addClass("future")
    }
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)
})