const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField } = require ("discord.js")
const Emojis = require("../haren/emojis.json")
const Colors = require("../haren/colors.json")
const db = require("croxydb")

module.exports = {
  slash: true, 
  enable: true, 
  dbl: false, 
  name: ['yardım'],  
  description: '2313 Uptime yardım menüsünü gösterir.',
  
async execute(client, interaction) {
  
  await interaction.deferReply()
  
  const Duyurular = db.fetch(`Duyurular`)
  let Duyuru
  if(!Duyurular) {
    Duyuru = `${Emojis.Kırmızı} \`Aktif bir duyuru bulunmuyor.\``
  } else {
    Duyuru = `${db.fetch(`Duyurular`).map(D => `> ${Emojis.Sağ} \`${D}\``).join("\n") || `${Emojis.Kırmızı} \`Aktif bir duyuru bulunmuyor.\``}`
  }
  const Yardım = new EmbedBuilder()
    .setColor(Colors.Green)
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()}) 
    .addFields(
      {
        name: `${Emojis.Duyuru} Bot duyuruları`,
        value: `${Duyuru}`
      },
      {
        name: `${Emojis.Bot} Bot komutları`,
        value: `
> <:gamesunucu_sunucu4:1190163549704695820> </istatistik:0> Botun istatistiklerini gösterir.

> <:gamesunucu_sunucu2:1190166352804200529> </ping:0> Botun gecikme sürelerini gösterir.

> <:home:1190163923274584125> </davet:0> Botun bağlantılarını gösterir.

> <:join:1190161447041384558> </link ekle:0> Sisteme link eklersiniz.

> <:leave:1190161575458373654> </link sil:0> Sistemdeki linkinizi silersiniz.

> <:ayarlar:1190161673747693660> </link düzenle:0> Sistemdeki linkinizi değiştirirsiniz.

> <:gamesunucu_center2:1190164808134299750> </link liste:0> Sisteme eklemiş olduğunuz linkleri gösterir.

> <:r_link:1190164593230757908> </link say:0> Sistemdeki linklerin sayısını gösterir.

> <:kullanici:1190165300503650406> </premium kontrol:0> Premium üyeliğinizi kontrol edersiniz.

> <:gamesunucu_center2:1190164808134299750> </promosyon kullan:0> Promosyon kodu kullanırsınız.

> <:icons_activities:1190167423131852832> </uptime sistemi:0> Sunucuya özel butonlu uptime sistemi kurarsınız.
`})
    .setFooter({text: client.user.username, iconURL: client.user.avatarURL()}) 
    .setTimestamp()
    .setImage(`https://cdn.discordapp.com/attachments/1177657687010455672/1194660155787329790/standard_4.gif?ex=65b128f8&is=659eb3f8&hm=7977f721fa158f5c8001e32952592d948535f0fe2a8ef76f91a61f68d81c539e&`)
  await interaction.followUp({embeds: [Yardım]})
  
  }
}
  