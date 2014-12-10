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

//NEWSLETTER SIGNUP
$('#mc-form').ajaxChimp({
    url: 'http://startupshell.us8.list-manage2.com/subscribe/post?u=ab309f640b0f94f8e5fd0a2e8&amp&id=af8824bb76'
});



// calendar stuff -- multiline

// format time
function timeFormat(dateInput) {
  var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
  var date = [ months[dateInput.getMonth()], dateInput.getDate()];
  var time = [ dateInput.getHours(), dateInput.getMinutes()];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
 
  // Return the formatted string
  return date.join(" ") + " at " + time.join(":") + " " + suffix;
}

// this is to template the data for the dom
function assembleStructure(data) {
  var d = new Date(data.start);
  var startString = timeFormat(d);
  return [  '<div class="event">',
            '<a href=', data.link, '><h3>', data.title, '</h3></a>',
            '<p>',
            '<span class="events-start">',
            startString,
            '</span>',
            '</p>',
            '<p>', data.desc, '</p>',
            '</div>'].join('');
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

      .reverse()

      // append to DOM
      .forEach(function(i) {
        $('.events').append(assembleStructure(i));
      });
});




