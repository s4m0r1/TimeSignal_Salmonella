import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
import * as cron from 'node-cron'

// setting
const client: Discord.Client = new Discord.Client()
dotenv.config()

const soundPlay = async (member: Discord.GuildMember | null, url: string, volume: number) => {
  const connect = await member?.voice.channel?.join()
  const dispatcher = connect?.play(url, {volume: volume})
  dispatcher?.on('finish', () => connect?.disconnect())
}

// Login message
client.on('ready', () => console.log(`Logged in as ${client.user?.tag}!`))

client.on('voiceStateUpdate', (_: Discord.VoiceState, state: Discord.VoiceState) => {
  if (!state.member?.joinedAt) return

  cron.schedule('0 0 * * * ', async () => {
    const url = 'http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download'
    soundPlay(state.member, url, 0.2)
    console.log('TimeSignal at 24')
  },
  {
    scheduled: true,
    timezone: 'Asia/Tokyo',
  })
})

client.on('message', async (msg: Discord.Message) => {
  if (msg.content !== '/almage') return

  const url = 'https://owncloud.s4m0r1.me/index.php/s/Qm7r7qdZXJEDbsy/download'
  soundPlay(msg.member, url, 0.3)
  console.log('almage')
})

client.login(process.env.DISCORD_TOKEN)
