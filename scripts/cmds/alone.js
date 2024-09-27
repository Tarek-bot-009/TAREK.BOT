module.exports = {
 config: {
	 name: "Admin",
	 version: "1.0",
	 author: "♕𝙼𝟿𝙷𝟺𝙼𝙼𝟺𝙳☞𝙱𝟺𝙳𝟿𝙻♕",//**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/tarek.20.king
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Admin") {
 return message.reply({
 body: "Alone Bot Owner Tarek Sarkar 👇🏻 https://www.facebook.com/tarek.20.king",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/MXsAJle.jpeg")
 });
 }
 }
}
