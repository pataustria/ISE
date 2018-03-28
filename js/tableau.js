 function initViz (){
	var containerDiv = document.getElementById("VizContainer"),
	        url = "http://dataviz.worldbank.org/javascripts/api/viz_v1.js",
	        options = {
	            hideTabs: true,
	            onFirstInteractive: function () {
	                console.log("Run this code when the viz has finished loading.");
	            }
	        }
 }
	       