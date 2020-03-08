import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
import {Status} from './type'
import {calStatus, volumeUp, volumeDown, switchMode} from './status'
import {
  yabai,
  yabaiwayo,
  yabaidesu,
  yabayaba,
  yabayabai,
  yabaislow,
  yabaiotwr,
  almage,
} from './message'

const status: Status = {
  Mode: false,
  Volume: 0.3,
}

const client: Discord.Client = new Discord.Client()
dotenv.config()

client.on('ready', () => console.log(`Logged in as ${client.user?.tag}!`))

client.on('voiceStateUpdate', async (_: Discord.VoiceState, state: Discord.VoiceState) => {
  if (!state.member?.joinedAt) return
  await state.member?.voice.channel?.join()
})

client.on('message', async (msg: Discord.Message) => {
  switch (msg.content) {
    case '/cal':
      return calStatus(msg, status)
    case '/cal=up':
      return (status.Volume = volumeUp(msg, status.Volume))
    case '/cal=down':
      return (status.Volume = volumeDown(msg, status.Volume))
    case '/cal=mode':
      return (status.Mode = switchMode(msg, status.Mode))
  }

  // prettier-ignore
  switch (msg.content) {
    case '/yabai': case '/yab':
      return yabai(msg, status.Volume)
    case '/yabaiwayo': case '/yabw':
      return yabaiwayo(msg, status.Volume)
    case '/yabaidesu': case '/yabd':
      return yabaidesu(msg, status.Volume)
    case '/yabayaba': case '/yaby':
      return yabayaba(msg, status.Volume)
  }

  if (!status.Mode) return

  // prettier-ignore
  switch (msg.content) {
    case '/yabayabai': case '/yabaiyabai':
      return yabayabai(msg, status.Volume)
    case '/yabaislow':
      return yabaislow(msg, status.Volume)
    case '/yabaiotwr':
      return yabaiotwr(msg, status.Volume)
    case '/almage':
      return almage(msg, status.Volume)
  }
})

client.login(process.env.CAL_TOKEN)
