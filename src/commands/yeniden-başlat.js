const Discord = require('discord.js')
const Emojis = require("../haren/emojis.json")
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    slash: true,                                
    cooldown: 5,                              
  enable: true, 
  dbl: false, 
  name: ['yeniden-başlat'],  
  description: 'Bot sahibi özel komutu.',
  
    data: new SlashCommandBuilder()         
    .setName('yeniden-başlat')
    .setDescription('Bot sahibi özel komutu.')
    .setDMPermission(false),
              
    async execute(client, interaction) {   
      
      const YetkiYok = new EmbedBuilder()
      .setDescription(`${Emojis.Çarpı} Bu komutu kullanabilmek için **Bot sahibi** olmalısın.`)
      .setColor('Red')
      .setTitle("Hata")
        
      if(interaction.user.id !== "824626594224013322" && interaction.user.id !== "824626594224013322" && interaction.user.id !== "824626594224013322" && interaction.user.id !== "824626594224013322" && interaction.user.id !== "824626594224013322"){
      return interaction.reply({embeds: [YetkiYok]});
}
    
      const Başlatıldı = new EmbedBuilder()
         .setDescription(`${Emojis.Tik} **Bot yeniden başlatılıyor.**`)
         .setColor('Green')
         .setTitle('Başarılı')
         
      interaction.reply({embeds: [Başlatıldı]})
        
      setTimeout(() => {
      console.log(`Bot Yeniden Başlatılıyor`);
      process.exit(0);
      }, 2000) 
     
   }
}