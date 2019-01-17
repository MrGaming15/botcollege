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
 	 	  .setDescription("- !aide <message> Sert à notifier tout les membres présents avec votre message (A utiliser en cas de véritable besoin d'aide)\n - !ping Donne votre ping en milliseconde\n - !ressource Permet d'obtenir le lien vers les ressources.");
 	 	return message.channel.send(embed)
 	 	
 	 }
 	 if(message.content === prefix+'ressource'){
 	 	return message.channel.send('Voici le lien vers les ressources : https://bit.ly/2Me3Mn6')
 	 
 	 }
 	 if(message.content === prefix+'infos'){
 	 	let size = message.client.users.size
 	 	size = size-1
 	 	const embed = new Discord.RichEmbed()
 	 	  .setAuthor('Collège Louis Pasteur (15)',message.client.user.avatarURL)
 	 	  .addField('Langage de programmation :', 'NodeJS')
 	 	  .addField('Bibliothèque :', 'discord.js')
 	 	  .addField('Version du bot :', '1.0.0')
 	 	  .addField('Nombre de personne sur le serveur :', size)
 	 	  .addField('Développeur :', "Mr_gaming_15#6367")
 	 	  .setColor('#0000ff')
 	 	message.channel.send(embed)
 	 }
 	 else{
 	 	message.channel.send("Je n'ai pas compris :thinking:. Tapez !help pour plus d'information.")
 	 }
 	 

 	 
 	 
 	 	 
 	 	 
 	
 }
 })
 bot.login(process.env.TOKEN) 	
