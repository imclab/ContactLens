$(document).ready(function(){

	function showSuccess(message){
		$('#alert-message').text(message);
		$('#alert-container').show();
		setTimeout(function(){
			$('#alert-container').hide(400);
		}, 2500);
	}

	function showAlert(message){
		$('#alert-error').text(message);
		$('#alert-container-error').show();
		setTimeout(function(){
			$('#alert-container-error').hide(400);
		}, 2500);
	}

	function addToHistory(source, message){
		var imageSrc = "assets/" + source + ".png";
		var html = '<div class="history-item ' + source+'-history'+ '"><img src=';
		html += imageSrc;
		html += ' class="history-icon" />';
		html += message;
		html += "</div>"
		$('.history').prepend(html);
	}
})

