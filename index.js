const Discord = require('discord.js')
const DiscordVoice = require('@discordjs/opus')
const client = new Discord.Client()
const cron = require('node-cron');
require('dotenv').config();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function jiho() {
  const broadcast = client.voice.createBroadcast();
  broadcast.play('./jiho_24.wav', {
    volume: 0.3
  });
  for (const connection of client.voice.connections.values()) {
    connection.play(broadcast);
  }

};

client.on('message', msg => {
  if (msg.content === 'jiho') {
    const broadcast = client.voice.createBroadcast();
    broadcast.play('./jiho_24.wav', {
      volume: 0.3
    });
    for (const connection of client.voice.connections.values()) {
      connection.play(broadcast);
    }
  }
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


//サウンド周りの記述
client.on('message', msg => {
  if (msg.content === 'debug_sound') {
    const broadcast = client.voice.createBroadcast();
    broadcast.play('./sound.mp3');
    // Object.keys(client.voice.connections.values()).forEach(connection => {connection.play(broadcast)});
    for (const connection of client.voice.connections.values()) {
      connection.play(broadcast);
    }
  }
});


client.on('message', msg => {
  if (msg.content === 'almage') {
    const broadcast = client.voice.createBroadcast();
    broadcast.play('./almage.mp3', {
      volume: 0.5
    });
    for (const connection of client.voice.connections.values()) {
      connection.play(broadcast);
    }
  }
});


client.on('message', msg => {
  if (msg.content === 'warabi') {
    const broadcast = client.voice.createBroadcast();
    broadcast.play('./warabi.mp3', {
      volume: 0.5
    });
    for (const connection of client.voice.connections.values()) {
      connection.play(broadcast);
    }
  }
})

client.on('message', msg => {
  if (msg.content === 'jiho') {
    const broadcast = client.voice.createBroadcast();
    broadcast.play('./jiho_24.wav', {
      volume: 0.3
    });
    for (const connection of client.voice.connections.values()) {
      connection.play(broadcast);
    }
  }
})

//入場
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      connection = await message.member.voice.channel.join();
      // const broadcast = client.voice.createBroadcast();
      // const dispatcher = broadcast.play('./audio.mp3');

    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});


//退場
client.on('message', async message => {
  if (message.content === '/disconnect') {
    if (message.member.voice.channel) {
      connection.disconnect();
    }
  }
});

//Schedule
cron.schedule('0 0 0 * * *', () => {
  jiho()
},{
  timezone: "Asia/Tokyo"
});



client.login(process.env.DISCORD_TOKEN)