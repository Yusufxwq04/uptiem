const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField } = require ("discord.js")
const Emojis = require("../haren/emojis.json")
const Colors = require("../haren/colors.json")
const db = require("croxydb")

module.exports = {
  slash: true, 
  enable: true, 
  dbl: false, 
  name: ['uptime-sistemi'],  
  description: 'Uptime sistemini kurarsınız.',
  options: [
    { 
      name: "kanal", 
      description: "Ayarlanacak kanal.", 
      type: 7,
      required: false
    }
  ],
  
async execute(client, interaction) {
  
  await interaction.deferReply()
  
  const Kanal = interaction.options.getChannel('kanal') || interaction.channel
  
  const YetkiYok = new EmbedBuilder()
    .setColor(Colors.Red)
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
    .setDescription(`${Emojis.Çarpı} Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`)
    .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
  if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.followUp({embeds: [YetkiYok]})
  const MetinKanalı = new EmbedBuilder()
    .setColor(Colors.Red)
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
    .setDescription(`${Emojis.Çarpı} Sistemi sadece metin kanalına ayarlayabilirsin.`)
    .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
  if(Kanal.type !== ChannelType.GuildText) return await interaction.followUp({embeds: [MetinKanalı]})
  
  const Oldu = new EmbedBuilder()
    .setColor(Colors.Green)
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
    .setDescription(`${Emojis.Tik} Uptime sistemi ${Kanal} kanalına ayarlandı.`)
    .setFooter({text:client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
  await interaction.followUp({embeds: [Oldu]})
  
  const Uptime = new EmbedBuilder()
    .setColor(Colors.Yellow)
    .setAuthor({name: interaction.guild.name, iconURL: interaction.guild.iconURL()}) 
    .setDescription(`
> <a:mcs_hello:1190168506570911785> **2313 Uptime sistemine hoşgeldiniz.**
            
> Aşağıdaki \`Ekle\` - \`Sil\` - \`Liste\` - \`Düzenle\` butonları ile sistemi kullanabilirsiniz.
             
> <a:bakimda:1190169055169085510> Diğer komutlarıma erişmek için </yardım:0> komutunu kullanabilirsiniz.
`)
    .setFooter({text:client.user.username, iconURL: client.user.avatarURL()}) 
    .setImage(`https://cdn.discordapp.com/attachments/1147223060592726029/1187800114811641936/standard.gif?ex=6598340f&is=6585bf0f&hm=e96802501a0589dea4982fdef1ba7a26bd559e5dbb0a9b9329290af3e85af4bd&`)
    .setTimestamp()
  const Butonlar = new ActionRowBuilder()
    .addComponents(new ButtonBuilder()
      .setEmoji(Emojis.Link)
      .setLabel("Ekle")
      .setStyle(ButtonStyle.Secondary)
      .setCustomId("ekle"))
    .addComponents(new ButtonBuilder()
      .setEmoji(Emojis.Sil)
      .setLabel("Sil")
      .setStyle(ButtonStyle.Secondary)
      .setCustomId("sil"))
    .addComponents(new ButtonBuilder()
      .setEmoji(Emojis.Dosya)
      .setLabel("Liste")
      .setStyle(ButtonStyle.Secondary)
      .setCustomId("liste"))
    .addComponents(new ButtonBuilder()
      .setEmoji(Emojis.Yenile)
      .setLabel("Düzenle")
      .setStyle(ButtonStyle.Secondary)
      .setCustomId("düzenle"))
  Kanal.send({embeds: [Uptime], components: [Butonlar]})
  }
}