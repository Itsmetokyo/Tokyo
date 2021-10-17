const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali_sir_endi_mair
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:VISHNU [MEENAKSHI]\n' // full name
            + 'ORG:Meenakshi;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918891714036:+91 6235989299\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "VISHNU [MEENAKSHI]", vcard: vcard}, MessageType.contact)
}))
