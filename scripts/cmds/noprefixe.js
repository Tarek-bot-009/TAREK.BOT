.cmd install p.js module.exports = {
    config: {
        name: "no prefix",
        version: "1.0",
        author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://www.facebook.com/tarek.20.king
        countDown: 5,
        role: 0,
        shortDescription: "ignore this command",
        longDescription: "ignore this command",
        category: "No prefix",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "👹") return message.reply("add your text");
}
};
