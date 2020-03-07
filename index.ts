import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
import * as cron from 'node-cron'

// setting
const client: Discord.Client = new Discord.Client()
dotenv.config()

// Login message
client.on('ready', () => {
    // tslint:disable-next-line:no-console
    console.log(`Logged in as ${client.user?.tag}!`)
})

client.on("voiceStateUpdate", async (oldstate: Discord.VoiceState, newstate: Discord.VoiceState) => {
    if(newstate.member === null) return// tslint:disable-next-line:no-console
    if(newstate.member.voice.channel === null) return
    if(newstate.member.joinedAt) {
        const connect = await newstate.member.voice.channel.join()
        cron.schedule('0 0 * * * ', () => {
            const dispatcher = connect.play('http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download', { volume: 0.2 })
            //  tslint:disable-next-line:no-console
            console.log('TimeSignal at 24')
            dispatcher.on('finish', () => connect.disconnect())
        }, {
            scheduled: true,
            timezone: "Asia/Tokyo"
        });
    }
})

client.login(process.env.DISCORD_TOKEN)// tslint:disable-next-line:no-console