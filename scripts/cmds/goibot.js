$cmd install oh.js const axios = require("axios");


module.exports = {

  config: {

    name: "bot",

    version: "1.0",

    author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007

    countDown: 5,

    role: 0,

    shortDescription: "no-prefix",

    longDescription: "Bot Will Reply You In English/Bangla Language",

    category: "no prefix",

    guide: {

      en: "{p}{n}",

    },

  },


  onStart: ({}) => {},


  onReply: async function ({ api, event }) {

    if (event.type == "message_reply") {

      const reply = event.body.toLowerCase();

      if (isNaN(reply)) {

        try {

          const response = await axios.get(

            `http://37.27.114.136:25472/sim?type=ask&ask=${encodeURIComponent(reply)}`

          );

          const rs = response.data.data.msg;

          await api.sendMessage(

            rs,

            event.threadID,

            (error, info) => {

              if (error) return console.error(`Failed to send message: ${error.message}`);

              global.GoatBot.onReply.set(info.messageID, {

                commandName: this.config.name,

                type: "reply",

                messageID: info.messageID,

                author: event.senderID,

              });

            },

            event.messageID

          );

        } catch (error) {

          console.error(`Failed to get an answer: ${error.message}`);

          api.sendMessage(

            "An error occurred while processing your request.",

            event.threadID,

            event.messageID

          );

        }

      }

    }

  },


  onChat: async function ({ api, event }) {

    try {

      const input = event.body.toLowerCase().trim();


      if (input === "Bot" || input === "bot") {

        const messages = [

          "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "আর একবার আমার নাম ধরে ডাকলে তোরে কোলে করে বেডরুমে নিয়ে আসব 😉", "Yes Dear, I Am Here...😗", "I Love you", "Miss YoU Beppy", "😁Smile I am Taking Selfy✌️🤳", "Block Your Babe And Purpose me 🙂💔", "Block Kardo Mujhe Warna Pyaar Hojayega💋", "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু", "That's Why I Love Everyone As More As You🤭", "আরে Bolo আমার জান ,কেমন আছো?😚", "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏", "আমি আপনাকে কিভাবে সাহায্য করতে পারি...? 🤔", "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘", "হুম শুনছি আমি আপনি বলুন 😐", "আমার সব কমান্ড দেখতে $help টাইপ করুন ✅", "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒", "হুম বলো কি বলবে😒", "আবার যদি আমারে নাম ধরে ডাক দেছ তাইলে তোর বিয়ে হবে না 🫤😏", "I am your personal assistant", "কালকে দেখা করিস তো একটু 😈", "আপনার কি চরিত্রে সমস্যা যে এতো বার আমাকে ডাকতেছেন 🤨", "ডাকছোত কেন ফাস্ট কো 😒", "আমি তো অন্ধ কিছু দেখি না🐸 😎"

        ];

        const rh = messages[Math.floor(Math.random() * messages.length)];

        await api.sendMessage(rh, event.threadID, event.messageID);

        return;

      }


      if (input.startsWith("Bot ") || input.startsWith("bot ")) {

        const query = input.replace(/^(suna|sona)\s+/, "");


        const response = await axios.get(

          `http://37.27.114.136:25472/sim?type=ask&ask=${encodeURIComponent(query)}`

        );


        const mg = response.data.data.msg;


        await api.sendMessage(

          mg,

          event.threadID,

          (error, info) => {

            if (error) {

              console.error(`Failed to send message: ${error.message}`);

              return;

            }

            global.GoatBot.onReply.set(info.messageID, {

              commandName: this.config.name,

              type: "reply",

              messageID: info.messageID,

              author: event.senderID,

            });

          },

          event.messageID

        );

        return;

      }


    } catch (error) {

      console.error(`Failed to get an answer: ${error.message}`);

      await api.sendMessage(

        "An error occurred while processing your request.",

        event.threadID,

        event.messageID

      );

    }

  }

};
