"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = __importStar(require("discord.js"));
const dotenv = __importStar(require("dotenv"));
// setting
const client = new Discord.Client();
dotenv.config();
// Login message
client.on("ready", () => {
    // tslint:disable-next-line:no-console
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", async (msg) => {
    if (msg.content === '/jiho') {
        if (msg.member.voice.channel) {
            // const connection: any = msg.member.voice.channel.join();
            const connection = await msg.member.voice.channel.join();
            const dispatcher = connection.play("http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download");
            dispatcher.on('finish', () => {
                connection.disconnect();
            });
            // msg.member.voiceChannel.join()
            // .then(connection => {
            //     connection.play("http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download");
            // });
            // const broadcast: any = client.voice.createBroadcast();
            // broadcast.play("http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download")
            // connection.play(broadcast)
        }
        else {
            msg.reply("ボイスチャンネルに入ってください☆");
        }
    }
});
// async function jiho(connection) {
//     connection.play("http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download");
// }
client.login(process.env.DISCORD_TOKEN);
