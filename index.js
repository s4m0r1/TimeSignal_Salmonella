"use strict";
var Discord = require("discord.js");
var DiscordVoice = require("@discordjs/opus");
var client = new Discord.Client();
var cron = require("node-cron");
require("dotenv").config();
