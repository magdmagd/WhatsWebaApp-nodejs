                                                /**
                                                 * Module dependencies.
                                                 */
const express = require('express');
const fs =      require('fs');
const bodyParser = require('body-parser');
const { Client } = require('whatsapp-web.js');
const qrCode = require('qrcode-terminal');




                                                  /*
                                                    Variables & Const
                                                   */  
const client = new Client();
process.title = "whatsapp-node-api";
                                                    
                                                  /*
                                                    Process Running 
                                                   */  
 client.on('qr', (qr) => 
 {
  qrCode.generate(qr, {small: true});
  console.log('QR RECEIVED', qr);
 });         
 
 
 client.on('ready', () => 
 {
  console.log('Client is ready!');
 });

 client.on('disconnected',()=>
{
  console.log('Client is disconnected!');
});//Client was disconnected 

client.on("authenticated",()=>
{
  console.log("Client Authinticated Successfully") ;
});

client.on('auth_failure', msg => 
{
  // Fired if session restore was unsuccessfull
  console.error('AUTHENTICATION FAILURE', msg);
  process.exit();
});//check


 client.on('message', message => 
 {
	console.log(message.body);
 });

client.on('message', message => 
{
	if(message.body === 'ping')
   {
		message.reply('pong');
	 }
});//Read & Check Message

 

 client.initialize();


 module.exports = client ;
 