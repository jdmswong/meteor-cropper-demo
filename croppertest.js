if (Meteor.isClient) {
	
  $( document ).ready(function(){
		
		$('.container > img').cropper({
			aspectRatio: 1/1,
		});
		
		$('#clickme').click(function(){
			
			var dataURL = 
					$('.container > img')
						.cropper("getCroppedCanvas")
						.toDataURL();
			
			console.log(dataURL);
			
			$('#topimg').attr('src',dataURL);
		});

	});
	
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
