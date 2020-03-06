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
client.on('ready', () => {
    if (client.user === null)
        return;
    // tslint:disable-next-line:no-console
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async (msg) => {
    if (msg.content !== '/jiho')
        return;
    if (msg.member === null)
        return;
    if (msg.member.voice.channel) {
        const connect = await msg.member.voice.channel.join();
        const dispatcher = connect.play('http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download', { volume: 0.2 });
        dispatcher.on('finish', () => connect.disconnect());
    }
    else {
        msg.reply('ボイスチャンネルに入ってください☆');
    }
});
client.login(process.env.DISCORD_TOKEN);
