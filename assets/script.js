// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

 //saves info typed for the hour
  var saveBtn = $('.saveBtn');

  function saveInfo() {
   localStorage.setItem($(this).parents().attr('id'), $(this).siblings().eq(1).val());
  }

  saveBtn.on('click', saveInfo);

  //Time tracker to keep up to date with the calendar
  var time = dayjs().format('dddd, MMMM D');

  function setHourColor() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function() {
      var hourDiv = $(this).attr('id');
      console.log(hourDiv);
      if (hourDiv == currentHour) {
        $(this).addClass('present');
      }

      else if (hourDiv > currentHour) {
        $(this).addClass('future');
      }

      else if (hourDiv < currentHour) {
        $(this).addClass('past');
      }
    })
  }

  setHourColor();

  // Shows the saved information from local storage
  function setSavedData() {
    $('.description').each(function() {
      $(this).val(localStorage.getItem($(this).parent().attr('id')));
    })
  }
  
  setSavedData();

  // Displays the current time on the header
  $('#currentDay').text(time);
});
