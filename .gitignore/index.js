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
   	 if(message.content.startsWith(prefix+"aide")) {
    		let args = message.content.split(' ')
    		args.shift()
       		return message.channel.send("@here , "+ message.author.username+" a besoin d'aide sur ce sujet : "+args.join(' ')+". Il se trouve dans le channel : "+message.channel.name);
 		

 		}
 	 if (message.content === prefix+'ping'){
 			let ping = message.author.client.ping
 			message.author.createDM().then(function (channel){
 				return channel.send('Votre ping est de : '+ping+'ms')
 			})

 		}
 	 if (message.content === prefix+'help'){
 	 	message.channel.send("Voici la liste des commandes disponible : \n - !aide <message> Sert à notifier tout les membres présents avec votre message (A utiliser en cas de véritable besoin d'aide)\n - !ping Donne votre ping en milliseconde")

 	 }
 	 else{
 	 	message.reply("Cette commande n'existe pas.\n Voici la liste des commandes disponible : \n - !aide <message> Sert à notifier tout les memprésents avec votre message (A utiliser en cas de véritable besoin d'aide)\n - !ping Donne votre ping en milliseconde")
 	 }
 	}
 })
 bot.login('NTMyNDM2MzQ5MTM1ODgwMTkz.DyC3YQ.D21yzTObVuCZE7haiz88k3gBd9Y')