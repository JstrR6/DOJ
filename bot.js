const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

async function setupBot() {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`);
    });

    try {
        await client.login(process.env.DISCORD_TOKEN);
    } catch (error) {
        console.error('Discord bot login error:', error);
    }
}

module.exports = {
    setupBot,
    client
};