$(document).ready(function() {

    $('#navBar a').click(function(e) {
        e.preventDefault()
        $(this).tab('show');
    });
    $('#picLink').click(function(e) {
        e.preventDefault()
        $(this).tab('show');
    });
    $('#aboutUsTab a').click(function(e) {
        e.preventDefault()
        $(this).tab('show');
    });
    $('#brothersTab a').click(function(e) {
        e.preventDefault()
        $(this).tab('show');
    });
    $("#tab1").tab('show');
    $('.carousel').carousel();
    $("#tab2").tab('show');
    $("#tab3").tab('show');
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('#calendar1').fullCalendar('render');
        $('#calendar2').fullCalendar('render');
    });
    $('#sophmoresCarousel').carousel();
    $('#juniorsCarousel').carousel();
    $('#seniorCarousel').carousel();

    var previous;

    $('#calendar1').fullCalendar({
        eventClick: function(calEvent, jsEvent, view) {
            $(this).css('border-color', 'white');
            $("#eventDetails").text(calEvent.custom);

            if (previous) {
                previous.css('border-color', '#000000');
            }
            previous = $(this);
        },
        header: {
            title: "seta",
            center: 'September Rush',
            right: "",
        },

        defaultDate: '2016-09-01',
        selectable: false,
        selectHelper: false,

        events: [
            {
                title: 'Dorm Storming',
                start: '2016-09-12T19:00:00',
                end: '2016-09-12T22:00:00',
                className: 'event',
                custom: "Fraternities storm the dorms to inform freshman of rush activities. Be sure to leave your door open!"
            }, {
                title: 'Informals',
                start: '2016-09-13T17:00:00',
                end: '2016-09-13T22:00:00',
                className: "event",
                custom: "Come by our house and get a tour during informals!"
            }, {
                title: 'Informals',
                start: '2016-09-14T17:00:00',
                end: '2016-09-14T22:00:00',
                className: "event",
                custom: "Come by our house and get a tour during informals!"
            }, {
                title: 'First Formal Signups Open',
                start: '2016-09-15',
                className: "event",
                custom: "First Formals. Be sure to sign up on banner web.",
            }, {
                title: 'Speed Lawn Cookout',
                start: '2016-09-16T18:00:00',
                end: '2016-09-16T20:00:00',
                custom: "Come down to speed lawn for some free food and to meet us.",
                className: "event"
            }, {
                title: 'Jello Wrestling with Pig Roast',
                start: '2016-09-17T19:30:00',
                end: '2016-09-17T22:00:00',
                custom: "Join the Brothers of Sigma Nu for our annual Jello wrestling event.",
                className: "event"
            }, {
                title: 'Monday Night Football / Euchre Tournament',
                start: '2016-09-19T20:00:00',
                end: '2016-09-19T22:00:00',
                custom: "Join us in our theater room at the house for some football, food, and a euchre tournament.",
                className: "event"
            }, {
                title: 'South Park Night',
                start: '2016-09-21T21:30:00',
                end: '2016-09-21T23:00:00',
                custom: "Watch this weeks south park in our theater room with some free food. Good time to hang out with us.",
                className: "event"
            }, {
                title: 'Bonfire',
                start: '2016-09-22T19:00:00',
                end: '2016-09-22T21:00:00',
                custom: "Come on out to our house and hang out at our bonfire fit.",
                className: "event"
            }, {
                title: 'First Formals',
                start: '2016-09-23',
                custom: "First Formals. Be sure to sign up on banner web.",
                className: "event"
            }, {
                title: 'First Formals',
                start: '2016-09-25',
                custom: "First Formals. Be sure to sign up on banner web.",
                className: "event"
            }, {
                title: 'Monday Night Football',
                start: '2016-09-26T20:00:00',
                end: '2016-09-26T22:00:00',
                custom: "Join us in our theater room at the house for some football and more free food.",
                className: "event"
            }, {
                title: 'South Park Night',
                start: '2016-09-28T21:30:00',
                end: '2016-09-28T23:00:00',
                custom: "Watch this weeks south park in our theater room with some free food. Good time to hang out with us.",
                className: "event"
            }, {
                title: 'Buffalo Wild Wings',
                start: '2016-09-29T19:30:00',
                end: '2016-09-29T21:00:00',
                custom: 'Keep your doors open and we will come find you to go get some free B-Dubs.',
                className: 'event'
            }, {
                title: 'Homecoming - No Contact',
                start: '2016-09-30',
                end: '2016-10-02',
                custom: "IFC dictates that we cannot speak to you during this period.",
                className: "event",
                backgroundColor: '#800000'
            }
        ]
    });
    $('#calendar2').fullCalendar({
        header: {
            title: "seta",
            center: 'October Rush',
            right: '',
        },
        eventClick: function(calEvent, jsEvent, view) {
            $(this).css('border-color', 'white');
            $("#eventDetails").text(calEvent.custom);

            if (previous) {
                previous.css('border-color', '#000000');
            }
            previous = $(this);
        },
        defaultView: 'month',
        defaultDate: '2016-10-01',
        selectable: false,
        selectHelper: false,

        events: [
            {
                title: 'Homecoming - No Contact',
                start: '2016-09-30',
                end: '2016-10-03',
                custom: "IFC dictates that we cannot speak to you during this period.",
                className: "event",
                backgroundColor: '#800000'
            }, {
                title: 'Monday Night Football',
                start: '2016-10-03T20:00:00',
                end: '2016-10-03T22:00:00',
                custom: "Join us in our theater room at the house for some football and more free food.",
                className: "event"
            }, {
                title: 'Speed Lawn Movie Night',
                start: '2016-10-04T20:00:00',
                end: '2016-10-04T23:00:00',
                custom: 'Join us as we watch a couple movies on Speed Lawn with free popcorn!',
                className: 'event'
            }, {
                title: 'Bubble Soccer',
                start: '2016-10-05T17:00:00',
                end: '2016-10-05T19:00:00',
                custom: 'Join us at Bonfire Field to compete against each other in Bubble Soccer!',
                className: 'event'
            }, {
                title: 'Fall Break - No Contact',
                start: '2016-10-06',
                end: '2016-10-10',
                custom: "IFC dictates that we cannot speak to you during this period",
                className: "event",
                backgroundColor: '#800000'

            }, {
                title: 'Monday Night Football',
                start: '2016-10-10T20:00:00',
                end: '2016-10-10T22:00:00',
                custom: "Join us in our theater room at the house for some football and more free food.",
                className: "event"
            }, {
                title: 'Second Formal Invites Open',
                start: '2016-10-11',
                custom: 'Check banner web and accept/deny any invites you have.',
                className: 'event'
            }, {
                title: 'South Park Night',
                start: '2016-10-12T21:30:00',
                end: '2016-10-12T23:00:00',
                custom: "Watch this weeks south park in our theater room with some free food. Good time to hang out with us.",
                className: "event"
            }, {
                title: 'Bonfire',
                start: '2016-09-22T19:00:00',
                end: '2016-09-22T21:00:00',
                custom: "Come on out to our house and hang out at our bonfire fit.",
                className: "event"
            }, {
                title: 'Comedy Night',
                start: '2016-10-15T17:00:00',
                end: '2016-10-15T23:00:00',
                custom: 'We will invite you to come with us to downtown Indianapolis for dinner at MacNiven\'s and comedy with Piff the Magic Dragon',
                className: 'event'
            }, {
                title: 'Monday Night Football',
                start: '2016-10-17T20:00:00',
                end: '2016-10-17T22:00:00',
                custom: "Join us in our theater room at the house for some football and more free food.",
                className: "event"
            }, {
                title: 'Speed Lawn Movie Night',
                start: '2016-10-18T20:00:00',
                end: '2016-10-18T23:00:00',
                custom: 'Join us as we watch a couple movies on Speed Lawn with free popcorn!',
                className: 'event'
            }, {
                title: 'South Park Night',
                start: '2016-10-19T21:30:00',
                end: '2016-10-19T23:00:00',
                custom: "Watch this weeks south park in our theater room with some free food. Good time to hang out with us.",
                className: "event"
            }, {
                title: 'Second Formals',
                start: '2016-10-21',
                custom: "Second Formals. Be sure to check banner web for invitations.",
                className: "event"
            }, {
                title: 'PaintBall',
                start: '2016-10-22T10:00:00',
                end: '2016-10-22T14:00:00',
                custom: 'Come play paint ball with us in Indianapolis. Dinner following.',
                className: "event"
            }, {
                title: 'Second Formals',
                start: '2016-10-23',
                custom: 'Second Formals. Be sure to check banner web for invitations.',
                className: "event"
            }, {
                title: 'Closed Rush',
                start: '2016-10-24',
                className: 'event',
                backgroundColor: '#800000',
                custom: 'Day after second formals is a closed rush.'
            }, {
                title: 'Bid Tuesday',
                custom: 'You will have to wait to find out.',
                start: '2016-10-25',
                className: "event"
            }
        ]
    });
});