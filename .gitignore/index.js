const Discord = require('discord.js')
const bot = new Discord.Client()
let prefix = '!'
const fs = require('fs')
let xp = require('./xp.json')
let convert = require('./convert.json')
let compteur = 0
function dechiffrecesar(txt,decalage){
  var alpha
  var idx
  var chiffre = ""
  decalage = 26-decalage
  txt = txt.toUpperCase()
  var Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  k=parseInt(decalage)
  while (k<0){k+=26}
   while(k>25){k-+26}
  for(var count = 0; count < txt.length; count++) {
      alpha = txt[count]
      if (alpha == " "){
          chiffre+=" "
      }
      else{
          idx = Alphabet.indexOf(alpha);
          if(idx > -1){
              chiffre += Alphabet[idx+k]
          }
      }
  
  }
  return chiffre

bot.on('ready', function (){
  console.log("I'm ready !")
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
  
  if (!message.guild)return;
  if(message.author.tag === 'Groovy#7254' || message.author.tag === 'Pasteur Bot#6999') return;
  xpAdd = Math.floor(Math.random()*7)+8;
  console.log(message.author.username+' : +'+xpAdd);
  if(!xp.count){
    xp.count = 0
  }
  if(!convert[message.author.username]){
    let count = xp.count
    xp[count] = {
      xp : 0,
      level : 1,
      count : xp.count,
      username : message.author.username
    }
    convert[message.author.username] = {
      number : xp.count
    }
    xp.count = xp.count + 1
  };
  let ID = convert[message.author.username].number
   
  let curxp = xp[ID].xp;
  let curlvl = xp[ID].level;
  xp[ID].xp = curxp + xpAdd
  let nxtLvl= xp[ID].level*300;
  if(nxtLvl <= xp[ID].xp){
    xp[ID].level = curlvl + 1
    console.log('Niveau '+xp[ID].level+' passé pour '+message.author.username+' !')
    lvlUP = new Discord.RichEmbed()
        .setTitle('Niveau '+xp[ID].level+' passé pour '+message.author.username+' !')
      message.channel.send(lvlUP)
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err)=>
      console.log(err))
  fs.writeFile("./convert.json", JSON.stringify(convert), (err)=>
      console.log(err))

  if (message.content.startsWith(prefix)) {
   if(message.channel.id != '536202755312713749' && message.channel.id != '536963087543304232' && message.channel.id != '536789464068915222'){
    return console.log('check !')
   }
   if(message.content === prefix +'lvl'){
    message.channel.send(message.author.username + ', Vous avez '+xp[ID].xp+'xp /'+xp[ID].level*300+' au niveau '+xp[ID].level)
   }
     if(message.content.startsWith('!xp')){

    let args = message.content.split(' ')
    let role = message.guild.roles.find(role => role.name === 'Professeur')
      let role2 = message.guild.roles.find(role => role.name === 'Modérateur')
      if(message.member.roles.has(role.id) || message.member.roles.has(role2.id)){
        if(args[1] === 'list'){
            while (compteur < xp.count){
              message.channel.send(xp[compteur].username+" : xp = "+xp[compteur].xp+" niveau = "+xp[compteur].level)
              compteur++
            }
        }         
        



    }
  }
     if(message.content.startsWith(prefix+"aide")) {
        let args = message.content.split(' ')
        args.shift()
        return message.channel.send("@here , "+ message.author.username+" a besoin d'aide sur ce sujet : "+args.join(' '));
    

    }
   if(message.content.startsWith(prefix+'chcesar')){
    args= message.content.split(' ')
    var decalage = args[1]
    var txt = ""
    arraylength = args.length
    for(var count = 2; count<arraylength; count++){
      txt += args[count]+" "
    }
    var alpha
   var idx
   var chiffre = ""
   txt = txt.toUpperCase()
   var Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
   k=parseInt(decalage)
   while (k<0){k+=26}
    while(k>25){k-+26}
   for(var count = 0; count < txt.length; count++) {
       alpha = txt[count]
       if (alpha == " "){
           chiffre+=" "
       }
       else{
           idx = Alphabet.indexOf(alpha);
          if(idx > -1){
               chiffre += Alphabet[idx+k]
             }
         }
  
     }
  
   message.reply(chiffre)
   }
   if(message.content.startsWith(prefix+'decesar')){
    args= message.content.split(' ')
    var decalage = args[1]
    var txt = ""
    arraylength = args.length
    for(var count = 2; count<arraylength; count++){
      txt += args[count]+" "
    }
    var alpha
  var idx
  var chiffre = ""
  decalage = 26-decalage
  txt = txt.toUpperCase()
  var Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  k=parseInt(decalage)
  while (k<0){k+=26}
   while(k>25){k-+26}
  for(var count = 0; count < txt.length; count++) {
      alpha = txt[count]
      if (alpha == " "){
          chiffre+=" "
      }
      else{
          idx = Alphabet.indexOf(alpha);
          if(idx > -1){
              chiffre += Alphabet[idx+k]
          }
      }
  
  }
    message.reply(chiffre)
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
          .addField("!lvl","Permet d'afficher ton xp et ton niveau")
          
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
      .addField('Langage de programmation du bot :', 'NodeJS')
      .addField('Version du bot :', '1.1.0')
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
 
  
 }
 fs.writeFile("./xp.json", JSON.stringify(xp), (err)=>
      console.log(err))
 fs.writeFile("./convert.json", JSON.stringify(convert), (err)=>
      console.log(err))
 })
 bot.login(process.env.TOKEN)   
