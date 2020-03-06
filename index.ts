import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
import * as cron from 'node-cron'

// setting
const client: Discord.Client = new Discord.Client()
dotenv.config()

// Login message
client.on('ready', () => {
    if (client.user === null) return

    // tslint:disable-next-line:no-console
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async (msg: Discord.Message) => {
    if (msg.content !== '/jiho') return
    if (msg.member === null) return

    if (msg.member.voice.channel) {
        const connect = await msg.member.voice.channel.join()
        const dispatcher = connect.play('http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download', { volume: 0.2 })
        dispatcher.on('finish', () => connect.disconnect())
    } else {
        msg.reply('ボイスチャンネルに入ってください☆')
    }
})


client.login(process.env.DISCORD_TOKEN)