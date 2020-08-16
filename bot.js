const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Parte inicial do bot

const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const { networkInterfaces } = require('os');
const client = new Discord.Client();


// Embeds
const ajudaEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Ajuda:')
    .setFooter('| Brisolo bot | Aceitamos ideias, caso tiver envie para Brisolo#8522.| Desde 1/7/2020 ', 'https://lh3.googleusercontent.com/WhSNW8wZJ7jvaVUBrTiAJ_b4YOuVj6aTHwAky_YTeeJTrAX7H3p9Q4Ns9CVDC9-OixUKOQ=s85')
    .addFields(
        { name: '$ocg', value: 'É o comando que mostra a oc do gafuei'},
        { name: '$ocb', value: 'É o comando que mostra a oc do Brisolo'},
        { name: '$help', value: 'Comando de ajuda'},
        { name: '$prefixo', value: 'Comando que mostra o prefixo'},
        { name: '$ocd', value: 'É o comando que mostra a oc do DarkHuela'},
        { name: '$hmm', value: 'hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'},
        { name: '$patch', value: 'Mostra as Patch Notes'},
        { name: '$subnin10dista', value: 'Mostra quantos inscritos o canal Nin10dista tem'},
        { name: '$subbrisolo', value: 'Mostra quantos inscritos o canal Brisolo tem'},
        { name: '$subplaysp3', value: 'Mostra quantos inscritos o canal Play Sp3 tem'},
        { name: '$subgafuei', value: 'Mostra quantos inscritos o canal Gafuei Omega tem'},
        { name: '$subdark', value: 'Mostra quantos inscritos o DarkHuela tem'}
    )

    const patchEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Patch Notes')
    .setDescription('As patch notes da atualização 1.1.1')
    .setFooter('| Brisolo bot | Aceitamos ideias, caso tiver envie para Brisolo#8522.| Desde 1/7/2020 ', 'https://lh3.googleusercontent.com/WhSNW8wZJ7jvaVUBrTiAJ_b4YOuVj6aTHwAky_YTeeJTrAX7H3p9Q4Ns9CVDC9-OixUKOQ=s85')
    .addFields(
      { name: '$sub<nome entre quatro canais> ', value: 'Mostra os inscritos desde a atualização. é editado a cada mês. Canais que funcionam são: Gafuei Omega<$subgafuei>, Play Sp3<$subplaysp3>, Brisolo<$subbrisolo>, DarkHuela<$subdark> e Nin10dista<$subnin10dista>.'}
    )



client.on('ready', () => {
  console.log(`Logado como ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '$ocb') {
    msg.reply('Aí a oc do Brisolo https://lh3.googleusercontent.com/R4Rf6zyB1PgoaDzcFC4rfUaHYU1465oVP0UCSZMA2G2e0HLW7vrdSpwu9M-YUyCM2qr5j0c=s85')
  }
});

client.on('message', msg => {
    if (msg.content === '$ocg') {
        msg.reply('Aí a oc do Gafuei https://i.imgur.com/e30J9pC.png')
    }
});

client.on('message', msg => {
    if (msg.content === '$help') {
        msg.reply(ajudaEmbed);
    }
});

client.on('message', msg => {
    if (msg.content === '$prefixo') {
      msg.reply('Acho q tu ja sabe '-' ')
    }
})

client.on('message', msg => {
    if (msg.content === '$ocd') {
      msg.reply('Aí a oc do DarkHuela https://media.discordapp.net/attachments/727977391221243986/739527340316688514/237_Sem_Titulo_20200801234717.png?width=433&height=433')
    }
})

client.on('message', msg => {
    if (msg.content === '$hmm'){
      msg.reply('hmmm')
    }
})

client.on('message', msg => {
  if (msg.content === '$hmmm'){
    msg.reply('hmmmmmmmmmmmmmmmm')
  }
})

client.on('message', msg => {
    if (msg.content === '$patch'){
      msg.reply(patchEmbed)
    }
})


// Função inscritos

// Variaveis
var nin10dista = 315;
var brisolo = 64;
var playsp3 = 222;
var gafuei = 228;
var dark = 117;

// Nin10dista
client.on('message', msg => {
    if (msg.content === '$subnin10dista'){
        msg.reply(`Do dia 16/07/2020 O canal Nin10dista está com ${nin10dista} inscritos`)
    }
})

// Brisolo
client.on('message', msg => {
    if (msg.content === '$subbrisolo'){
        msg.reply(`Do dia 16/07/2020 O canal Brisolo está com ${brisolo} inscritos`)
    }
})

// Play Sp3
client.on('message', msg => {
  if (msg.content === '$subplaysp3'){
      msg.reply(`Do dia 16/07/2020 O canal Play Sp3 está com ${playsp3} inscritos`)
  }
})

// Gafuei Omega
client.on('message', msg => {
  if (msg.content === '$subgafuei'){
      msg.reply(`Do dia 16/07/2020 O canal Gafuei Omega está com ${gafuei} inscritos`)
  }
})

// Darkhuela
client.on('message', msg => {
  if (msg.content === '$subdark'){
      msg.reply(`Do dia 16/07/2020 O canal DarkHuela está com ${dark} inscritos`)
  }
})

client.login(config.token);
