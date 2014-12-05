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
    if ($('#mast video').length) {
      $('#mast').css({
          'height': vph + 'px'
      });
    }
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




// jQuery(function(){

//     // Get list of upcoming iCal events formatted in JSON
//     // Old URL :http://www.google.com/calendar/feeds/7qvrobfs0js5799ebugodgc5go%40group.calendar.google.com/public/full?orderby=starttime&sortorder=ascending&futureevents=true&max-results=4&alt=json
//     jQuery.getJSON("https://www.googleapis.com/calendar/v3/calendars/7qvrobfs0js5799ebugodgc5go@group.calendar.google.com/events?key=AIzaSyDd9bnLFkG8tyRgmjttiFRTT0MTtYpkZb8&orderby=starttime&sortorder=ascending&futureevents=true&max-results=4", function(data){
//       var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       // Utility method to pad a string on the left
//       // Source: http://sajjadhossain.com/2008/10/31/javascript-string-trimming-and-padding/
//       // function lpad(str, pad_string, length) {
//       //   var str = new String(str);

//       //   while (str.length < length)
//       //     str = pad_string + str;
//       //   return str;
//       // };
//       // Parse and render each event
//       jQuery.each(data.items, function(i, item){

//         // if(i == 0) {
//         //   jQuery("#events .event").first().hide();
//         // };
//         // var event_content = String(item.content.$t);
//         // var event_date = event_content.match("When:(.*)Where:");
//         // var event_url = jQuery.trim(item.content.$t);
//         // var event_header = item.title.$t;
//         // if(event_url.length > 0) {
//         //   event_header = "<a href='" + item.link[0].href + "' target='_blank'>" + event_header + "</a>";
//         // };

//         // // Format the date string
//         // var d = new Date(item.gd$when[0].startTime);
//         // var d_string = months[d.getMonth()] + ' ' + d.getDate();

//         // if(d.getHours() != 0 || d.getMinutes() != 0) {
//         //   d_string = d_string + ', ' + tConvert(lpad(d.getHours(), '0', 2) + ':' + lpad(d.getMinutes(), '0', 2));
//         // };
//         // // Render the event
//         // jQuery("#events .event").last().before(
//         //   "<div class='event'><h3>"
//         //   + event_header
//         //   + "</h3><p>"
//         //   + d_string
//         //   + " @ <a href='http://maps.google.com/maps?q="
//         //   + item.gd$where[0].valueString
//         //   + "' target='_blank'>"
//         //   + item.gd$where[0].valueString
//         //   + "</a></p><p>"
//         //   + "<p>"
//         //   + event_content
//         //   + "</p>"
//         //   + "</div>"
//         // );
//       });
//     });
//   });


//NEWSLETTER SIGNUP
$('#mc-form').ajaxChimp({
    url: 'http://startupshell.us8.list-manage2.com/subscribe/post?u=ab309f640b0f94f8e5fd0a2e8&amp&id=af8824bb76'
});








// calendar stuff -- multiline

// this is to template the data for the dom
function assembleStructure(data) {
  return [  '<a href=', data.link, '><div class="events-holder">',
            '<p class="events-title">', data.title, '</p>',
            '<p class="events-desc">', data.desc, '</p>',
            '<p class="events-timing">',
            'Starts at ',
            '<span class="events-start">',
            data.start,
            '</span>',
            'ends at',
            '<span class="events-end">',
            data.end,
            '</span> ',
            '</p>',
            '</div></a>'].join('');
}

// this is where to get the data from
var url = [ 'https://www.googleapis.com/calendar/v3/calendars', 
            '/7qvrobfs0js5799ebugodgc5go@group.calendar.google',
            '.com/events?key=AIzaSyDd9bnLFkG8tyRgmjttiFRTT0MTtYpkZb8'].join('');

// actually fetch the data
$.ajax({url: url}).done(function(data) {
  
    // begin parsing
    data
      // get last four
      .items.slice(Math.max(data.items.length - 4, 1))

      //reformat
      .map(function(i) {
        return {
          start: new Date(i.start.dateTime),
          end: new Date(i.end.dateTime),
          title: i.summary,
          desc: i.description || i.summary,
          link: i.htmlLink
        }
      })

      // get the ones that havent happend yet
      .filter(function(i) {
        return i.end.getTime() >= new Date().getTime();
      })

      // append to DOM
      .forEach(function(i) {
        $('.events').append(assembleStructure(i));
      });
});




