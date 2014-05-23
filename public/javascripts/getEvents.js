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
      
      function getStandTime(time) {
        if (time> 12) {
          return time - 12
        }
        else if (time === 0) {
          return ""
        }
        else if (time < 12 && time > 0) {
          return time
        }
      }
      function convertToDateString(date) {
        var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var stand = 'AM'
        if (date.getUTCHours() > 12) stand = 'PM'
        var str = months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + getStandTime(date.getUTCHours()) + ':' + ('0' + date.getUTCMinutes()).slice(-2) + ' ' + stand
        return str
        }
        


      var when = data.feed.entry[i].gd$when[0].startTime;
      var date = Date.parse(when.split('.')[0]);      
      date = new Date(date);
      

      var dateString = convertToDateString(date);
      
      var html ='<a href='+data.feed.entry[i].link[0].href+'>' + 
                '<h3>' +data.feed.entry[i].title.$t + '</h3>'+
                '<p><span class="startTime">'+dateString+'</span> @ '+
                '<span class="where">'+data.feed.entry[i].gd$where[0].valueString+'</span></p>'+
                '<p class="eventContent">'+data.feed.entry[i].content.$t+'<p>' + '</a>'
                
      $('.events').append(html);

    }  
  })
})();
