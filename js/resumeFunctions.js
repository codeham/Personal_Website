$(document).ready(function(){
    $("#back-btn").click(function(event){
    	/*
			animation to href page load
    	*/
        animationFinished = false;

        event.preventDefault();
        $("#animation-text").removeClass("animated lightSpeedIn");
        $("#animation-text").addClass("animated fadeOutLeft");
        animationFinished = true;


        if (animationFinished){
        	setTimeout(loadPage, 450);
        	function loadPage(){
        		window.location.href = "home.html";
        	}
        }
        
        });
    });

