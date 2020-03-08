import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const soundPlay = async (member: Discord.GuildMember | null, url: string, volume: number) => {
  const connect = await member?.voice.channel?.join()
  connect?.play(url, {volume: volume})
  // const dispatcher = connect?.play(url, {volume: volume})
  // dispatcher?.on('finish', () => connect?.disconnect())
}

const reply = 'あんたがボイスチャンネルに入ってないと喋れないじゃないの！'

export const yabai = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAI as string, volume)
  console.log('sound yabai')
}

export const yabaiwayo = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAIWAYO as string, volume)
  console.log('sound yabaiwayo')
}

export const yabaidesu = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAIDESU as string, volume)
  console.log('sound yabaidesu')
}

export const yabayaba = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAYABA as string, volume)
  console.log('sound yabayabai')
}

export const yabayabai = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAYABAI as string, volume)
  console.log('sound yabayabai')
}

export const yabaislow = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAISLOW as string, volume)
  console.log('sound yabayabai')
}

export const yabaiotwr = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_YABAIOTWR as string, volume)
  console.log('sound yabayabai')
}

export const almage = (msg: Discord.Message, volume: number) => {
  if (!msg.member?.voice.channel) return msg.reply(reply)
  soundPlay(msg.member, process.env.URL_ALMAGE as string, volume)
  console.log('sound almage')
}
