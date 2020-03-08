import * as Discord from 'discord.js'
import {Status} from './type'

const round = (v: number): number => Math.round(v * 10) / 10

export const calStatus = (msg: Discord.Message, status: Status) => {
  msg.reply(`音量は${round(status.Volume)}よ！${status.Mode ? '(DevMode)' : ''}`)
  console.log('cal status')
}

export const volumeUp = (msg: Discord.Message, volume: number): number => {
  if (round(volume) >= 1) {
    msg.reply('これ以上音量を上げられないわ')
  } else {
    volume += 0.1
    msg.reply(`音量を上げたわよ！(${round(volume)})`)
  }
  console.log('volume up')
  return volume
}

export const volumeDown = (msg: Discord.Message, volume: number): number => {
  if (round(volume) <= 0.1) {
    msg.reply('これ以上音量を下げられないわ')
  } else {
    volume -= 0.1
    msg.reply(`音量を下げたわよ！(${round(volume)})`)
    console.log('volume down')
  }
  return volume
}

export const switchMode = (msg: Discord.Message, mode: boolean): boolean => {
  mode = !mode
  msg.reply(mode ? 'DevModeになったわよ！' : 'DevModeを解除したわ')
  console.log('switch devMode')
  return mode
}
