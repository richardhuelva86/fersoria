
Ext.onReady(function(){

Ext.QuickTips.init();
var fpItems =[
{
name:'nombre',
fieldLabel : 'Nombre y apellidos',
allowBlank : false,
emptyText : 'Escriba su nombre y apellidos',
minLength: 3,
blankText:'Introduzca su nombre'
},
{
name:'email',
fieldLabel : 'E-mail',
regex:/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
allowBlank:false,
emptyText : 'Escriba su e-mail',
blankText:'Introduzca su email',
regexText:'Formato de email no válido'
},
{
name:'asunto',
fieldLabel : 'Asunto',
allowBlank : false,
emptyText : 'Escriba el asunto',
minLength: 3,
blankText : 'Indique el asunto',
},
{
xtype:'textarea',
name:'mensaje',
fieldLabel:'Mensaje',
maxLength:500,
emptyText : 'Escriba su consulta',
height:60
}
];

var onSuccessOrFail = function(form, action) {
fp.el.unmask();
var result = action.result;
if (result.success) {
Ext.MessageBox.alert('Success',action.result.msg);
}
else {
Ext.MessageBox.alert('Failure',action.result.msg);
}
}

var submitHandler = function() {
fp.getForm().submit({  
            url : '../procesar.php',  
            waitMsg : 'Enviando mensaje...',  
            failure: function (form, action) {  
                Ext.MessageBox.show({  
                    title: 'Error',  
                    msg: 'Error al enviar el mensaje.',  
                    buttons: Ext.MessageBox.OK,  
                    icon: Ext.MessageBox.ERROR  
                }); 
},
			success: function (form, request) {  
                Ext.MessageBox.show({  
                    title: 'Mensaje enviado',  
                    msg: 'Su mensaje se envió correctamente',  
                    buttons: Ext.MessageBox.OK,  
                    icon: Ext.MessageBox.INFO  
                });  
				}
});
}

/*Crear boton*/
var boton=new Ext.Button({
text : 'Enviar',
handler:submitHandler
});

var fp = new Ext.form.FormPanel({
renderTo: 'contact_form',
id:'myFormPanel',
width : 400,
height : 280,
title : 'Formulario de contacto',
frame : true,
bodyStyle : 'padding: 6px',
labelWidth : 126,
defaultType : 'textfield',
defaults : {
msgTarget : 'side',
anchor : '-20'
},
items : [fpItems],
buttons:[boton]
});





});