<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require('push/lib/Pusher.php');
class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		
		$this->load->view('welcome_message');
	}
	public function notificar(){
		
		
			/*creamos un objeto pusher que recibe como parametros KEY, SECRET,APP_ID, los cuales recibimos
                        al crear nuestra APP en pusher.com*/
			$pusher = new Pusher('ad07dc3b08d73d6feab3', '3c7221acba54ddd50f84', '227892');
			//enviamos el mensaje recibido a todos los clientes conectados
			$pusher->trigger('chat', 'mensaje', array('usuario'=> $_POST['usuario'],'mensaje' => $_POST['mensaje']) );
		
		
	}
}
