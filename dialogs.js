$(document).ready(function () {
$.fn.bootstrapBtn = $.fn.button.noConflict();

var SM_MB_OK = "0";
var SM_MB_YESNOCANCEL = "3";
var SM_MB_YESNO =	"4" ;

//SM_MB_OK
$("#msg-box-0").dialog({                                                                                                                                                                                                                               
    autoOpen  : false,                                                                                                                                                                                                                                
    modal: true,                                                                                                                                                                                                                                      
    draggable: false,                                                                                                                                                                                                                                 
    resizable: false,                                                                                                                                                                                                                                 
    show: 'blind',                                                                                                                                                                                                                                    
    hide: 'blind',                                                                                                                                                                                                                                    
    width: 400,                                                                                                                                                                                                                                       
    dialogClass: 'ui-dialog-osx',   
    classes: {
        "ui-dialog": "custom"
    },
    buttons: {                                                                                                                                                                                                                                        
            "OK": function() {  

                    $(this).dialog("close");                                                                                                                                                                                                          
            }  
    }                                                                                                                                                                                                                                                 
}); 

//SM_MB_YESNOCANCEL
$("#msg-box-3").dialog({                                                                                                                                                                                                                               
    autoOpen  : false,                                                                                                                                                                                                                                
    modal: true,                                                                                                                                                                                                                                      
    draggable: false,                                                                                                                                                                                                                                 
    resizable: false,                                                                                                                                                                                                                                 
    show: 'blind',                                                                                                                                                                                                                                    
    hide: 'blind',                                                                                                                                                                                                                                    
    width: 400,                                                                                                                                                                                                                                       
    dialogClass: 'ui-dialog-osx',   
    classes: {
        "ui-dialog": "custom"
    },
    buttons: {                                                                                                                                                                                                                                        
            "Yes": function() {  
            	doSomething("yes") 
                    $(this).dialog("close");                                                                                                                                                                                                          
            }  ,
            "No": function() {  
            	doSomething("no") 
                $(this).dialog("close");                                                                                                                                                                                                          
        }  ,
        "Cancel": function() {  
        	    $(this).dialog("close");                                                                                                                                                                                                          
    }  
    }                                                                                                                                                                                                                                                 
}); 
//SM_MB_YESNO
$("#msg-box-4").dialog({                                                                                                                                                                                                                               
    autoOpen  : false,                                                                                                                                                                                                                                
    modal: true,                                                                                                                                                                                                                                      
    draggable: false,                                                                                                                                                                                                                                 
    resizable: false,                                                                                                                                                                                                                                 
    show: 'blind',                                                                                                                                                                                                                                    
    hide: 'blind',                                                                                                                                                                                                                                    
    width: 400,                                                                                                                                                                                                                                       
    dialogClass: 'ui-dialog-osx',   
    classes: {
        "ui-dialog": "custom"
    },
    buttons: {                                                                                                                                                                                                                                        
            "Yes": function() { 
            	    doSomething("yes") 
                    $(this).dialog("close");                                                                                                                                                                                                          
            }  ,
            "No": function() {  
            	doSomething("no") 
                $(this).dialog("close");                                                                                                                                                                                                          
        }  
    }                                                                                                                                                                                                                                                 
});  

$('.ui-dialog-buttonpane :button').each(function(item) {
    $(this).css({'background': '#101010', color: '#fff'});
});
$('.ui-dialog-titlebar').css({'background': '#101010', color: '#fff'});   

var opt = $(".message_box_options").text();
var icon = $(".message_box_icon").text();
var title = $(".message_box_title").text() ;

console.log(title)

if(opt==SM_MB_YESNO){
var msg = $(".sm_message_text h3:first").text();
console.log(msg);
$('#msg-box-4').html('<p>'+msg+'</p>'); 
$("#msg-box-4").dialog('option', 'title', title); 
$("#msg-box-4").dialog("open");
}
if(opt==SM_MB_OK){
	var msg = $(".sm_message_text h3:first").text();
	console.log(msg);
	$('#msg-box-0').html('<p>'+msg+'</p>'); 
	$("#msg-box-0").dialog('option', 'title', title); 
	$("#msg-box-0").dialog("open");
	}
if(opt==SM_MB_YESNOCANCEL){
	var msg = $(".sm_message_text h3:first").text();
	console.log(msg);
	$('#msg-box-3').html('<p>'+msg+'</p>'); 
	$("#msg-box-3").dialog('option', 'title', title); 
	$("#msg-box-3").dialog("open");
	}
function callService(reply,msgId,callback) {
var serviceScreen = 'sm_msg_box';
var webid  = $('input[name="'+"__server_data__"+'"]').val();
var formdata = {
                    __server_data__:webid,
					__posted_screen_name__ : serviceScreen,
                    __end_of_jpl_vars__    : 0
               };

formdata['n_event'] = reply;
formdata['n_msg_id'] = msgId;
var saveData = $.ajax({
	type: 'POST',
	url: serviceScreen,
	data: formdata,
	success: callback
});
}

function serviceCallback(resultData) {
console.log(resultData);
$('html').html(resultData);
}

function doSomething(event) {
	var msgId = $(".message_id").text();
	callService(event,msgId,serviceCallback);
}


});