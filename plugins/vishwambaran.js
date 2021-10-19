const Meenu = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Meenu.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by Saidali കൊല്ലം ഫ്യുരി
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Vishnu [VISHNUSER]\n' // full name
            + 'ORG:Vishnuser;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=916235989299:+91 8891714036\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Vishnu [VISHNUSER]", vcard: vcard}, MessageType.contact)
}))
