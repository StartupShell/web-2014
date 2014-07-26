(function() {

  var id = '7qvrobfs0js5799ebugodgc5go%40group.calendar.google.com';
  var results = '4';

  var uri = 'http://www.google.com/calendar/feeds/'+
    id+'/public/full?alt=json&orderby=starttime&max-results='+
    results+'&singleevents=true&sortorder=ascending&futureevents=true';

  $.ajax({
    url: uri
  })
  .done(function(data) {

    for (var i = 0; i <data.feed.entry.length; i++) {

      var when = data.feed.entry[i].gd$when[0].startTime;

      var monthNum = when.charAt(5) + when.charAt(6);
      var day;
      if(when.charAt(8) != "0"){
        day = when.charAt(8) + when.charAt(9);
      }else{
        day = when.charAt(9);
      }
      var AmPm = "AM"
      var hours_char = when.charAt(11) + when.charAt(12);
      var minutes = when.charAt(13) + when.charAt(14) + when.charAt(15);
      var hours_int = parseInt(hours_char, 10);
      if(hours_int > 12){
        hours_int -= 12;
        AmPm = "PM";
      }
      var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      var month;
      if(monthNum == "01"){
        month = months[0];
      }else if(monthNum == "02"){
        month = months[1];
      }else if(monthNum == "03"){
        month = months[2];
      }else if(monthNum == "04"){
        month = months[3];
      }else if(monthNum == "05"){
        month = months[4];
      }else if(monthNum == "06"){
        month = months[5];
      }else if(monthNum == "07"){
        month = months[6];
      }else if(monthNum == "08"){
        month = months[7];
      }else if(monthNum == "09"){
        month = months[8];
      }else if(monthNum == "10"){
        month = months[9];
      }else if(monthNum == "11"){
        month = months[10];
      }else if(monthNum == "12"){
        month = months[11];
      }

      var dateString;
      if(when.charAt(11)){
        dateString = month + " " + day + ", " + hours_int + minutes + " " + AmPm;
      }else{
        dateString = month + " " + day;
      }

      var html ='<a href='+data.feed.entry[i].link[0].href+'>' + 
                '<h3>' +data.feed.entry[i].title.$t + '</h3>'+
                '<p><span class="startTime">'+dateString+'</span> @ '+
                '<span class="where">'+data.feed.entry[i].gd$where[0].valueString+'</span></p>'+
                '<p class="eventContent">'+data.feed.entry[i].content.$t+'<p>' + '</a>'
                
      $('.events').append(html);

    }  
  })
})();
