"use strict";
exports.__esModule = true;
var round = function (v) { return Math.round(v * 10) / 10; };
exports.calStatus = function (msg, status) {
    msg.reply("\u97F3\u91CF\u306F" + round(status.Volume) + "\u3088\uFF01" + (status.Mode ? '(DevMode)' : ''));
    console.log('cal status');
};
exports.volumeUp = function (msg, volume) {
    if (round(volume) >= 1) {
        msg.reply('これ以上音量を上げられないわ');
    }
    else {
        volume += 0.1;
        msg.reply("\u97F3\u91CF\u3092\u4E0A\u3052\u305F\u308F\u3088\uFF01(" + round(volume) + ")");
    }
    console.log('volume up');
    return volume;
};
exports.volumeDown = function (msg, volume) {
    if (round(volume) <= 0.1) {
        msg.reply('これ以上音量を下げられないわ');
    }
    else {
        volume -= 0.1;
        msg.reply("\u97F3\u91CF\u3092\u4E0B\u3052\u305F\u308F\u3088\uFF01(" + round(volume) + ")");
        console.log('volume down');
    }
    return volume;
};
exports.switchMode = function (msg, mode) {
    mode = !mode;
    msg.reply(mode ? 'DevModeになったわよ！' : 'DevModeを解除したわ');
    console.log('switch devMode');
    return mode;
};
