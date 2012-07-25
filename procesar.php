<?php	
if(!isset($HTTP_POST_VARS['name']) || !isset($HTTP_POST_VARS['email']) || !isset($HTTP_POST_VARS['subject']) ||!isset($HTTP_POST_VARS['message'])) {
echo "Error al enviar mensaje ";
return 0;
}	
else
{

	$cuerpo = "message enviado\n";
    $cuerpo .= "name: " . $HTTP_POST_VARS["name"] . "\n";
	$cuerpo .= "E-mail: " . $HTTP_POST_VARS["email"] . "\n";
    $cuerpo .= "subject: " . $HTTP_POST_VARS["subject"] . "\n";
    $cuerpo .= "message: " . $HTTP_POST_VARS["message"] . "\n";

    //mando el correo...
	$headers = "From: ".$HTTP_POST_VARS['email']."\r\n";
	$remitente = $HTTP_POST_VARS["email"];
	$name=$HTTP_POST_VARS["name"];
	//admin@nocheiberica.com

   mail('admin@fersoria.com',$name,$cuerpo,"From: ".$remitente);
echo "Mensaje enviado con éxito ";
return 0;
}
?>