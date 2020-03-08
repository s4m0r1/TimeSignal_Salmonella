import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
import {
  almage,
  yabai,
  yabaiwayo,
  yabaidesu,
  yabayaba,
  yabayabai,
  yabaislow,
  yabaiotwr,
} from './message'

const status = {
  DevMode: false,
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
  if (msg.content === '/yabai=DevMode') {
    status.DevMode = !status.DevMode
    msg.reply(status.DevMode ? 'DevModeになったわよ！' : 'DevModeを解除したわ')
    console.log('Switch DevMode')
    return
  }

  switch (msg.content) {
    case '/yabai=up':
    case '/yabai=down':
  }

  // prettier-ignore
  switch (msg.content) {
    case '/almage':
      return almage(msg)
    case '/yabai': case '/yab':
      return yabai(msg)
    case '/yabaiwayo': case '/yabw':
      return yabaiwayo(msg)
    case '/yabaidesu': case '/yabd':
      return yabaidesu(msg)
    case '/yabayaba': case '/yaby':
      return yabayaba(msg)
  }

  if (!status.DevMode) return

  switch (msg.content) {
    case '/yabayabai':
    case '/yabaiyabai':
      return yabayabai(msg)
    case '/yabaislow':
      return yabaislow(msg)
    case '/yabaiotwr':
      return yabaiotwr(msg)
  }
})

client.login(process.env.CAL_TOKEN)
