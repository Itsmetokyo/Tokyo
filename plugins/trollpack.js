const fasil = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

fasil.addCommand({ pattern: 'trollpack ?(.*)', fromMe: true, desc: "you can make your own trolls by this tool", }, async (message, match) => {
  return await message.sendMessage(`╭────────────────╮
               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ*
╰────────────────╯
               *ᴄᴏᴍᴍᴀɴᴅs*
▢thug
 

 ▢ pulikkal
 ▢ smileinpain
 ▢ acat
 ▢ adog
 ▢ ased
 ▢ aikka
 ▢ bcat 
 ▢ ccat
 ▢ dcat
 ▢ adevarayoli
 ▢ bdevarayoli
 ▢ azatan
╰───────────────

╭────────────────╮
            *ᴛʀᴏʟʟ ᴘᴀᴄᴋ ᴠ1.5*
╰────────────────╯`,{quoted : {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    "extendedTextMessage": {
      "text": "*ᴛʀᴏʟʟ ᴘᴀᴄᴋ* ✅️"
    }
  }
}})
});

//Troll pack by fasil boy thanks to jocker ser insane




  }));
fasil.addCommand({ pattern: 'pubikka ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ɪᴋᴋᴀ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/osGlWqQ.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'smileinpain ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  sᴍɪʟᴇ ɪɴ ᴘᴀɪɴ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/7sIUt1K.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'acat ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/10lUaxx.png`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'adog ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/UfwV3GG.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'ased ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  sᴇᴅ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/th52obr.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'bcat ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/D6Ay9HM.png`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'aikka ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ɪᴋᴋᴀ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/76xoJ5m.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'ccat ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/10lUaxx.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'dcat ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/nJspbMm.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'adevarayoli ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/ukbxtaf.png`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'bdevarayoli ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/wb3gIRU.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
fasil.addCommand({ pattern: 'azatan ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
         if (match === ''|| !match.split(';')[0] || !match.split(';')[1] ) return await message.sendMessage('╭────────────────╮ \n               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ* \n╰────────────────╯\n                  *ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴄᴀᴛ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯');

    const {buffer} = await getBuffer (`https://docs-jojo.herokuapp.com/api/meme-gen?top=${match.split(';')[0]}&bottom=${match.split(';')[1]}&img=https://i.imgur.com/YosomTc.jpeg`)
return await message.sendMessage(buffer,{}, MessageType.image)

  }));
