//STICKY NAV
function stickyNav() {
    //vph2 = $('#mast video').height() - 80;
    vph3 = $('#mast').height() - $('.navbar').height() - 5;
    if ($(window).scrollTop() > vph3) {
        $(".navbar").addClass("chill");
    } else {
        $(".navbar").removeClass("chill");
    }
}

$(window).scroll(function() {
  stickyNav();
});
$(document).ready(function() {
  stickyNav();
});



//RESIZE VIDEO CONTAINER
function resizeDiv() {
    //vpw = $(window).width() - 105;
    vph = $('#mast video').height() - 25;
    $('#mast').css({
        'height': vph + 'px'
    });
}

$(window).load(function() {
    resizeDiv();
});
$(document).ready(function() {
    resizeDiv();
});
window.onresize = function(event) {
    resizeDiv();
}

//SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top-60
        }, 1000);
        return false;
      }
    }
  });
});


//GOOGLE EVENTS
function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

jQuery(function(){

    // Get list of upcoming iCal events formatted in JSON
    jQuery.getJSON("http://www.google.com/calendar/feeds/7qvrobfs0js5799ebugodgc5go%40group.calendar.google.com/public/full?orderby=starttime&sortorder=ascending&futureevents=true&max-results=4&alt=json", function(data){
      var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      // Utility method to pad a string on the left
      // Source: http://sajjadhossain.com/2008/10/31/javascript-string-trimming-and-padding/
      function lpad(str, pad_string, length) {
        var str = new String(str);

        while (str.length < length)
          str = pad_string + str;
        return str;
      };
      // Parse and render each event
      jQuery.each(data.feed.entry, function(i, item){
        if(i == 0) {
          jQuery("#events .event").first().hide();
        };
        var event_content = item.content.$t;
        var event_url = jQuery.trim(item.content.$t);
        var event_header = item.title.$t;
        if(event_url.length > 0) {
          event_header = "<a href='" + item.link[0].href + "' target='_blank'>" + event_header + "</a>";
        };
        // Format the date string
        var d = new Date(item.gd$when[0].startTime);
        var d_string = months[d.getMonth()] + ' ' + d.getDate();

        if(d.getHours() != 0 || d.getMinutes() != 0) {
          d_string = d_string + ', ' + tConvert(lpad(d.getHours(), '0', 2) + ':' + lpad(d.getMinutes(), '0', 2));
        };
        // Render the event
        jQuery("#events .event").last().before(
          "<div class='event'><h3>"
          + event_header
          + "</h3><p>"
          + d_string
          + " @ <a href='http://maps.google.com/maps?q="
          + item.gd$where[0].valueString
          + "' target='_blank'>"
          + item.gd$where[0].valueString
          + "</a></p><p>"
          + "<p>"
          + event_content
          + "</p>"
          + "</div>"
        );
      });
    });
  });

//NEWSLETTER SIGNUP
$('#mc-form').ajaxChimp({
    url: 'http://startupshell.us8.list-manage2.com/subscribe/post?u=ab309f640b0f94f8e5fd0a2e8&amp&id=af8824bb76'
});