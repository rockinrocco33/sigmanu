$(document).ready(function(){

//d
$('#navBar a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$('#aboutUsTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
//i
$('#brothersTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
//c
$("#tab1").tab('show');
$('.carousel').carousel();
//kb
$("#tab2").tab('show');
$("#tab3").tab('show');
 $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('#calendar1').fullCalendar('render');
        $('#calendar2').fullCalendar('render');
    });
//u
$('#sophmoresCarousel').carousel();
$('#juniorsCarousel').carousel();
$('#seniorCarousel').carousel();
var previous;
var currentKeyString = "";
var currentKeyStringCount = 0;

//tt
$(document).keypress(function(e){
secretString = ["100","105","99","107","98","117","116","116"];
    if(e.charCode == secretString[currentKeyStringCount]){
        currentKeyStringCount = currentKeyStringCount + 1;
        if(currentKeyStringCount == secretString.length){
            $('#db').modal('show');
        } 

        
    } else{
        currentKeyStringCount = 0;
    }
    // currentKeyString = currentKeyString + e.keyCode;


});
$('#calendar1').fullCalendar({
				eventClick: function(calEvent, jsEvent, view){
				$(this).css('border-color','white');
				$("#eventDetails").text(calEvent.custom);

				if(previous){

					previous.css('border-color','#000000');
				}
				previous = $(this);

			},
			header: {
				title:"seta",
				center: 'September Rush',
				right: "",
			},


			defaultDate: '2014-09-01',
			selectable: false,
			selectHelper: false,

			events: [
				{
					title: 'Greek Fair',
					start: '2014-09-04',
					className:"event",
					custom:"Come down to the greek fair and see our booth!",
				},
					{
					title: 'No Contact',
					start: '2014-09-05',
					end: '2014-09-15',
					className:"event",
					custom:"IFC dicates that we cannot speak to you during this period",
					backgroundColor:'#800000'
				},
				{
					title: 'Dorm Storming',
					custom:"Fraternities storm the dorms to inform freshman of rush activites. Be sure to leave your door open!",
					start: '2014-09-15T19:00:00',
					end: '2014-09-10T22:00:00',
					className:"event"
				},
				{
					title: 'Informals',
					start: '2014-09-16',
					custom:"Come by our house and get a tour during informals!",
					className:"event"
				},
					{
					title: 'Informals',
					start: '2014-09-17',
					custom:"Come by our house and get a tour during informals!",
					className:"event"
				},
					{
					title: 'Speed Lawn BBQ with smoked meat',
					start: '2014-09-18',
					custom:"Come down to spped lawn for some BBQ smoked by none other than Sigma Nu Thomas Demos.",
					className:"event"
				},
					{
					title: 'Speed Lawn BBQ and Smoothies',
					start: '2014-09-19',
					custom:"Come down to spped lawn for some BBQ and delicious smoothies.",
					className:"event"
				},
					{
					title: 'Jello Wrestling with Pig Roast',
					start: '2014-09-20',
					custom:"Join the Brothers of Sigma Nu for our annual jellow wrestling event.",
					className:"event"
				},
					{
					title: 'Hangover Recovery at Cackleberries',
					start: '2014-09-21',
					custom:"Nothing cures a hangover like a skillet from Cackleberries.",
					className:"event"
				},
					{
					title: 'Monday Night Football and Giant Subs',
					start: '2014-09-22',
					custom:"Join us in our theatre room at the house for some football and food.",
					className:"event"
				},
					{
					title: 'Bowling and Steak and Shake',
					start: '2014-09-23',
					custom:"Join us in our bowling and steak and shake following.",
					className:"event"
				},
					{
					title: 'South Park and Papa Johns',
					start: '2014-09-24',
					custom:"Watch this weeks south park in our theatre room and eat some pizza.",

					className:"event"
				},
					{
					title: 'Hookah Night and Jimmy Johns',
					start: '2014-09-25',
					custom:"Smoke hookah (18+ only) and devour some subs in our hookah bar.",
					className:"event"
				},
					{
					title: 'First Formals',
					start: '2014-09-26',
					custom:"First Formals. Be sure to sign up on banner web.",
					className:"event"
				},
					{
					title: 'Sky Zone and Oy Vey',
					start: '2014-09-27',
					custom:"Come to the Sky Zone in Indianapolis.",
					className:"event"
				},
					{
					title: 'First Formals Round 2',
					start: '2014-09-28',
					custom:"First Formals. Be sure to sign up on banner web.",
					className:"event"
				},
					{
					title: 'Monday Night Football',
					start: '2014-09-29',
					custom:"Join us in our theatre room at the house for some football and food.",
					className:"event"
				},
					{
					title: 'Pick Up Basketball game',
					custom:"Pick up basketball game behind speed. Dinner Following",
					start: '2014-09-30',
					className:"event"
				}

			]
		});
$('#calendar2').fullCalendar({
			header: {
				title:"seta",
				center: 'October Rush',
				right: '',
			},
					eventClick: function(calEvent, jsEvent, view){
				$(this).css('border-color','white');
				$("#eventDetails").text(calEvent.custom);

				if(previous){

					previous.css('border-color','#000000');
				}
				previous = $(this);

			},
			defaultView:'month',
			defaultDate: '2014-10-01',
			selectable: false,
			selectHelper: false,

			events: [
				{
					title: 'South Park and Papa Johns',
					start: '2014-10-01',
					custom:"Watch this weeks south park in our theatre room and eat some pizza.",
					className:"event"
				},
					{
					title: 'Hookah Night and Chavas',
					start: '2014-09-02',
					custom: 'Come smoke hookah (18+) in our hookah lounge and eat some big burritos',
					className:"event",
				},
				{
					title: 'Homecoming - No Contact',
					start: '2014-10-03',
					end: '2014-10-05',
					custom:"IFC dicates that we cannot speak to you during this period",

					className:"event",
					backgroundColor:'#800000'

				},
				{
					title: 'Monday Night Football and Papa Johns',
					custom:"Join us in our theatre room at the house for some football and food.",
					start: '2014-19-06',
					className:"event"
				},
					{
					title: 'Pick Up Baskball and Dinner',
					start: '2014-10-07',
					custom:"Pick up basketball game behind speed. Dinner Following",
					className:"event"
				},
					{
					title: 'Shooting Range and Wise Pies',
					start: '2014-10-08',
					custom:"Shoot some guns and eat some pizza.",

					className:"event"
				},
					{
					title: 'Fall Break - No contact',
					start: '2014-10-09',
					end: '2014-10-12',
					custom:"IFC dicates that we cannot speak to you during this period",
					className:"event",
					backgroundColor:'#800000'

				},
					{
					title: 'Monday Night Football and Chick-fil-a',
					custom:"Join us in our theatre room at the house for some football and food.",
					start: '2014-10-13',
					className:"event"
				},
					{
					title: 'Pick Up BasketBall and Dinner',
					start: '2014-10-14',
					custom:"Pick up basketball game behind speed. Dinner Following",
					className:"event"
				},
					{
					title: 'South Park and Papa Johns',
					start: '2014-10-15',
					custom:"Watch this weeks south park in our theatre room and eat some pizza.",
					className:"event"
				},
					{
					title: 'Hookah Night and Jimmy Johns',
					start: '2014-10-16',
					custom:"Smoke hookah (18+ only) and devour some subs in our hookah bar.",
					className:"event"
				},
					{
					title: 'Hockey Night',
					start: '2014-10-17',
					custom: 'Hockey game in indianapolis',
					className:"event"
				},
					{
					title: 'Monday Night Football',
					custom:"Join us in our theatre room at the house for some football and food.",
					start: '2014-10-20',
					className:"event"
				},
					{
					title: 'Pick Up Basketball',
					start: '2014-10-21',
					custom:"Pick up basketball game behind speed. Dinner Following",
					className:"event"
				},
					{
					title: 'South Park and Chick-Fil-A',
					custom:"Watch this weeks south park in our theatre room and eat some Chick-Fil-A.",
					start: '2014-10-22',
					className:"event"
				},
					{
					title: 'Mogers Dinner',
					custom: 'Invitation dinner to Mogers',
					start: '2014-10-23',
					className:"event"
				},
					{
					title: 'Second Formals',
					custom:'Second Formals-- invite only',
					start: '2014-10-24',
					className:"event"
				},
					{
					title: 'PaintBall',
					start: '2014-10-25',
					custom:'Come play paintball with us in Indianapolis. Dinner following.',
					className:"event"
					},
					{
					title: 'Second Formals',
					start: '2014-10-26',
					custom:'Second Formals-- invite only',
					className:"event"
						},
					{
					title: 'Bid Tuesday',
					custom:'You will have to wait to find out',
					start: '2014-10-28',
					className:"event"
				}

			]
		});

});