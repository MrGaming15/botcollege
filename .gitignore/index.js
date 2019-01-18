const Discord = require('discord.js')
const bot = new Discord.Client()
let prefix = '!'
bot.on('ready', function (){
	bot.user.setActivity('!help', { type: 'LISTENING' })
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
 	if (message.content.startsWith(prefix)) {
 	 if (!message.guild)return;
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
      .addField('!aide', "Sert à notifier tout les membres présents avec votre message (A utiliser en cas de véritable besoin d'aide)")
      .addField('!ping', "Donne votre ping en milliseconde")
      .addField('!ressources', "Permet d'obtenir le lien vers les ressources.")
      .addField('!infos', "Donne des informations sur le bot et le serveur Discord.")
 	 	  
 	 	return message.channel.send(embed)
 	 	
 	 }
 	 if(message.content === prefix+'ressources'){
 	 	return message.channel.send('Voici le lien vers les ressources : https://bit.ly/2Me3Mn6')
 	 
 	 }
 	 if(message.content === prefix+'infos'){
    let URL = message.author.avatarURL
    let name = message.author.tag
 	 	let size = message.client.users.size
 	 	size = size-2
    let connectés = message.guild.members.filter(({ presence }) => presence.status !== 'offline').size;
 	 	const embed = new Discord.RichEmbed()
 	 	  .setAuthor('Collège Louis Pasteur (15)',message.author.avatarURL)
 	 	  .addField('Langage de programmation :', 'NodeJS')
 	 	  .addField('Bibliothèque :', 'discord.js 11.4.2')
 	 	  .addField('Version du bot :', '1.0.0')
 	 	  .addField('Nombre de personnes connectés :', connectés+' / '+size)
 	 	  .addField('Développeur :', "Mr_gaming_15#6367")
      .addField('Demander par :', name)
 	 	  .setColor('#00ffff')
 	 	message.channel.send(embed)
    
 	 }
   if(message.content.startsWith('!event')){
    let role = message.guild.roles.find(role => role.name === 'Professeur')
    let role2 = message.guild.roles.find(role => role.name === 'Modérateur')
    if(message.member.roles.has(role.id) || message.member.roles.has(role2.id)){
      let args = message.content.split(' ')
      args.shift()
      return message.channel.send('@here, __**'+args.join(' ')+'**__')
    }
    if(!message.member.roles.has(role.id) || !message.member.roles.has(role2.id)){
      return message.reply("Tu n'as pas le droit d'utiliser cette commande !")
    }
   }

 	 else{
 	 	message.channel.send("Je n'ai pas compris :thinking:. Tapez `!help` pour plus d'information.")
 	 }
 	 

 	 
 	 
 	 	 
 	 	 
 	
 }
 })
 bot.login('NTMyNDM2MzQ5MTM1ODgwMTkz.DyL2HQ.MkpROVBdupwuiufHtTQjdesJNmc') 	
