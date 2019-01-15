const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function (){
	bot.user.setActivity('le cours de Maths', { type: 'LISTENING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
	bot.user.setAvatar('./avatar.png')
  .then(console.log('Avatar appliqué avec succés !'))   
  .catch(console.error)
  })
bot.on('guildMemberAdd', function(member){
	member.createDM().then(function (channel){
		return channel.send('Bienvenu sur le serveur '+ member.displayName)
	})
})
 bot.on('message', function(message){
    if(message.content.startsWith("!help")) {
    	let args = message.content.split(' ')
    	args.shift()
        message.channel.send("@here , "+ message.author.username+" a besoin d'aide sur ce sujet : "+args.join(' '));
 		

 	}
 })
 bot.login('NTMyNDM2MzQ5MTM1ODgwMTkz.DxcePg.yRNGoMc1-SF4BCumedw_hqzjgsM')