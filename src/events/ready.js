const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField, ActivityType } = require ("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice")
const Emojis = require("../haren/emojis.json")
const Colors = require("../haren/colors.json")
const Logs = require("../haren/logs.json")
const db = require("croxydb")
const { autoSaver } = require("../haren/yedek.js")
require("advanced-logs")
console.setConfig({
  background: false,
  timestamp: false
})

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
      
  const channels = client.channels.cache.get("1180780666514841610")
    
  const VoiceConnection = joinVoiceChannel({
    channelId: channels.id,
    guildId: channels.guild.id,
    adapterCreator: channels.guild.voiceAdapterCreator,
  });
      
      const list = [
          `${db.fetch(`UptimeLink`).length || 0}/75 Linki Uptime Ediyor!`,
          `7/24 #Kesintisiz`,
          `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıya Hizmet Veriyor`
    ]
      
      setInterval(() => {
              client.user.setPresence({
              activities: 
              [
           {
            name: list[Math.floor(Math.random() * list.length)], 
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/5484867486465"
          }
        ]
    })
      }, 4000)
    console.success(``, ` Bot aktif.`)
    const başlama = `<t:${Math.floor(client.readyAt / 1000)}:R>`
    const Durum = new EmbedBuilder()
      .setColor(Colors.Green)
      .setDescription(`# Projeler Uptime Edilmeye Başlıyor!\n \n> <a:onaylandi:1197504725411713095> **Bot aktif oldu!**\n \n> <a:ayarlar:1197505634963292180> **Son Başlama Zamanım** ${başlama}\n \n> <a:reddeveloper:1197506549829079040> **__2313 Uptime__**`) 
      .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
      .setTimestamp()
     client.channels.cache.get(Logs.OtoDurum).send({embeds: [Durum]})
      
    setInterval(() => {autoSaver(client)}, 86400000) 

  }
}