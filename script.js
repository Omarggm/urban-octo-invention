$(document).ready(function () {
  var currentDate = dayjs().format("dddd MMMM D"); //pulls data on current date and formats it
  $("#currentDay").text(currentDate); //displays current date

  $('.time-block').each(changeBg); // runs changeBg funnction on all classes with time-block

  // Load data from local storage
  $('.description').each(function () {
    var id = $(this).parent().attr('id');
    var data = localStorage.getItem(id);
    if (data) {
      $(this).val(data);
    }
  });

  // Save data to local storage on change event
  $('.description').on('change', function () {
    var id = $(this).parent().attr('id');
    var data = $(this).val();
    localStorage.setItem(id, data);
  });

  function changeBg() {  //function to change background color of the row depending on the time of day
    var currentHour = dayjs().format("H"); //gets data for current hour
    var timeId = parseInt($(this).attr('id').split('-')[1]); // pulls data time-block via the id to get a number 
    if (currentHour < timeId) {
      $(this).addClass("future");
    } else if (currentHour == timeId) {
      $(this).addClass("present");
    } else if (currentHour > timeId) {
      $(this).addClass("past");
    }
  };
});
