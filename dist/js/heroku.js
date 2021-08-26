$(document).ready(function() {

	$('#prop-test-freq').submit(function(){
		console.log("sending request");
	sendData();
});
});

	var sendData = function() {
		var cnt1 = $('#cnt1').val();
    var cnt2 = $('#cnt2').val();
    var nobs1 = $('#nobs1').val();
    var nobs2 = $('#nobs2').val();
		var myData = "";
		var data = {
			"count1" : cnt1,
			"count2" : cnt2,
			"nobs1" : nobs1,
			"nobs2": nobs2
		};
		var pld = $.param(data);

		var final_url = "http://127.0.0.1:5000/prop_test_freq?" + pld;

		// var final_url = "https://eppo-api.herokuapp.com/prop_test_freq?" + pld;
		// $.get(final_url, function(d){
		// 	var json_rsp = JSON.parse(d.responseText);
		// 	console.log("got response");
		// 	console.log(json_rsp);
		// });

		$.ajax({
		headers: {
	        'Access-Control-Allow-Origin':'*'
	    },
    url: final_url,
    data: myData,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function() { alert("Success");
	console.log(myData); },
    error: function() { alert('Failed!'); },
});


}
