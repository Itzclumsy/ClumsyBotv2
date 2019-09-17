const Discord = require('discord.js');
const client  = new Discord.Client();

const token = 'NjIzMTYwNjI0OTA5OTEwMDE2.XX-Z7g.KzhvMEZxtipba-Jaysdfw8wIzfA';


client.on('ready', () =>{
    console.log('This bot is online!');
})

client.on('message', msg=>{
    if(msg.content === "Hi"){
        msg.reply('Fuck you!');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "Clumsy"){
        msg.reply('Daddy');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "version"){
        msg.reply('1.0.0');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "geia"){
        msg.reply('Geia ta auga!');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "dld"){
        msg.reply('zaxarias');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "dhladh"){
        msg.reply('Zaxarias');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "image"){
        msg.reply('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F04%2FFantasy-fairy-fantasy-fairy-wallpapers.jpg&f=1&nofb=1');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "SugarBoy"){
        msg.reply('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVrtxHf4CK3c%2Fmaxresdefault.jpg&f=1&nofb=1');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "google"){
        msg.reply('google tracks you');
     
    }
})
    
client.on('message', msg=>{
    if(msg.content === "help"){
        msg.reply('Not available yet:hammer:');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "creeper"){
        msg.reply('aw man');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "music"){
        msg.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
     
    }
})

client.on('message', msg=>{
    if(msg.content === "music for good boys"){
        msg.reply('https://www.youtube.com/watch?v=i0sCMR9joYw');
     
    }
})

client.login(token);
