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
       	return message.channel.send("@here , "+ message.author.username+" a besoin d'aide sur ce sujet : "+args.join(' '));
 		

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
      .addField('!aide <message>', "Sert à notifier tout les membres présents avec votre message (A utiliser en cas de véritable besoin d'aide)")
      .addField('!ping', "Donne votre ping en milliseconde")
      .addField('!ressources', "Permet d'obtenir le lien vers les ressources.")
      .addField('!infos', "Donne des informations sur le bot et le serveur Discord.")
      .addField('!event <message>','notifie tout les membres présents avec le massage écrit en gras et souligné (utilisable uniquement par les professeur et les modérateurs)' )
 	  .addField("!salons","Vous permet de voir les utilités des salons et catégories")
 	  .addField('!warn <pseudo>','Avertie un utilisateur de sa mauvaise conduite (résérvé au Modérateurs, Administrateurs et Professeurs)')
 	 	return message.channel.send(embed)
 	 	
 	 }
 	 if(message.content === prefix+'ressources'){
 	 	return message.channel.send('Voici le lien vers les ressources : https://bit.ly/2Me3Mn6')
 	 
 	 }
 	 if(message.content === prefix+'infos'){
    let URL = message.author.avatarURL
    let name = message.author.tag
 	 	let size = message.client.users.size
 	 	size = size-3
    	let connectés = message.guild.members.filter(({ presence }) => presence.status !== 'offline').size;
    	connectés = connectés - 2
 	 	const embed = new Discord.RichEmbed()
 	 	  .setAuthor('Collège Louis Pasteur (15)',message.client.user.avatarURL)
 	 	  .addField('Langage de programmation :', 'NodeJS')
 	 	  .addField('Bibliothèque :', 'discord.js 11.4.2')
 	 	  .addField('Version du bot :', '1.0.0')
 	 	  .addField('Nombre de personnes connectés :', connectés+' / '+size)
 	 	  .addField('Développeur :', "Mr_gaming_15#6367")
          .addField('Demander par :', name)
 	 	  .setColor('#00ffff')
 	 	return message.channel.send(embed)
    
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
    if(message.content === prefix+'salons'){
    	const embed = new Discord.RichEmbed()
    	  .setAuthor('Collège Louis Pasteur (15)',message.client.user.avatarURL)
    	  .setTitle('Utilité des salons')
    	  .addField('Régles', 'Salon où se trouve les régles du serveur.')
    	  .addField('vos-questions', 'Salon où vous pouvez poser vos questions')
    	  .addField('salle-du-bot', 'Salon où vous pouvez utiliser le "Pasteur Bot" ')
    	  .addField('Reports-de-bugs', 'Si vous trouvez un bug dans un des bots merci de le renseigné ici')
    	  .addField('Idées', 'Salon où vous pouvez nous donner vos Idées')
    	  .addField("Catégories relative au classes (6e, 5e, 4e, 3e)","Ces catégories sont là pour vous aider dans vos cours et devoirs, et son là pour développer l'entre-aide entre les élèves")
    	  .addField("Catégorie détente", "Cette catégorie est là pour que vous puissiez vous détendre, écouter de la musique, parler en vocal lors d'une partie de jeu vidéo")
    	  .addField("détente", "Les salons détente sont là pour que vous puissiez vous détendre et discuter entre vous")
    	  .addField("Gamer Zone","Ces salons sont là pour que les personnes voulant jouer en équipe au jeux vidéos puissent discuter")
    	  .addField("Musique", "Ces salons sont là pour que vous puissiez écouter de la musique.")
    	  .addField("Report", "Ce salon vous permet de reporter les membres qui ne respectent pas les régles")
    	  .addField("Demandé par : ", message.author.tag)
    	message.channel.send(embed)
    }if(message.content.startsWith(prefix+'warn')){

    	let role = message.guild.roles.find(role => role.name === 'Professeur')
    	let role2 = message.guild.roles.find(role => role.name === 'Modérateur')
    		if(message.member.roles.has(role.id) || message.member.roles.has(role2.id)){
    			const args = message.content.slice(prefix.length).split(' ');
				const command = args.shift().toLowerCase();
    			


    			message.channel.send('@here, **'+message.author.username+'** a averti **'+args[0]+'**')


    		}
    		else{
    		message.reply("Vous n'avez pas la permission d'effectuer cette commande")
    		}
    }

 	 else{
 	 	message.channel.send("Je n'ai pas compris :thinking:. Tapez `!help` pour plus d'information.")
 	 }
 	 

 	 
 	 
 	 	 
 	 	 
 	
 }
 })
 bot.login('NTMyNDM2MzQ5MTM1ODgwMTkz.DyeZuA.nnLF3ymeVIKbIN-YxVkyAclzoQM') 	
