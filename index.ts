import * as Discord from 'discord.js'
import * as DiscordVoice from '@discordjs/opus'
import * as dotenv from 'dotenv'
import * as cron from 'node-cron'

// setting
const client: any = new Discord.Client();
dotenv.config();

// Login message
client.on("ready", () => {
    // tslint:disable-next-line:no-console
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
    if (msg.content === '/jiho') {
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join();
            const dispatcher = connection.play("http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download");
            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        } else {
            msg.reply("ボイスチャンネルに入ってください☆")
        }
    }
})



client.login(process.env.DISCORD_TOKEN);