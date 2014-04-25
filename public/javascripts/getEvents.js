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
      var date = new Date(data.feed.entry[i].gd$when[0].startTime);
      var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

      var dateString = months[date.getMonth()+1] + ' ' + date.getDay() +', ' + date.toLocaleTimeString();

      var html ='<a href='+data.feed.entry[i].link[0].href+'>' + 
                '<h3>' +data.feed.entry[i].title.$t + '</h3>'+
                '<p class="startTime">'+dateString+'</p>'+
                '<p class="where">'+data.feed.entry[i].gd$where[0].valueString+'</p>'+
                '<p class="eventContent">'+data.feed.entry[i].content.$t+'<p>' + '</a>'
                
      $('.events').append(html);

    }  
  })
})();