const Discord = require('discord.js'),
    us3r = new Discord.Client(),
        axios = require('axios').default,
            colors = require('colors'),
                { token, id } = require('./config.json')

    console.log('[By F0REN]'.red)                
    console.log(
    `\n                                   ██████╗ ███╗   ██╗███████╗\n`,
    `                                  ██╔══██╗████╗  ██║██╔════╝\n`.brightRed,
    `                                  ██║  ██║██╔██╗ ██║███████╗\n`.brightRed,
    `                                  ██║  ██║██║╚██╗██║╚════██║\n`.red,
    `                                  ██████╔╝██║ ╚████║███████║\n`.red,
    `                                  ╚═════╝ ╚═╝  ╚═══╝╚══════╝\n`.red)

    us3r.login(token)

    us3r.on('ready', () => 
    {
        console.log("\n                            Login as: " + us3r.user.tag.brightRed + " (" + `${id}`.red + ")\n\n")
    })

    us3r.on('message', message => 
    {

if (message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) 
{
    var guild = message.guild
    var groupe = ""

if (message.channel.type === "dm") 
{
    groupe = message.author.id
}
if (message.author.id == id) 
{
    console.log(`[ALERTE] Tu as envoyé un nitro : ${message.content}\n`.brightBlue)
        return;
}

    var nitroch = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
    var nitrolink = nitroch.exec(message.content);
    const nitrocode = nitrolink[0].split('/')[1];


let positiveMsg = [
    "TAKE THAT !",
    "WATCH THIS !",
    ":)"
];
let negativeMsg = [
    "NOT TODAY",
    "NEXT TIME",
    ":("
];
var pMsg = positiveMsg[Math.floor(Math.random() * positiveMsg.length)];
var nMsg = negativeMsg[Math.floor(Math.random() * negativeMsg.length)];

    console.log(`[`+`FOUND`.green +`]`, `[${groupe}] | de ${message.author.tag} : https://${nitrolink[0]}`);
            axios({ method: 'POST', url: `https://discordapp.com/api/v6/entitlements/gift-codes/${nitrocode}/redeem`, headers: { 'Authorization': token }})
            .then(() => console.log(`[`+`${pMsg}`.green +`]`, `Nitro récuperé dans [${groupe}] | de [${message.author.tag}]`.brightGreen))
            .catch(e => console.log(`[`+`${nMsg}`.red +`]`, `Ce nitro a déjà été utilisé ou/est invalide :/\n`))
}
    });
