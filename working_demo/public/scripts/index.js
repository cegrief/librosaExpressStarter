$(document).ready(function(){
	
	$('#pyBtn').click(function(){
		var myfile = $('#myfile')[0].files[0];
		var fd = new FormData();
		fd.append('file', myfile);
		
		$.ajax({url:'/helloPython', data:fd, processData:false, contentType:false, method:"POST"}).done(function(data){
			myAudio = new Audio(data.path);
			myAudio.controls = true;
			$('body').append(myAudio);
		})
	})

})