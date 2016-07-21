var usuario;
$(document).ready(function() {
	var titleOriginal = document.title;   
    var intervalBlinkTitle = 0;
    // Parpadea el titulo de la pagina cada que llega un mensage nuevo
   window.startFlashTitle = function (newTitle) {       
       if(intervalBlinkTitle == 0){
	        document.title = 
	         (document.title == titleOriginal) ? newTitle : titleOriginal;           
 
	        intervalBlinkTitle = setInterval(function (){
	         document.title = 
	          (document.title == titleOriginal) ? newTitle : titleOriginal;           
	        }, 1000);
	    } 
   };
   // Para el parpadeo del título de la página   
   // Restablece el título
   window.stopFlashTitle = function () {       
       clearInterval(intervalBlinkTitle);
       intervalBlinkTitle = 0;
       document.title = titleOriginal;
   };
 
   $('#mymsg').keyup(function(event) {
        event.preventDefault();
        if(event.keyCode == 13)enviarMensaje();
    });
 
   $('#mymsg').focus(function(event) {
   	  stopFlashTitle();
   });
	//Aqui Pusher recibe como parametro la KEY
	var pusher = new Pusher('ad07dc3b08d73d6feab3');
	//Suscribirnos a un canal de comunicacion...en este caso llamado chat
	var channel = pusher.subscribe('chat');
	//Escuchamos un evento...en este caso llamado mensaje... cuando escuche por el evento entonces mostrara el mensaje recibido
	channel.bind('mensaje', function(data) {
		fecha = new Date();
		cad = '<div class="media msg">'+
		'<a class="pull-left" href="#">'+
		'<img class="media-object" style="width: 32px; height: 32px;" src=""/>'+
		'</a>'+
		'<div class="media-body">'+
		'<small class="pull-right time"><i class="fa fa-clock-o"></i>'+fecha.getHours()+':'+fecha.getMinutes()+'</small>'+
		'<h5 class="media-heading">'+data.usuario+'</h5>'+
		'<small class="col-lg-10">'+data.mensaje+'</small>'+
		'</div>'+
		'</div>';
		$('#mensajes').append(cad);
		$("#mensajes").scrollTop($("#mensajes")[0].scrollHeight+30);
		if(usuario != data.usuario)startFlashTitle('Nuevo Mensaje');
	});
});
 
 
/*Esta funcion envia un mensaje al presionar "Enviar Mensaje", primero comprueba si ya existe un nombre de usuario
si no, entonces crea uno (id unico),despues se usa la funcion $.get de jquery para enviarle el mensaje al server*/
 
function enviarMensaje(){
	//tomamos el mensaje de la caja de texto y comrpobamos que no este vacio
	msg = $('#mymsg').val();
	$('#mymsg').val('');
	if(msg.length == 0 )return;
	//Verificamos si ya se eligio un nombre de usuario
	if(!localStorage.getItem('usuario')){
		usuario = prompt("Nombre:");
		if(!usuario)return;
		localStorage.setItem('usuario',usuario);
	}
	else{
		usuario = localStorage.getItem('usuario');
	}
	//enviamos el mensaje al servidor mediante AJAX
	$.post('index.php/Welcome/notificar',{usuario:usuario,mensaje:msg},function(data) {
		//limpiamos el area de texto y hacemos que baje el scroll hasta el nuevo mensaje
	
		$("#mensajes").scrollTop($("#mensajes")[0].scrollHeight+30);
	});
}