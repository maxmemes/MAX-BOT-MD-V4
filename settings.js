/*
===================================================================================================
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█   █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█   █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█   █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█
 
 █▀▀█ ░ █▀▀█ ░ █▀▀█ ░░ █░░▒█
 ░░▀▄ ░ █▄▀█ ░ █▄▀█ ▀▀ ▒█▒█░
 █▄▄█ █ █▄▄█ █ █▄▄█ ░░ ░▀▄▀░
 
 𝑶𝒘𝒏𝒆𝒓 : 𝑴𝒓 𝑵𝒊𝒎𝒂
 𝑯𝒆𝒍𝒑𝒆𝒓𝒔 : 
 • 𝑷𝒂𝒔𝒊𝒅𝒖
 • 𝑻𝒉𝒊𝒏𝒖𝒓𝒂 
 • 𝑻𝒉𝒂𝒔𝒉𝒊
 • 𝑰𝒔𝒖𝒓𝒖

𝑨𝒏𝒅 𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑿𝒆𝒐𝒏 𝑭𝒐𝒓 𝒔𝒄𝒓𝒊𝒑𝒕 .
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')


/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true "
global.READ_MASSAGE = true
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = true
//👇 Inbox massage block PM block
global.INBOX_BLOCK = true
//👇 Auto react 
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = true
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['265997133051'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝙼𝙰𝚇 𝙱𝙾𝚃 𝟸𝟶𝟸𝟹'
//👇 Your Bot Name
global.botnma =  '𝗤𝗨𝗘𝗘𝗡 𝗠𝗔𝗫 𝗕𝗢𝗧' 
//👇 Your name
global.ownernma =  '𝙰𝚄𝚂𝚃𝙸𝙽 𝙼𝙰𝚇' 
//👇 Sticker package name
global.packname =  '𝗤𝗨𝗘𝗘𝗡 𝗠𝗔𝗫 𝗕𝗢𝗧' 
//👇 Sticker Author Name
global.author =  '𝙰𝚄𝚂𝚃𝙸𝙽 𝙼𝙰𝚇' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = '*Don't call or inbox BOT*  
Your number will be blocked in 5 seconds....  

If blocked, Call the owner to unblock you.👇 
https://wa.me/+265997133051  
'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Africa/Blantyre'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/b0f1e7622f1e11f1bbd6d.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || ``
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `default`
//👇 Desable PM Block numbers
global.NO_BLOCK = ["94715166712","94719574492"]
global.S_CAP = ''
global.V_CAP = ''
global.YT_CAP = ''
global.IMG_BLOCKER = ["xxx","sex","mia"]






//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['265997133051'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['265997133051'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Austin Max' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait Queen Max is Processing*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 5
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Elisa.jpg')
global.alivelogo = `https://telegra.ph/file/b0f1e7622f1e11f1bbd6d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
