const fs = require('fs'); //please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "badolbot007",
    version: "1.0",
    author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://www.facebook.com/tarek.20.king
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "badol":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n Boss ekhon bg ok",
            attachment: fs.createReadStream("scripts/cmds/BADOL-BOT-007/badol.mp3"),
          });
          await api.setMessageReaction("🤟", event.messageID, event.threadID, api);
        default:
          return;
      }
    }
  }
};
