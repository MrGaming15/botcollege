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
	let argsRole = member.guild.roles.find(role => role.name === 'user')
	member.addRole('520481838288863232')
	member.createDM().then(function (channel){
		return channel.send('Bienvenu sur le serveur '+ member.displayName)
	})


})
 bot.login('NTMyNDM2MzQ5MTM1ODgwMTkz.DxcePg.yRNGoMc1-SF4BCumedw_hqzjgsM')
