"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var soundPlay = function (member, url, volume) { return __awaiter(void 0, void 0, void 0, function () {
    var connect;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4, ((_a = member === null || member === void 0 ? void 0 : member.voice.channel) === null || _a === void 0 ? void 0 : _a.join())];
            case 1:
                connect = _b.sent();
                connect === null || connect === void 0 ? void 0 : connect.play(url, { volume: volume });
                return [2];
        }
    });
}); };
var reply = 'あんたがボイスチャンネルに入ってないと喋れないじゃないの！';
exports.almage = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'https://owncloud.s4m0r1.me/index.php/s/Qm7r7qdZXJEDbsy/download';
    soundPlay(msg.member, url, 0.5);
    console.log('almage');
};
exports.yabai = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'https://owncloud.s4m0r1.me/index.php/s/TgQLRPNxXbtRXz2/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabai');
};
exports.yabaiwayo = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'http://owncloud.s4m0r1.me/index.php/s/WyLnZa3y4LS9er9/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabaiwayo');
};
exports.yabaidesu = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'http://owncloud.s4m0r1.me/index.php/s/gA4yMyTpJ6wYLra/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabaidesu');
};
exports.yabayaba = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'http://owncloud.s4m0r1.me/index.php/s/cHbAwR6DJ8Zy53E/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabayabai');
};
exports.yabayabai = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'http://owncloud.s4m0r1.me/index.php/s/BBbBtPz2WcLRjgY/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabayabai');
};
exports.yabaislow = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'http://owncloud.s4m0r1.me/index.php/s/3FTLEWHXP6yjScp/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabayabai');
};
exports.yabaiotwr = function (msg) {
    var _a;
    if (!((_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
        msg.reply(reply);
        return;
    }
    var url = 'http://owncloud.s4m0r1.me/index.php/s/eJX8Ax98SGyQGAy/download';
    soundPlay(msg.member, url, 0.3);
    console.log('yabayabai');
};
