import config from '../config.json'

const getLoginUrl = () => {
    return `https://discord.com/api/oauth2/authorize?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&response_type=code&scope=identify%20guilds`
}
export default getLoginUrl;