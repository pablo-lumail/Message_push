<!DOCTYPE html>
<head>
  <title>Pusher Test</title>
  
  <script src="https://js.pusher.com/3.1/pusher.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
  <script src="public/chat.js"></script>
  <link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/chat.css">

	
	<script src="js/bootstrap.min.js"></script>
	<script src="js/pusher.min.js"></script>
	
  <div class="container">
		<div class="row">
			<div class="message-wrap col-lg-12">
				<div class="msg-wrap" id="mensajes"></div>
				<div class="send-wrap navbar navbar-default navbar-fixed-bottom boton">
					<textarea id="mymsg" class="form-control send-message" rows="3" placeholder="Tu mensaje..."></textarea>
					<div class="btn-panel">
						<a href="javascript:enviarMensaje();" class=" col-lg-4 text-right btn   send-message-btn pull-right" role="button"><i class="fa fa-plus"></i> Enviar Mensaje</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
</head>