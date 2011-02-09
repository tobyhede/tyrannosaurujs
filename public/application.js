var editor;
$(document).bind("mobileinit", function(){
  // $.mobile.ajaxEnabled = false;

	$('div').live('pageshow',function(event, ui){
		active_textarea = $(".ui-page-active textarea").get(0);
		if (active_textarea) {
		  editor = CodeMirror.fromTextArea(active_textarea, {
				lineNumbers: true, height: "500px",
			  parserfile: ["tokenizejavascript.js", "parsejavascript.js"],
			  stylesheet: "/codemirror/css/jscolors.css",
			 	path: "/codemirror/js/"
			});
		}			
	});


	$('div').live('pagehide',function(event, ui){
		$('.CodeMirror-wrapping').remove();
	});

});



$(function() {
	
	$(".run").click(function(){
		var code = editor.getCode();		
		code = "(function(){"+code+"})();"			
		eval(code);
	}); 


});