const Discord = require('discord.js')
const bot = new Discord.Client()
let prefix = '!'
bot.on('ready', function (){
	bot.user.setActivity('le cours de Maths', { type: 'LISTENING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
	//bot.user.setAvatar('./avatar.png')
  //.then(console.log('Avatar appliqué avec succés !'))   
  //.catch(console.error)
  })
bot.on('guildMemberAdd', function(member){
	member.createDM().then(function (channel){
		return channel.send('Bienvenue sur le serveur '+ member.displayName)
	})
})
 bot.on('message', function(message){
 	if (message.content.startsWith('!')) {
 	 if (!message.guild){
 	 	message.reply('Je ne fonctionne que sur serveur.')
 	 	return
 	 }
   	 if(message.content.startsWith(prefix+"aide")) {
    		let args = message.content.split(' ')
    		args.shift()
       		return message.channel.send("@here , "+ message.author.username+" a besoin d'aide sur ce sujet : "+args.join(' ')+". Il se trouve dans le channel : "+message.channel.name);
 		

 		}
 	 if (message.content === prefix+'ping'){
 		let ping = message.author.client.ping
 		return message.channel.send('Votre ping est de '+ping+'ms')


 		}
 	 if (message.content === prefix+'help'){
 	 	const embed = new Discord.RichEmbed()
 	 	  .setAuthor('Collège Louis Pasteur (15)',message.client.user.avatarURL)
 	 	  .setTitle('Les commandes du serveur')
 	 	  .setColor('#FFFFFF')
 	 	  .setDescription("- !aide <message> Sert à notifier tout les membres présents avec votre message (A utiliser en cas de véritable besoin d'aide)\n - !ping Donne votre ping en milliseconde");
 	 	message.channel.send(embed)
 	 	
 	 	return
 	 }
 	if (!message.content === prefix+'help' || !message.content.startsWith(prefix+'aide') || !message.content === prefix+'ping' ){
 	 	message.reply("Je n'ai pas compris :thinking:. Tapez !help pour plus d'information. Si la commande que vous venez de taper est inscrite dans le !help mais ne fonctionne pas merci de contacter un Modérateur.")
 	}
 }
 })
 bot.login('NTMyNDM2MzQ5MTM1ODgwMTkz.DyDiPg.8nq45s7Zt6qDYp_7hKfL1Kb9pAI') 	
