import * as Discord from 'discord.js'

/**
 *
 * @param member {Discord.GuildMember | null} 役職かメンバー
 * @param url
 * @param volume
 */
const soundPlay = async (member: Discord.GuildMember | null, url: string, volume: number) => {
  const connect = await member?.voice.channel?.join()
  connect?.play(url, {volume: volume})
  // const dispatcher = connect?.play(url, {volume: volume})
  // dispatcher?.on('finish', () => connect?.disconnect())
}

const reply = 'あんたがボイスチャンネルに入ってないと喋れないじゃないの！'

export const almage = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'https://owncloud.s4m0r1.me/index.php/s/Qm7r7qdZXJEDbsy/download'
  soundPlay(msg.member, url, 0.5)
  console.log('almage')
}

export const yabai = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'https://owncloud.s4m0r1.me/index.php/s/TgQLRPNxXbtRXz2/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabai')
}

export const yabaiwayo = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'http://owncloud.s4m0r1.me/index.php/s/WyLnZa3y4LS9er9/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabaiwayo')
}

export const yabaidesu = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'http://owncloud.s4m0r1.me/index.php/s/gA4yMyTpJ6wYLra/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabaidesu')
}

export const yabayaba = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'http://owncloud.s4m0r1.me/index.php/s/cHbAwR6DJ8Zy53E/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabayabai')
}

export const yabayabai = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'http://owncloud.s4m0r1.me/index.php/s/BBbBtPz2WcLRjgY/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabayabai')
}

export const yabaislow = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'http://owncloud.s4m0r1.me/index.php/s/3FTLEWHXP6yjScp/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabayabai')
}

export const yabaiotwr = (msg: Discord.Message) => {
  if (!msg.member?.voice.channel) {
    msg.reply(reply)
    return
  }

  const url = 'http://owncloud.s4m0r1.me/index.php/s/eJX8Ax98SGyQGAy/download'
  soundPlay(msg.member, url, 0.3)
  console.log('yabayabai')
}
