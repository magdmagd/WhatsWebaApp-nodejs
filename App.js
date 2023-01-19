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


 client.on('message', message => 
 {
	console.log(message.body);
 });

client.on('message', message => 
{
	if(message.body === 'ping') {
		message.reply('pong');
	}
});//Read & Check Message

 

 client.initialize();
 