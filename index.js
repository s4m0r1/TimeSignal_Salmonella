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
const cron = __importStar(require("node-cron"));
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
client.on("voiceStateUpdate", async (oldstate, newstate) => {
    if (newstate.member === null)
        return;
    if (newstate.member.voice.channel === null)
        return;
    if (newstate.member.user.bot)
        return;
    if (newstate.member.joinedAt) {
        const connect = await newstate.member.voice.channel.join();
        cron.schedule('0 0 0 * * *', () => {
            const dispatcher = connect.play('http://owncloud.s4m0r1.me/index.php/s/mB5RDpXdE9CaHey/download', { volume: 0.2 });
            dispatcher.on('finish', () => connect.disconnect());
        }, {
            scheduled: true,
            timezone: "Asia/Tokyo"
        });
    }
});
client.login(process.env.DISCORD_TOKEN);
