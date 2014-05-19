$(document).on('ready', function() {
	var forecasts = [
	{day: "Sunday", temp: 82},
	{day: "Monday", temp: 90}, 
	{day: "Tuesday", temp: 78},
	{day: "Wednesday", temp: 87},
	{day: "Thursday", temp: 69},
	{day: "Friday", temp: 75},
	{day: "Saturday", temp: 89}
	];

	var weatherTemplate = $('#weather-template');
	var templateText = weatherTemplate.html();

	// console.log(templateText);
		// <div id="weather">
		// 	<b>Day:</b> {{day}}
		// 	<b>Temperature</b> {{temp}}
		// </div>
	
	var renderWeather = Handlebars.compile(templateText);

	for (var i=0; i<forecasts.length; i++){
		var outputHtml = renderWeather(forecasts[i]);
		$('#forecasts').append(outputHtml);
	}
});