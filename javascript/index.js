$(document).ready(function(){


$('#navBar a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$('#aboutUsTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$('#brothersTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show');
});
$("#tab1").tab('show');
$('.carousel').carousel();

$("#tab2").tab('show');
$("#tab3").tab('show');

$('#sophmoresCarousel').carousel();
$('#juniorsCarousel').carousel();
$('#seniorCarousel').carousel();


$('#calendar1').fullCalendar({
			header: {
				center: 'September Rush',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2014-09-01',
			selectable: true,
			selectHelper: true,
			select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
			},
			events: [
				{
					title: 'Greek Fair',
					start: '2014-09-04'
				},
				{
					title: 'Dorm Storming',
					start: '2014-09-15T7:00:00',
					end: '2014-09-10T10:00:00'
				},

			]
		});

});